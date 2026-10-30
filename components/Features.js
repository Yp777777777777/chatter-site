import { FEATURES } from "@/lib/data";
import { Icon } from "./Icons";

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="head">
        <h2>What else is in there</h2>
        <p className="sub">The chat works like it always did. These are the extras.</p>
      </div>
      <div className="grid">
        {FEATURES.map((f) => (
          <article className="card glass" key={f.title}>
            <div className="ico"><Icon name={f.icon} size={22} /></div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
