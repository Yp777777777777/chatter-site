"use client";
import { useState } from "react";
import { SHOWCASE } from "@/lib/data";
import { Icon } from "./Icons";

export default function Showcase() {
  const [i, setI] = useState(0);
  const s = SHOWCASE[i];
  return (
    <section className="section" id="featured">
      <div className="head">
        <span className="eyebrow">Featured</span>
        <h2>What makes Chatter different</h2>
        <p className="sub">Highlights from the app, including Discord decorations.</p>
      </div>

      <div className="showcase glass">
        <div className="sc-tabs" role="tablist" aria-label="Featured features">
          {SHOWCASE.map((x, n) => (
            <button key={x.id} role="tab" aria-selected={n === i} className={"sc-tab" + (n === i ? " on" : "")} onClick={() => setI(n)}>
              <Icon name={x.icon} size={18} /> <span>{x.title}</span>
            </button>
          ))}
        </div>
        <div className="sc-body" role="tabpanel" key={s.id}>
          <div className="sc-badge"><Icon name={s.icon} size={34} /></div>
          <div className="sc-text">
            <span className="tag">{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul className="checks">
              {s.points.map((p) => (
                <li key={p}><Icon name="check" size={16} /> {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
