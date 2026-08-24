export type SpeechHandle = {
  pause: () => void;
  resume: () => void;
  currentTime: number;
  onended: (() => void) | null;
  onerror: (() => void) | null;
  play: () => Promise<void>;
  stop?: () => void;
};

export async function translateText(text: string, _targetLang: string) {
  return text;
}

const MAX_SPEECH_CHARS = 3800;

function normalizeSpeechText(input: string) {
  return input
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitIntoSpeechChunks(text: string, maxChars: number) {
  const paragraphs = text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  const chunks: string[] = [];
  let cur = "";

  const pushCur = () => {
    const t = cur.trim();
    if (t) chunks.push(t);
    cur = "";
  };

  for (const p of paragraphs) {
    if (!cur) {
      if (p.length <= maxChars) cur = p;
      else {
        for (let i = 0; i < p.length; i += maxChars) chunks.push(p.slice(i, i + maxChars));
      }
      continue;
    }

    const candidate = `${cur}\n\n${p}`;
    if (candidate.length <= maxChars) {
      cur = candidate;
      continue;
    }

    pushCur();
    if (p.length <= maxChars) cur = p;
    else {
      for (let i = 0; i < p.length; i += maxChars) chunks.push(p.slice(i, i + maxChars));
    }
  }

  pushCur();
  return chunks;
}

export function getFullDocumentText(rootSelector?: string): string {
  const prefer =
    (rootSelector ? (document.querySelector(rootSelector) as HTMLElement | null) : null) ||
    (document.getElementById("legal-doc") as HTMLElement | null) ||
    (document.querySelector(".ld-doc") as HTMLElement | null);

  const root =
    prefer?.closest("main, section, article, div") ||
    prefer ||
    (() => {
      let best: { el: HTMLElement; score: number } | null = null;
      for (const el of Array.from(document.querySelectorAll("main, section, article, div")) as HTMLElement[]) {
        const heading = el.querySelector("h1, h2, h3");
        if (!heading) continue;
        const text = el.innerText || "";
        if (text.replace(/\s+/g, "").length < 800) continue;
        const score = text.length;
        if (!best || score > best.score) best = { el, score };
      }
      return best?.el ?? document.body;
    })();

  const clone = root.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll(
      "button, nav, header, aside, form, input, select, textarea, label, option, .no-print"
    )
    .forEach((n) => n.remove());

  return normalizeSpeechText(clone.innerText || "");
}

export async function speakText(text: string, langCode: string): Promise<SpeechHandle | null> {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    throw new Error("Speech synthesis is not available in this browser.");
  }

  const voiceMap: Record<string, string> = { te: "te-IN", hi: "hi-IN", en: "en-IN" };
  const normalized = normalizeSpeechText(text);
  const chunks = splitIntoSpeechChunks(normalized, MAX_SPEECH_CHARS);
  if (!chunks.length) return null;

  window.speechSynthesis.cancel();

  let cancelled = false;
  let idx = 0;

  const handle: SpeechHandle = {
    pause: () => window.speechSynthesis.pause(),
    resume: () => window.speechSynthesis.resume(),
    currentTime: 0,
    onended: null,
    onerror: null,
    play: async () => Promise.resolve(),
    stop: () => {
      cancelled = true;
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    },
  };

  const speakNext = () => {
    if (cancelled) return;
    if (idx >= chunks.length) {
      handle.onended?.();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chunks[idx++]);
    utterance.lang = voiceMap[langCode] || langCode || "en-IN";
    utterance.rate = 0.95;
    utterance.onend = () => speakNext();
    utterance.onerror = () => {
      handle.onerror?.();
    };

    window.speechSynthesis.speak(utterance);
  };

  // Start on next tick so the caller can attach handlers safely.
  queueMicrotask(speakNext);
  return handle;
}
