"use client";
import { THEMES } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import { Icon } from "./Icons";

export default function Themes() {
  const { id, setTheme } = useTheme();
  return (
    <section className="section" id="themes">
      <div className="head">
        <h2>Try a theme right here</h2>
        <p className="sub">These are the real presets from the app. Tap one and this whole page changes.</p>
      </div>
      <div className="themes">
        {THEMES.map((t) => (
          <button key={t.id} className={"theme glass" + (t.id === id ? " on" : "")} onClick={() => setTheme(t.id)} aria-pressed={t.id === id}>
            <span className="swatch" style={{ background: `linear-gradient(135deg, ${t.bg[0]}, ${t.bg[1]})` }}>
              <i style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent2})` }} />
            </span>
            <span className="tname">{t.name}</span>
            {t.id === id && <span className="tick"><Icon name="check" size={14} /></span>}
          </button>
        ))}
      </div>
    </section>
  );
}
