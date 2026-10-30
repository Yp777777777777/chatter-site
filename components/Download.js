import { Icon } from "./Icons";
import { APK_URL, RELEASES_URL, REPO_URL, VERSION } from "@/lib/data";

export default function Download() {
  return (
    <section className="section" id="platforms">
      <div className="head">
        <span className="eyebrow">Download</span>
        <h2>Get Chatter</h2>
        <p className="sub">Android is a one-tap download. iOS is installed with your own Apple ID.</p>
      </div>

      <div className="platforms">
        <article className="plat glass featured">
          <div className="plat-h"><Icon name="phone" size={26} /><div><h3>Android</h3><span>Version {VERSION} · APK</span></div></div>
          <a className="btn btn-block btn-lg" href={APK_URL} download><Icon name="download" size={20} /> Download chatter.apk</a>
          <ol className="steps">
            <li>Download the APK on your phone.</li>
            <li>Open it and allow installs from this source when Android asks.</li>
            <li>Install, open Chatter and sign in to your Yapper account.</li>
          </ol>
          <p className="fine">Requires Android 8.0 or newer. The in-app updater checks the same GitHub release, verifies the hash and the signature, and you confirm the install. <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">All releases</a></p>
        </article>

        <article className="plat glass">
          <div className="plat-h"><Icon name="phone" size={26} /><div><h3>iOS</h3><span>Unsigned IPA · sideload</span></div></div>
          <a className="btn btn-block btn-lg btn-ghost" href={REPO_URL} target="_blank" rel="noopener noreferrer"><Icon name="github" size={20} /> Build the IPA on GitHub</a>
          <ol className="steps">
            <li>Run the <b>iOS unsigned IPA</b> workflow in the repo&apos;s Actions tab.</li>
            <li>Download the <b>Chatter-unsigned-ipa</b> artifact.</li>
            <li>Install it with Sideloadly, AltStore, SideStore, TrollStore or your own signing service.</li>
          </ol>
          <p className="fine">Free Apple ID installs expire after 7 days. Keep the app extension on, since screen share needs it. No in-app updater and no true push on iOS.</p>
        </article>
      </div>
    </section>
  );
}
