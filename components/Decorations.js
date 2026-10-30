import Shots from "./Shots";
import { Icon } from "./Icons";

export default function Decorations() {
  return (
    <section className="section" id="decorations">
      <div className="head">
        <span className="eyebrow">Discord decorations</span>
        <h2>The decoration stays on the avatar.</h2>
        <p className="sub">Centered. The right size. Not clipped by the profile card, and not lost when you switch accounts.</p>
      </div>
      <div className="deco-stage glass">
        <div className="deco-card" aria-hidden="true">
          <div className="deco-avatar-wrap">
            <span className="deco-ring" />
            <span className="deco-face">C</span>
          </div>
          <div className="deco-name">chatter</div>
          <span className="deco-plate">Nameplate</span>
        </div>
        <div className="deco-copy">
          <h3>Discord avatar decorations, shown properly</h3>
          <p>
            Stock clients crop them, shift them, or hide them inside a modal.
            Chatter keeps the decoration centered on the portrait, at the size it was drawn for,
            in the profile and in chat. Frames, nameplates and name effects travel with it.
          </p>
          <ul className="checks">
            <li><Icon name="check" size={16} /> Profile modal decorations sit in the middle, not on the edge</li>
            <li><Icon name="check" size={16} /> Five appearance slots per account remember the whole look</li>
            <li><Icon name="check" size={16} /> A pack without a nameplate clears the old one instead of leaving it stuck</li>
            <li><Icon name="check" size={16} /> People on Chatter see the frame and the effect</li>
          </ul>
        </div>
      </div>
      <Shots />
    </section>
  );
}
