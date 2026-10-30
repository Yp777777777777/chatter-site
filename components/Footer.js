"use client";
import { Logo, Icon } from "./Icons";
import { useRelease } from "./ReleaseProvider";

export default function Footer() {
  const { name, releasesUrl } = useRelease();
  return (
    <footer className="footer">
      <div className="note glass">
        <Icon name="shield" size={20} />
        <p>
          Chatter is unofficial and has nothing to do with Yapper or Discord. The app is closed source and this site is just the download page.
          Your login stays on your device. Encrypted DMs only cover text in 1:1 chats, the server can still see who is talking to who.
        </p>
      </div>
      <div className="foot-row">
        <a className="brand" href="#top"><Logo size={26} /><span>Chatter</span></a>
        <span className="fine">{name}</span>
        <a className="fine" href={releasesUrl} target="_blank" rel="noopener noreferrer">All builds</a>
      </div>
    </footer>
  );
}
