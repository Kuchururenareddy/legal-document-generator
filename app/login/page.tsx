"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

type AuthView = "signup" | "login";
type LoginStage = "credentials" | "otp";

const OTP_LENGTH = 6;

function formatRemaining(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60).toString().padStart(2, "0");
  const s = (total % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();

  const nextPath = useMemo(() => {
    const p = params.get("next");
    return p && p.startsWith("/") ? p : "/welcome";
  }, [params]);

  const initialView: AuthView = params.get("view") === "signup" ? "signup" : "login";

  const [view, setView] = useState<AuthView>(initialView);
  const [showForgot, setShowForgot] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginStage, setLoginStage] = useState<LoginStage>("credentials");
  const [otpDigits, setOtpDigits] = useState<string[]>(Array.from({ length: OTP_LENGTH }, () => ""));
  const [otpExpiresAt, setOtpExpiresAt] = useState<number | null>(null);
  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    setView(initialView);
    setLoginStage("credentials");
    setOtpDigits(Array.from({ length: OTP_LENGTH }, () => ""));
    setError("");
    setNotice("");
  }, [initialView]);

  useEffect(() => {
    if (!otpExpiresAt) {
      setRemaining("");
      return;
    }

    const tick = () => {
      const delta = otpExpiresAt - Date.now();
      setRemaining(formatRemaining(delta));
      if (delta <= 0) {
        setError("Code expired. Please request a new verification code.");
      }
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [otpExpiresAt]);

  const otpCode = otpDigits.join("");

  const handleOtpChange = (idx: number, raw: string) => {
    const val = raw.replace(/\D/g, "").slice(-1);
    const next = [...otpDigits];
    next[idx] = val;
    setOtpDigits(next);

    if (val && idx < OTP_LENGTH - 1) {
      const nextInput = document.getElementById(`otp-${idx + 1}`) as HTMLInputElement | null;
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpDigits[idx] && idx > 0) {
      const prevInput = document.getElementById(`otp-${idx - 1}`) as HTMLInputElement | null;
      prevInput?.focus();
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setNotice("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error || "Unable to sign up.");
        return;
      }

      setNotice("Account created successfully. Please log in.");
      setView("login");
    } catch {
      setError("Unable to sign up. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setNotice("Sending code...");

    try {
      const res = await fetch("/api/auth/login/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        code?: string;
        error?: string;
        expiresAt?: number;
      };

      if (!res.ok || !json.ok) {
        if (json.code === "SMTP_NOT_CONFIGURED") {
          setError("Developer configuration required: set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM in .env.local.");
        } else {
          setError(json.error || "Unable to send the verification code at this time. Please try again later.");
        }
        setNotice("");
        return;
      }

      setLoginStage("otp");
      setOtpExpiresAt(typeof json.expiresAt === "number" ? json.expiresAt : Date.now() + 10 * 60 * 1000);
      setOtpDigits(Array.from({ length: OTP_LENGTH }, () => ""));
      setNotice("Code sent successfully.");
    } catch {
      setError("Unable to send the verification code at this time. Please try again later.");
      setNotice("");
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.length !== OTP_LENGTH) {
      setError("Please enter the complete 6-digit code.");
      return;
    }

    setSubmitting(true);
    setError("");
    setNotice("Verifying code...");

    try {
      const res = await fetch("/api/auth/login/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, code: otpCode }),
      });

      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error || "Invalid verification code.");
        setNotice("");
        return;
      }

      setNotice("Verification successful.");
      router.push(nextPath);
    } catch {
      setError("Unable to verify the code. Please try again.");
      setNotice("");
    } finally {
      setSubmitting(false);
    }
  };

  const resendCode = async () => {
    if (submitting) return;
    await handleRequestCode({ preventDefault: () => {} } as React.FormEvent);
  };

  return (
    <div className="ld-page min-h-screen px-5 py-10">
      <main className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <section className="hidden md:block">
          <p className="mb-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#5c6776]">Secure Access Portal</p>
          <h1 className="ld-title" style={{ fontSize: 40 }}>
            Access your legal document workspace.
          </h1>
          <p className="ld-subtitle max-w-xl">
            Authenticate with your credentials and email verification code to continue to the existing legal document workflow.
          </p>
          <div className="mt-6 ld-card">
            <p className="m-0 text-sm leading-7 text-[#24364f]">
              Multi-step verification protects account access and helps ensure trusted document operations.
            </p>
          </div>
        </section>

        <section className="ld-panel w-full p-8 md:p-9" aria-live="polite">
          <div className="mb-6 text-center">
            <p className="mb-1 text-xs font-semibold tracking-[0.16em] uppercase text-[#5c6776]">LegalDoc Assist</p>
            <h2 className="m-0 text-2xl font-semibold text-[#0b1f3a]">
              {view === "signup" ? "Create Account" : loginStage === "otp" ? "Verify your email" : "Login"}
            </h2>
            {loginStage === "otp" && (
              <p className="mt-2 text-sm text-[#5c6776]">
                We sent a verification code to <strong>{loginEmail}</strong>
              </p>
            )}
          </div>

          {view === "signup" ? (
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="ld-label" htmlFor="signup-name">Full Name</label>
                <input id="signup-name" className="ld-input" type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div>
                <label className="ld-label" htmlFor="signup-email">Email Address</label>
                <input id="signup-email" className="ld-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="ld-label" htmlFor="signup-password">Password</label>
                <input id="signup-password" className="ld-input" type="password" minLength={8} required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="ld-btn-primary w-full" disabled={submitting}>
                {submitting ? "Creating account..." : "Sign Up"}
              </button>
            </form>
          ) : loginStage === "credentials" ? (
            <form onSubmit={handleRequestCode} className="space-y-4">
              <div>
                <label className="ld-label" htmlFor="login-email">Email</label>
                <input id="login-email" className="ld-input" type="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              </div>
              <div>
                <label className="ld-label" htmlFor="login-password">Password</label>
                <div className="flex gap-2">
                  <input
                    id="login-password"
                    className="ld-input"
                    type={showPassword ? "text" : "password"}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <button type="button" className="ld-btn-outline" onClick={() => setShowPassword((s) => !s)} aria-label="Toggle password visibility">
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="text-right">
                <button type="button" className="ld-btn-text" onClick={() => setShowForgot(true)}>
                  Forgot Password?
                </button>
              </div>
              <button type="submit" className="ld-btn-primary w-full" disabled={submitting}>
                {submitting ? "Sending code..." : "Continue"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyCode} className="space-y-5">
              <div>
                <label className="ld-label">Verification Code</label>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {otpDigits.map((d, idx) => (
                    <input
                      key={idx}
                      id={`otp-${idx}`}
                      className="ld-input w-11 text-center text-lg font-semibold sm:w-12"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={d}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                      aria-label={`OTP digit ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-center text-sm text-[#5c6776]">Code expires in {remaining || "--:--"}</p>

              <button type="submit" className="ld-btn-primary w-full" disabled={submitting}>
                {submitting ? "Verifying..." : "Verify"}
              </button>

              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <button type="button" className="ld-btn-text" onClick={resendCode}>
                  Resend code
                </button>
                <button
                  type="button"
                  className="ld-btn-text"
                  onClick={() => {
                    setLoginStage("credentials");
                    setOtpDigits(Array.from({ length: OTP_LENGTH }, () => ""));
                    setError("");
                    setNotice("");
                  }}
                >
                  Change email
                </button>
              </div>
            </form>
          )}

          {notice && <p className="mt-4 text-center text-sm font-semibold text-[#1d6b4a]">{notice}</p>}
          {error && <p className="mt-3 text-center text-sm font-semibold text-[#8f2d2d]">{error}</p>}

          <p className="mt-5 text-center text-sm text-[#5c6776]">
            {view === "signup" ? "Already have an account?" : "Need an account?"}
            <button
              type="button"
              className="ld-btn-text"
              onClick={() => {
                setView(view === "signup" ? "login" : "signup");
                setLoginStage("credentials");
                setOtpDigits(Array.from({ length: OTP_LENGTH }, () => ""));
                setError("");
                setNotice("");
              }}
            >
              {view === "signup" ? "Login" : "Sign Up"}
            </button>
          </p>

          <p className="mt-3 text-center text-xs text-[#5c6776]">
            <Link href="/">Back to Welcome</Link>
          </p>
        </section>
      </main>

      {showForgot && (
        <div className="ld-overlay" onClick={() => setShowForgot(false)}>
          <div
            role="dialog"
            aria-labelledby="forgot-title"
            className="ld-panel absolute left-1/2 top-1/2 w-[min(430px,calc(100%-32px))] -translate-x-1/2 -translate-y-1/2 p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="forgot-title" className="mb-2 text-lg font-semibold text-[#0b1f3a]">Password assistance</h3>
            <p className="mb-5 text-sm leading-6 text-[#5c6776]">
              Password reset should use the same email verification infrastructure. Configure your reset flow endpoint before enabling self-service reset.
            </p>
            <button type="button" className="ld-btn-primary w-full" onClick={() => setShowForgot(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
