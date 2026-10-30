"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { THEMES } from "@/lib/data";

const Ctx = createContext({ id: "glass-dark", setTheme: () => {} });
export const useTheme = () => useContext(Ctx);

function rgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

export function applyTheme(t) {
  const s = document.documentElement.style;
  const light = t.scheme === "light";
  s.setProperty("--bg-a", t.bg[0]);
  s.setProperty("--bg-b", t.bg[1]);
  s.setProperty("--text", t.text);
  s.setProperty("--muted", t.muted);
  s.setProperty("--accent", t.accent);
  s.setProperty("--accent-2", t.accent2);
  s.setProperty("--glass-fill", light ? `rgba(255,255,255,${t.alpha})` : `rgba(${rgb(t.surface)}, ${t.alpha})`);
  s.setProperty("--glass-border", light ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.14)");
  s.setProperty("--fill", light ? "rgba(40,16,80,0.06)" : "rgba(255,255,255,0.07)");
  s.setProperty("--fill-h", light ? "rgba(40,16,80,0.11)" : "rgba(255,255,255,0.12)");
  s.setProperty("--line", light ? "rgba(40,16,80,0.12)" : "rgba(255,255,255,0.08)");
  s.setProperty("--shadow", light ? "0 20px 50px rgba(60,70,140,.18)" : "0 24px 64px rgba(0,0,0,.45)");
  document.documentElement.dataset.scheme = t.scheme;
}

export default function ThemeProvider({ children }) {
  const [id, setId] = useState("glass-dark");

  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem("chatter.site.theme"); } catch (e) {}
    const t = THEMES.find((x) => x.id === saved);
    if (t) { setId(t.id); applyTheme(t); }
  }, []);

  const setTheme = useCallback((next) => {
    const t = THEMES.find((x) => x.id === next);
    if (!t) return;
    setId(t.id);
    applyTheme(t);
    try { localStorage.setItem("chatter.site.theme", t.id); } catch (e) {}
  }, []);

  return <Ctx.Provider value={{ id, setTheme }}>{children}</Ctx.Provider>;
}
