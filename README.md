# Chatter — website

Marketing and download site for **Chatter**, an unofficial client for Yapper.
The app is **closed source**. This repository is the website only.
Installable builds live on the public releases of `Yp777777777777/winerplus` — not source.

Next.js 14 (App Router, static export), plain CSS, no extra dependencies.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

The version name, unsigned IPA link and APK link are read in the browser from
the latest GitHub release (`Chatter.ipa` / `chatter.apk`), so a new build
updates the site without editing a version constant. If GitHub cannot be
reached, the page falls back to **Update 1.100.7** and

`https://github.com/Yp777777777777/winerplus/releases/download/v1.100.7/Chatter.ipa`

Do not tell visitors to clone a repo, run Actions, or build an IPA. iOS
installs that file with AltStore or Sideloadly.

## Screenshots

The decorations section shows real images only after these files exist in
`public/shots/` (phone screenshots, not mockups):

| File | What to capture |
| --- | --- |
| `decoration-profile.png` | Profile modal with a Discord avatar decoration centered on the avatar |
| `decoration-chat.png` | A chat row or member list where that same decoration is visible on the avatar |
| `studio-slots.png` | Studio → Profile, five look slots, one of them applied with the decoration |
| `glass-chat.png` | Liquid glass chat with a wallpaper showing through the panels |
| `nameplate.png` | A profile wearing a nameplate and a name effect |

Missing files must not be listed in `components/Shots.js` (a missing image is a 404).
When a PNG is in `public/shots/`, add it to the `SHOTS` array in that file:

```js
export const SHOTS = [
  { src: "/shots/decoration-profile.png", caption: "Profile modal — decoration centered on the avatar" },
];
```
