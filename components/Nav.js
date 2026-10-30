"use client";
import { Logo } from "./Icons";

export default function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav glass" aria-label="Main">
        <a className="brand" href="#top"><Logo size={30} /><span>Chatter</span></a>
        <div className="nav-links">
          <a href="#decorations">Decorations</a>
          <a href="#studio">Studio</a>
          <a href="#themes">Themes</a>
        </div>
        <a className="btn btn-sm" href="#download">Download</a>
      </nav>
    </header>
  );
}
