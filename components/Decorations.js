import { Icon } from "./Icons";
import Phone from "./Phone";

export default function Decorations() {
  return (
    <section className="section split flip" id="decorations">
      <Phone src="/shots/members.png" alt="The member list with Discord decorations around the avatars, badges and name effects" w={780} h={1658} />
      <div className="copy">
        <h2>Discord decorations, done simply</h2>
        <p>
          Pick a decoration and it sits right in the middle of your avatar. In chat, in the member list, in your profile.
          It doesn't get cropped or pushed into a corner.
        </p>
        <ol className="steps">
          <li>Open Studio and go to Profile.</li>
          <li>Pick a decoration, frame or nameplate. Or paste a style pack code and it sets all of them at once.</li>
          <li>Save it in a slot so you can get it back with one tap.</li>
        </ol>
        <p className="fine"><Icon name="check" size={14} /> Other people on Chatter see your frame and name effect too.</p>
      </div>
    </section>
  );
}
