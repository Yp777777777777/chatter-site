"use client";
import { useEffect, useState } from "react";

/** Drop these PNGs in public/shots/ and they appear here. Missing files stay hidden. */
export const SHOTS = [
  { src: "/shots/decoration-profile.png", caption: "Profile modal — decoration centered on the avatar" },
  { src: "/shots/decoration-chat.png", caption: "Chat and member list — same decoration on the avatar" },
  { src: "/shots/studio-slots.png", caption: "Studio · Profile — five look slots, one wearing the decoration" },
  { src: "/shots/glass-chat.png", caption: "Liquid glass chat with a wallpaper behind the panels" },
  { src: "/shots/nameplate.png", caption: "Nameplate and name effect on a profile" },
];

export default function Shots() {
  const [ready, setReady] = useState([]);

  useEffect(() => {
    let alive = true;
    Promise.all(
      SHOTS.map(
        (s) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(s);
            img.onerror = () => resolve(null);
            img.src = s.src;
          }),
      ),
    ).then((list) => {
      if (alive) setReady(list.filter(Boolean));
    });
    return () => {
      alive = false;
    };
  }, []);

  if (!ready.length) return null;
  return (
    <div className="shots" style={{ marginTop: 16 }}>
      {ready.map((s) => (
        <figure className="glass" key={s.src}>
          <img src={s.src} alt={s.caption} />
          <figcaption>{s.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
