import { CHANGELOG } from "@/lib/data";

export default function Changelog() {
  return (
    <section className="section" id="new">
      <div className="head">
        <span className="eyebrow">What&apos;s new</span>
        <h2>Recent releases</h2>
        <p className="sub">Taken from the project&apos;s own changelog.</p>
      </div>
      <div className="log">
        {CHANGELOG.map((r, n) => (
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
