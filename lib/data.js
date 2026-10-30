export const REPO = "Yp777777777777/winerplus";
export const RELEASES_URL = `https://github.com/${REPO}/releases`;

// used until the latest release loads from github (or if github can't be reached)
export const FALLBACK = {
  version: "1.100.7",
  name: "Update 1.100.7",
  ipa: `https://github.com/${REPO}/releases/download/v1.100.7/Chatter.ipa`,
  apk: `https://github.com/${REPO}/releases/latest/download/chatter.apk`,
  notes: `https://github.com/${REPO}/releases/tag/v1.100.7`,
  releasesUrl: RELEASES_URL,
};

export const THEMES = [
  { id: "glass-dark", name: "Chatter Dark", scheme: "dark", alpha: 0.55, bg: ["#4a1a72", "#0c0910"], surface: "#171722", text: "#ececf1", muted: "#9ca3bf", accent: "#a86bff", accent2: "#e07bff" },
  { id: "glass-light", name: "Glass Light", scheme: "light", alpha: 0.62, bg: ["#eef1fb", "#dfe6ff"], surface: "#f2f4fa", text: "#1d1f23", muted: "#5b5d66", accent: "#4b6bfb", accent2: "#a45cff" },
  { id: "amoled", name: "AMOLED", scheme: "dark", alpha: 0.35, bg: ["#000000", "#050505"], surface: "#050505", text: "#f2f2f2", muted: "#8c8c96", accent: "#3ddc84", accent2: "#00b3a4" },
  { id: "aurora", name: "Aurora", scheme: "dark", alpha: 0.5, bg: ["#04121a", "#0d2340"], surface: "#0a1e2a", text: "#e6fbf6", muted: "#8fb3ad", accent: "#4be3c0", accent2: "#4aa8ff" },
  { id: "sakura", name: "Sakura", scheme: "dark", alpha: 0.55, bg: ["#1a0f17", "#2b1424"], surface: "#26161f", text: "#fdeef5", muted: "#c39aae", accent: "#ff9ecb", accent2: "#ffb36b" },
  { id: "ocean", name: "Ocean", scheme: "dark", alpha: 0.5, bg: ["#04131f", "#0a2b45"], surface: "#0a2233", text: "#e6f4ff", muted: "#8fb0c9", accent: "#47b6ff", accent2: "#5ce0d0" },
  { id: "ember", name: "Ember", scheme: "dark", alpha: 0.5, bg: ["#180a06", "#2c1108"], surface: "#25110b", text: "#ffece2", muted: "#c69a85", accent: "#ff8a4c", accent2: "#ffd166" },
  { id: "mono", name: "Mono", scheme: "dark", alpha: 0.45, bg: ["#0d0d0d", "#1a1a1a"], surface: "#151515", text: "#eaeaea", muted: "#9a9a9a", accent: "#e6e6e6", accent2: "#8a8a8a" },
  { id: "terminal", name: "Terminal", scheme: "dark", alpha: 0.4, bg: ["#030903", "#071307"], surface: "#061506", text: "#d6ffd9", muted: "#7fa982", accent: "#54ff8f", accent2: "#00e5ff" },
  { id: "candy", name: "Candy", scheme: "dark", alpha: 0.55, bg: ["#150a24", "#24103d"], surface: "#1f1036", text: "#f6ecff", muted: "#b79ad6", accent: "#ff7ad9", accent2: "#7ad4ff" },
];

export const FEATURES = [
  { icon: "spark", title: "Decorations", text: "Avatar decorations, frames, nameplates and name effects. Other Chatter users can see them too." },
  { icon: "user", title: "5 look slots", text: "Save your whole look and swap between 5 of them with one tap. Every account gets its own." },
  { icon: "palette", title: "10 themes", text: "Dark, light, AMOLED, sakura and more. Or make your own." },
  { icon: "layers", title: "Liquid glass", text: "Blurry glass panels with your wallpaper showing through. Turn it off if your phone struggles." },
  { icon: "monitor", title: "Screen share", text: "Share from DMs and voice channels, pause it, and record the call on your phone." },
  { icon: "lock", title: "Encrypted DMs", text: "Optional. Text only, 1:1 chats, between two people who both use Chatter." },
  { icon: "bell", title: "Quiet notifications", text: "Only mentions, DMs and friend requests. Tap one and it jumps to the message." },
  { icon: "bookmark", title: "Read later", text: "Save a message now, come back to it whenever." },
  { icon: "globe", title: "English and Portuguese", text: "The whole app is translated, not just a few labels." },
];

// shown until the real release notes load from github
export const CHANGELOG = [
  { v: "1.100.7", title: "Update 1.100.7", items: ["Fixed the missing microphone icon on Studio's Voice tab."] },
  { v: "1.100.5", title: "Slots login fix, Studio reorganised, backup fixes", items: [
    "Slots now notice which account is signed in, and update within a second or two of a login, logout or switch.",
    "Studio > Profile starts with the 5 slot tiles, and all five tabs fit on one row.",
    "Backups try native save, then the share sheet, then the browser, then the clipboard. Added a Copy backup button.",
  ] },
  { v: "1.100.3", title: "Studio audit and iOS sync", items: [
    "Appearance slots moved into Studio and follow the app language.",
    "Fixed a bug that broke the composer on older WebViews and Safari before 16.4.",
    "Android performance fixes now on iOS too.",
  ] },
  { v: "1.100.2", title: "Encrypted DMs", items: [
    "New padlock button next to Send in 1:1 DMs. Messages are encrypted on your device before they go out.",
    "Modals now switch off everything behind them, which fixed the glitchy profile card.",
  ] },
];
