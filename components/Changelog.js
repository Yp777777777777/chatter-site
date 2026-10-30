"use client";
import { useRelease } from "./ReleaseProvider";

export default function Changelog() {
  const { log } = useRelease();
  return (
    <section className="section" id="new">
      <div className="head">
        <h2>What changed lately</h2>
      </div>
      <div className="log">
        {log.map((r, n) => (
          <article className="entry glass" key={r.v}>
            <div className="ver"><b>{r.v}</b>{n === 0 && <span className="tag">latest</span>}</div>
            <div>
              <h3>{r.title}</h3>
              <ul>{r.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
