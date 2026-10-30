"use client";
import { Icon, Logo } from "./Icons";
import { FACTS } from "@/lib/data";
import { useRelease } from "./ReleaseProvider";

export default function Hero() {
  const { version, name, ipa, apk, notes } = useRelease();
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="pill glass"><span className="dot" /> Unofficial client for Yapper · {name}</span>
        <h1>Chat, in <span className="grad">liquid glass</span>.</h1>
        <p className="lead">
          Download the unsigned iOS IPA and install it with AltStore or Sideloadly.
          Discord avatar decorations stay centered on the portrait, with ten themes,
          liquid glass and optional encrypted DMs.
        </p>
        <div className="cta">
          <a className="btn btn-lg" href={ipa}>
            <Icon name="download" size={20} /> Download unsigned IPA
          </a>
          <a className="btn btn-lg btn-ghost" href={apk}>
            <Icon name="phone" size={20} /> Android APK
          </a>
        </div>
        <p className="fine">Unsigned Chatter.ipa · {name} · not on the App Store · free Apple ID installs expire after 7 days</p>
      </div>

      <aside className="hero-card glass" aria-label="Latest release">
        <div className="hc-top">
          <Logo size={72} />
          <div>
            <div className="hc-name">Chatter</div>
            <div className="hc-sub">{name} · v{version}</div>
          </div>
          <span className="tag">iOS</span>
        </div>
        <a className="btn btn-block" href={ipa}>
          <Icon name="download" size={18} /> Chatter.ipa
        </a>
        <ul className="facts">
          {FACTS.map((f) => (
            <li key={f.label}><b>{f.value}</b><span>{f.label}</span></li>
          ))}
        </ul>
        <a className="hc-link" href={notes} target="_blank" rel="noopener noreferrer">
          Release notes for {name}
        </a>
      </aside>
    </section>
  );
}
