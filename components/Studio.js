import Phone from "./Phone";

export default function Studio() {
  return (
    <section className="section split" id="studio">
      <div className="copy">
        <h2>Studio is where everything lives</h2>
        <p>
          All the settings are in one place, split into Profile, Chat, Voice, Look and More.
          Every row is a switch with a gear next to it for the details. Can't find something? There's a search bar at the top.
        </p>
        <p>
          The five slots at the top save your whole look. Tap a slot to use it, tap an empty one to save what you have on right now.
        </p>
        <p className="fine">Open it from Settings, or hold the user bar.</p>
      </div>
      <Phone src="/shots/studio.png" alt="Chatter's Studio screen showing five appearance slots and the settings list" w={780} h={1603} />
    </section>
  );
}
