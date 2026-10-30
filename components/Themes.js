"use client";
import { THEMES } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import { Icon } from "./Icons";

export default function Themes() {
  const { id, setTheme } = useTheme();
  return (
    <section className="section" id="themes">
      <div className="head">
        <span className="eyebrow">Themes</span>
        <h2>Ten presets. Try one on this page.</h2>
        <p className="sub">These are the app&apos;s real presets. Tap one and the whole site changes with it.</p>
      </div>
      <div className="themes">
        {THEMES.map((t) => (
          <button key={t.id} className={"theme glass" + (t.id === id ? " on" : "")} onClick={() => setTheme(t.id)} aria-pressed={t.id === id}>
            <span className="swatch" style={{ background: `linear-gradient(135deg, ${t.bg[0]}, ${t.bg[1]})` }}>
              <i style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent2})` }} />
            </span>
            <span className="tname">{t.name}</span>
            <span className="tmeta">{t.scheme}</span>
            {t.id === id && <span className="tick"><Icon name="check" size={14} /></span>}
          </button>
        ))}
      </div>
    </section>
  );
}
