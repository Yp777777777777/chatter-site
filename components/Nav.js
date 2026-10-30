"use client";
import { Logo, Icon } from "./Icons";
import { useRelease } from "./ReleaseProvider";

export default function Nav() {
  const { ipa } = useRelease();
  return (
    <header className="nav-wrap">
      <nav className="nav glass" aria-label="Main">
        <a className="brand" href="#top"><Logo size={30} /><span>Chatter</span></a>
        <div className="nav-links">
          <a href="#decorations">Decorations</a>
          <a href="#featured">Featured</a>
          <a href="#themes">Themes</a>
          <a href="#platforms">Download</a>
        </div>
        <a className="btn btn-sm" href={ipa}>
          <Icon name="download" size={16} /> Unsigned IPA
        </a>
      </nav>
    </header>
  );
}
