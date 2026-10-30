import { Logo, Icon } from "./Icons";
import { REPO_URL, VERSION } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="note glass">
        <Icon name="shield" size={20} />
        <p>
          Chatter is an independent, unofficial client for Yapper. It is not affiliated with or endorsed by Yapper.
          It loads the real site, keeps its login and Cloudflare check untouched, and stores your session only on your device.
          Encrypted DMs cover text in 1:1 chats only; message metadata stays visible to the server.
        </p>
      </div>
      <div className="foot-row">
        <a className="brand" href="#top"><Logo size={26} /><span>Chatter</span></a>
        <span className="fine">v{VERSION}</span>
        <a className="fine" href={REPO_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
}
