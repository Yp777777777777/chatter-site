import { Icon, Logo } from "./Icons";
import { APK_URL, VERSION, FACTS, REPO_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="pill glass"><span className="dot" /> Unofficial client for Yapper · v{VERSION}</span>
        <h1>Chat, in <span className="grad">liquid glass</span>.</h1>
        <p className="lead">
          Chatter wraps Yapper in a native app with a glass interface, ten themes, profile cosmetics,
          screen share, smart notifications and optional encrypted DMs.
        </p>
        <div className="cta">
          <a className="btn btn-lg" href={APK_URL} download>
            <Icon name="download" size={20} /> Download for Android
          </a>
          <a className="btn btn-lg btn-ghost" href="#platforms">
            <Icon name="phone" size={20} /> iOS install guide
          </a>
        </div>
        <p className="fine">Direct APK from GitHub Releases · Android 8.0 or newer · Free</p>
      </div>

      <aside className="hero-card glass" aria-label="Latest release">
        <div className="hc-top">
          <Logo size={72} />
          <div>
            <div className="hc-name">Chatter</div>
            <div className="hc-sub">Latest release · {VERSION}</div>
          </div>
          <span className="tag">Android</span>
        </div>
        <a className="btn btn-block" href={APK_URL} download>
          <Icon name="download" size={18} /> chatter.apk
        </a>
        <ul className="facts">
          {FACTS.map((f) => (
            <li key={f.label}><b>{f.value}</b><span>{f.label}</span></li>
          ))}
        </ul>
        <a className="hc-link" href={REPO_URL} target="_blank" rel="noopener noreferrer">
          <Icon name="github" size={16} /> View source and release notes
        </a>
      </aside>
    </section>
  );
}
