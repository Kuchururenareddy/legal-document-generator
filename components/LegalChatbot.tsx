"use client";
import React, { useEffect, useRef, useState } from "react";

const getLegalExplanation = (query: string) => {
  const q = query.toLowerCase();

  if (q.includes("vendor")) return "VENDOR: The person selling the property. In your Sale Deed, this is the 'First Part'.";
  if (q.includes("vendee")) return "VENDEE: The person buying the property. In your Sale Deed, this is the 'Second Part'.";
  if (q.includes("witness")) return "WITNESS: Two neutral individuals required to sign the deed to attest that the parties signed voluntarily. They must provide ID proof.";
  if (q.includes("consideration")) return "CONSIDERATION: The total amount of money paid for the property. It must be mentioned in both figures and words.";
  if (q.includes("execution")) return "EXECUTION: The act of signing the legal document by the parties involved.";
  if (q.includes("indemnity")) return "INDEMNITY CLAUSE: A promise by the Seller to compensate the Buyer for any future legal disputes or losses regarding the property title.";
  if (q.includes("possession")) return "POSSESSION CLAUSE: Confirms that physical control and the 'vacant possession' of the property have been handed over to the Buyer.";
  if (q.includes("encumbrance")) return "ENCUMBRANCE CLAUSE: Assures the buyer that the property is free from mortgages, liens, or legal dues.";
  if (q.includes("sale deed")) return "SALE DEED: The main document that transfers ownership. It is the proof of title once registered at the SRO.";
  if (q.includes("ec") || q.includes("encumbrance certificate")) return "EC (Encumbrance Certificate): A document showing all registered transactions on a property over a period (usually 30 years). It proves the property is debt-free.";
  if (q.includes("spa") || q.includes("power of attorney")) return "SPA (Special Power of Attorney): Allows a specific person to act on your behalf for a single transaction, like signing a deed if you are absent.";

  return "That is an important legal detail. Could you specify which clause or document part you'd like me to explain further?";
};

export default function LegalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "I am your Legal Specialist. I can explain clauses, document types, and terms like 'Vendor' or 'Indemnity'. How can I assist with your registration today?" },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim() || busy) return;
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setBusy(true);
    const explanation = getLegalExplanation(input);
    setInput("");
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: explanation }]);
      setBusy(false);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[3000]">
      <button
        type="button"
        className="ld-btn-primary w-[52px] h-[52px] rounded-full p-0 min-h-0"
        aria-expanded={isOpen}
        aria-controls="legal-assistant-panel"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Help"}
      </button>

      {isOpen && (
        <div
          id="legal-assistant-panel"
          role="dialog"
          aria-label="Legal assistance"
          ref={dialogRef}
          className="absolute bottom-[68px] right-0 w-[min(380px,calc(100vw-32px))] h-[520px] bg-white border border-[#d5dbe6] shadow-[0_16px_40px_rgba(11,31,58,0.16)] flex flex-col overflow-hidden"
        >
          <div className="bg-[#0b1f3a] text-white px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-sm">Legal assistance</span>
            <button type="button" className="ld-btn-text text-white" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-[#fbfaf7]">
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={`max-w-[88%] px-3 py-2 text-sm leading-6 ${
                  m.role === "user"
                    ? "self-end bg-[#0b1f3a] text-white"
                    : "self-start bg-white border border-[#d5dbe6] text-[#142033]"
                }`}
              >
                {m.text}
              </div>
            ))}
            {busy && (
              <div className="self-start text-xs text-[#5c6776]">Processing…</div>
            )}
          </div>
          <div className="p-3 border-t border-[#d5dbe6] flex gap-2">
            <label htmlFor="legal-help-input" className="sr-only">
              Ask a legal term
            </label>
            <input
              id="legal-help-input"
              className="ld-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about Sale Deed, Witness, EC…"
            />
            <button type="button" className="ld-btn-primary" onClick={handleSend} disabled={busy}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
