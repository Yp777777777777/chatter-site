import { Logo, Icon } from "./Icons";
import { APK_URL } from "@/lib/data";

export default function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav glass" aria-label="Main">
        <a className="brand" href="#top"><Logo size={30} /><span>Chatter</span></a>
        <div className="nav-links">
          <a href="#featured">Featured</a>
          <a href="#features">Features</a>
          <a href="#themes">Themes</a>
          <a href="#new">What&apos;s new</a>
        </div>
        <a className="btn btn-sm" href={APK_URL} download>
          <Icon name="download" size={16} /> Download
        </a>
      </nav>
    </header>
  );
}
