"use client";
import { Icon } from "./Icons";
import { useRelease } from "./ReleaseProvider";

export default function Download() {
  const { name, version, ipa, apk, releasesUrl } = useRelease();
  return (
    <section className="section" id="platforms">
      <div className="head">
        <span className="eyebrow">Download</span>
        <h2>Get the unsigned IPA</h2>
        <p className="sub">iOS is a direct download of the unsigned Chatter.ipa. The version name follows the newest public build.</p>
      </div>

      <div className="platforms">
        <article className="plat glass featured">
          <div className="plat-h"><Icon name="phone" size={26} /><div><h3>iOS</h3><span>{name} · unsigned IPA</span></div></div>
          <a className="btn btn-block btn-lg" href={ipa}><Icon name="download" size={20} /> Download Chatter.ipa</a>
          <ol className="steps">
            <li>Download the unsigned <b>Chatter.ipa</b> for {name}. There is no App Store listing.</li>
            <li>Install it with AltStore or Sideloadly. SideStore and TrollStore work too.</li>
            <li>Open Chatter and sign in to your Yapper account.</li>
          </ol>
          <p className="fine">A free Apple ID install expires after 7 days. Refresh it in AltStore or Sideloadly. No in-app updater and no true push on iOS. This link is the IPA from the current public build (v{version}). <a href={releasesUrl} target="_blank" rel="noopener noreferrer">All builds</a></p>
        </article>

        <article className="plat glass">
          <div className="plat-h"><Icon name="phone" size={26} /><div><h3>Android</h3><span>{name} · APK</span></div></div>
          <a className="btn btn-block btn-lg btn-ghost" href={apk}><Icon name="download" size={20} /> Download chatter.apk</a>
          <ol className="steps">
            <li>Download the APK on your phone.</li>
            <li>Open it and allow installs from this source when Android asks.</li>
            <li>Install, open Chatter and sign in to your Yapper account.</li>
          </ol>
          <p className="fine">Requires Android 8.0 or newer. The in-app updater checks the published build and you confirm the install.</p>
        </article>
      </div>
    </section>
  );
}
