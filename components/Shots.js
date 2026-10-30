"use client";

/**
 * Real screenshots only. Leave this empty until the files exist in public/shots/.
 * Adding a src that is not actually there logs a 404, so do not list missing files.
 *
 * decoration-profile.png — profile modal, Discord decoration centered on the avatar
 * decoration-chat.png — chat or member list, same decoration on the avatar
 * studio-slots.png — Studio → Profile, five look slots, one applied
 * glass-chat.png — liquid glass chat with a wallpaper behind the panels
 * nameplate.png — profile with a nameplate and a name effect
 */
export const SHOTS = [];

export default function Shots() {
  if (!SHOTS.length) return null;
  return (
    <div className="shots" style={{ marginTop: 16 }}>
      {SHOTS.map((s) => (
        <figure className="glass" key={s.src}>
          <img src={s.src} alt={s.caption} />
          <figcaption>{s.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
