# Chatter website

The download page for Chatter, an unofficial Yapper client. The app itself is closed source, this repo is only the site.

Next.js 14 (static export), plain CSS, no other dependencies.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site goes to /out
```

## How downloads work

On load the page asks GitHub for the latest release of `Yp777777777777/winerplus` and picks up the version name,
`Chatter.ipa`, `chatter.apk` and the release notes from it. So a new release updates the site by itself.
If GitHub can't be reached it falls back to the values in `lib/data.js`.

## Screenshots

They live in `public/shots/` (`chat.png`, `members.png`, `studio.png`), with the status bar cropped off.
