import { FEATURES } from "@/lib/data";
import { Icon } from "./Icons";

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="head">
        <span className="eyebrow">Features</span>
        <h2>Everything on one glass surface</h2>
        <p className="sub">The chat stays the same. Chatter changes how it looks, feels and notifies you.</p>
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
