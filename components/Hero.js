"use client";
import { Icon } from "./Icons";
import Phone from "./Phone";
import usePlatform from "./usePlatform";
import { useRelease } from "./ReleaseProvider";

export default function Hero() {
  const { name, ipa, apk } = useRelease();
  const p = usePlatform();
  const apkBtn = <a key="a" className={"btn btn-lg" + (p === "ios" ? " btn-ghost" : "")} href={apk}><Icon name="download" size={20} /> Android APK</a>;
  const iosBtn = <a key="i" className={"btn btn-lg" + (p !== "ios" ? " btn-ghost" : "")} href={ipa}><Icon name="download" size={20} /> iOS IPA</a>;
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="pill glass"><span className="dot" /> unofficial yapper client · {name}</span>
        <h1>Yapper, but it looks how <i>you</i> want.</h1>
        <p className="lead">
          I made Chatter because I wanted Discord decorations, themes and a nicer looking chat on my phone.
          You sign in with your normal Yapper account and everything else is just there.
        </p>
        <div className="cta">{p === "ios" ? [iosBtn, apkBtn] : [apkBtn, iosBtn]}</div>
        <p className="fine">Works on Android and iOS. Not on any app store, you download it from here.</p>
      </div>
      <Phone src="/shots/chat.png" alt="A Chatter channel with glass panels, avatar decorations and a custom name color" w={780} h={1630} priority />
    </section>
  );
}
