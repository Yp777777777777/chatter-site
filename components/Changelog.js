"use client";
import { useRelease } from "./ReleaseProvider";

export default function Changelog() {
  const { log, live, name } = useRelease();
  return (
    <section className="section" id="new">
      <div className="head">
        <span className="eyebrow">What's new</span>
        <h2>Recent releases</h2>
        <p className="sub">{live ? `Showing the public builds, starting with ${name}.` : "Taken from the latest published builds."}</p>
      </div>
      <div className="log">
        {log.map((r, n) => (
          <article className="entry glass" key={r.v}>
            <div className="ver"><b>{r.v}</b>{n === 0 && <span className="tag">Latest</span>}</div>
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
