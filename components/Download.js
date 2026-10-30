"use client";
import { Icon } from "./Icons";
import usePlatform from "./usePlatform";
import { useRelease } from "./ReleaseProvider";

export default function Download() {
  const { name, version, ipa, apk, releasesUrl } = useRelease();
  const p = usePlatform();

  const android = (
    <article key="android" className={"plat glass" + (p === "android" ? " featured" : "")}>
      <div className="plat-h"><Icon name="phone" size={26} /><div><h3>Android</h3><span>{name}</span></div></div>
      <a className="btn btn-block btn-lg" href={apk}><Icon name="download" size={20} /> Download the APK</a>
      <ol className="steps">
        <li>Download the APK on your phone.</li>
        <li>Open it. Android will ask you to allow installs from your browser, say yes.</li>
        <li>Open Chatter and sign in with your Yapper account.</li>
      </ol>
      <p className="fine">Needs Android 8.0 or newer. Updates come from inside the app, you just confirm the install.</p>
    </article>
  );

  const ios = (
    <article key="ios" className={"plat glass" + (p === "ios" ? " featured" : "")}>
      <div className="plat-h"><Icon name="phone" size={26} /><div><h3>iPhone</h3><span>{name}</span></div></div>
      <a className="btn btn-block btn-lg" href={ipa}><Icon name="download" size={20} /> Download the IPA</a>
      <ol className="steps">
        <li>Download Chatter.ipa.</li>
        <li>Install it with AltStore or Sideloadly. SideStore and TrollStore work too.</li>
        <li>Open Chatter and sign in with your Yapper account.</li>
      </ol>
      <p className="fine">It's not signed, so there's no App Store version. With a free Apple ID the install runs out after 7 days, just refresh it in AltStore or Sideloadly. No push notifications on iOS.</p>
    </article>
  );

  return (
    <section className="section" id="download">
      <div className="head">
        <h2>Download Chatter</h2>
        <p className="sub">Latest build is v{version}. Pick your phone.</p>
      </div>
      <div className="platforms">{p === "ios" ? [ios, android] : [android, ios]}</div>
      <p className="fine all-builds"><a href={releasesUrl} target="_blank" rel="noopener noreferrer">See all builds on GitHub</a></p>
    </section>
  );
}
