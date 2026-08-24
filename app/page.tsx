"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { successToast } from "./ui/chrome";

type AuthView = "signup" | "login";
type LoginStage = "credentials" | "otp";

export default function UnifiedAuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextPath = useMemo(() => {
    const raw = searchParams.get("next") || "/welcome";
    // Prevent open redirects.
    if (raw.startsWith("/")) return raw;
    return "/welcome";
  }, [searchParams]);

  const viewParam = searchParams.get("view");
  const initialView: AuthView = viewParam === "login" ? "login" : "signup";

  const [view, setView] = useState<AuthView>(initialView);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  // Signup form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Login flow
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStage, setLoginStage] = useState<LoginStage>("credentials");
  const [otpCode, setOtpCode] = useState("");
  const [devOtp, setDevOtp] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string>("");

  useEffect(() => {
    setView(initialView);
    setShowSuccess(false);
    setLoginStage("credentials");
    setOtpCode("");
    setDevOtp(null);
    setAuthError("");
  }, [initialView]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setAuthError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setAuthError(json.error || "Unable to sign up.");
        return;
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setView("login");
        setLoginStage("credentials");
        setAuthError("");
      }, 1200);
    } catch {
      setAuthError("Unable to sign up.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setAuthError("");
    setDevOtp(null);

    try {
      const res = await fetch("/api/auth/login/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; devOtp?: string };
      if (!res.ok || !json.ok) {
        setAuthError(json.error || "Unable to request verification code.");
        return;
      }

      if (json.devOtp) setDevOtp(json.devOtp);
      setLoginStage("otp");
    } catch {
      setAuthError("Unable to request verification code.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setAuthError("");

    try {
      const res = await fetch("/api/auth/login/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, code: otpCode }),
      });

      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setAuthError(json.error || "Invalid or expired code.");
        return;
      }

      router.push(nextPath);
    } catch {
      setAuthError("Unable to verify the code. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="ld-page flex min-h-screen flex-col items-center justify-center px-5 py-10">
      {showSuccess && (
        <div role="status" style={successToast}>
          Account created successfully. Please log in.
        </div>
      )}

      <div className="mb-8 text-center">
        <p className="mb-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5c6776]">
          Official document service
        </p>
        <h1 className="ld-title" style={{ fontSize: 42 }}>
          LegalDoc <span style={{ color: "#b08d57" }}>Assist</span>
        </h1>
        <p className="ld-subtitle">Professional legal document management</p>
      </div>

      <div className="ld-panel w-full max-w-[440px] p-9">
        {view === "signup" ? (
          <div>
            <h2 className="mb-6 text-center text-2xl font-semibold text-[#0b1f3a]">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label className="ld-label" htmlFor="signup-name">Full Name</label>
                <input
                  id="signup-name"
                  className="ld-input"
                  type="text"
                  placeholder="Full name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="ld-label" htmlFor="signup-email">Email Address</label>
                <input
                  id="signup-email"
                  className="ld-input"
                  type="email"
                  placeholder="name@example.gov"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label className="ld-label" htmlFor="signup-password">Create Password</label>
                <input
                  id="signup-password"
                  className="ld-input"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="ld-btn-primary w-full" disabled={submitting}>
                {submitting ? "Saving…" : "Sign Up & Join"}
              </button>
            </form>
            <p className="mt-5 text-center text-sm text-[#5c6776]">
              Already have an account?
              <button
                type="button"
                className="ld-btn-text"
                onClick={() => {
                  setView("login");
                  setLoginStage("credentials");
                  setAuthError("");
                }}
              >
                Login
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="mb-6 text-center text-2xl font-semibold text-[#0b1f3a]">Login</h2>

            {loginStage === "credentials" ? (
              <form onSubmit={handleRequestCode}>
                <div className="mb-4">
                  <label className="ld-label" htmlFor="login-email">Email</label>
                  <input
                    id="login-email"
                    className="ld-input"
                    type="text"
                    placeholder="your@email.com"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="ld-label" htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    className="ld-input"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                <div className="mb-4 text-right">
                  <button type="button" className="ld-btn-text" onClick={() => setShowForgot(true)}>
                    Forgot Password?
                  </button>
                </div>

                <button type="submit" className="ld-btn-primary w-full" disabled={submitting}>
                  {submitting ? "Sending code…" : "Login"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyCode}>
                <div className="mb-4">
                  <label className="ld-label" htmlFor="otp-code">Verification Code</label>
                  <input
                    id="otp-code"
                    className="ld-input"
                    type="text"
                    inputMode="numeric"
                    placeholder="6-digit code"
                    required
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  />
                </div>

                {devOtp && (
                  <p className="mb-4 text-sm text-[#5c6776]">
                    Dev OTP (explicit fallback): <span className="font-semibold">{devOtp}</span>
                  </p>
                )}

                <button type="submit" className="ld-btn-primary w-full" disabled={submitting}>
                  {submitting ? "Verifying…" : "Verify & Continue"}
                </button>

                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="ld-btn-text"
                    onClick={() => {
                      setLoginStage("credentials");
                      setOtpCode("");
                      setDevOtp(null);
                      setAuthError("");
                    }}
                  >
                    Back
                  </button>
                </div>
              </form>
            )}

            {authError && <p className="mt-4 text-center text-sm font-semibold text-[#8f2d2d]">{authError}</p>}

            <p className="mt-5 text-center text-sm text-[#5c6776]">
              Need an account?
              <button
                type="button"
                className="ld-btn-text"
                onClick={() => {
                  setView("signup");
                  setLoginStage("credentials");
                  setOtpCode("");
                  setDevOtp(null);
                  setAuthError("");
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
        )}
      </div>

      {showForgot && (
        <div className="ld-overlay" onClick={() => setShowForgot(false)}>
          <div
            role="dialog"
            aria-labelledby="forgot-title"
            className="ld-panel absolute left-1/2 top-1/2 w-[min(420px,calc(100%-32px))] -translate-x-1/2 -translate-y-1/2 p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="forgot-title" className="mb-2 text-lg font-semibold text-[#0b1f3a]">Password assistance</h3>
            <p className="mb-5 text-sm leading-6 text-[#5c6776]">
              Password reset is handled by your administrator. Please contact the records office if you cannot access your account.
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
