export const VERSION = "1.100.5";
export const REPO = "Yp777777777777/winerplus";
export const APK_URL = `https://github.com/${REPO}/releases/latest/download/chatter.apk`;
export const RELEASES_URL = `https://github.com/${REPO}/releases/latest`;
export const REPO_URL = `https://github.com/${REPO}`;

// Presets copied from the app's themes.json
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

export const FACTS = [
  { value: "10", label: "built-in themes" },
  { value: "5", label: "appearance slots per account" },
  { value: "2", label: "languages: English, Portuguese" },
  { value: "8.0+", label: "Android (API 26 and up)" },
];

export const SHOWCASE = [
  { id: "studio", icon: "sliders", title: "Studio", tag: "Customize",
    text: "One place for everything. Four tabs, one row per feature: a switch, and a gear for its full settings. Open it from Settings next to the site's own gear, or hold the user bar.",
    points: ["Profile, Chat, Look and More tabs", "Plugins: built-in and custom, synced across your devices", "Backup, export and a safe reset"] },
  { id: "glass", icon: "layers", title: "Liquid glass", tag: "Look",
    text: "The chat stage becomes a single glass surface with backdrop blur, saturation and an inner highlight. Pick liquid glass or solid: both look the same, only the material changes.",
    points: ["Wallpaper with its own blur control", "Opt-in motion blur on panels and menus", "Performance mode switches the blur off"] },
  { id: "calls", icon: "monitor", title: "Calls and screen share", tag: "Voice",
    text: "Share your screen in server voice channels and in DMs, pause it, and record the call locally. Sharing publishes only a video track into the call you are already in, so your mic never drops.",
    points: ["Pause and resume while sharing", "Local call recording", "Android 1080p30 preset that steps down on weaker devices"] },
  { id: "e2e", icon: "lock", title: "Encrypted DMs", tag: "Privacy",
    text: "A padlock next to Send encrypts a message on your device before it leaves. People without Chatter only see scrambled text. Keys are generated per device with WebCrypto and the private key is never exportable.",
    points: ["1:1 DMs, text only", "Security code check if a contact's key changes", "No forward secrecy; the server still sees who talks to whom"] },
  { id: "slots", icon: "user", title: "Appearance slots", tag: "Profile",
    text: "Decoration, avatar and name effects, nameplate, profile theme, frame, colors, badges and status are remembered per account. Each account gets 5 slots; tap a slot to apply it, tap an empty one to save.",
    points: ["Switching accounts restores that account's look", "New accounts start clean", "Frames and effects show for everyone using Chatter"] },
  { id: "notify", icon: "bell", title: "Smart notifications", tag: "Alerts",
    text: "Only what matters: mentions, DMs and friend requests, each in its own channel. Never every server message, never your own, never a muted channel. Tapping one opens the chat and scrolls to the message.",
    points: ["Reply straight from the notification", "Foreground service keeps the socket alive on Android", "Local notifications on iOS while the app stays alive"] },
];

export const FEATURES = [
  { icon: "layers", title: "Liquid glass UI", text: "Blur, saturation and soft highlights across the chat stage, top bar, tab bar and composer." },
  { icon: "palette", title: "10 themes", text: "From Chatter Dark to AMOLED, Aurora, Sakura, Ember and Terminal. Or build your own in the editor." },
  { icon: "user", title: "Profile cosmetics", text: "Frames, name plates, avatar effects and card effects that sync to other Chatter users." },
  { icon: "bell", title: "Mentions and DMs", text: "Separate notification channels, quick reply and tap-to-open at the exact message." },
  { icon: "monitor", title: "Screen share", text: "Share from DMs and server voice channels with pause and local recording." },
  { icon: "lock", title: "Encrypted DMs", text: "Optional end-to-end text encryption between two Chatter devices." },
  { icon: "bookmark", title: "Read later", text: "Save messages, reopen them from a panel or the dock, and jump back to the original." },
  { icon: "globe", title: "English and Portuguese", text: "Placeholders, titles and labels are translated, not only the visible text." },
];

export const CHANGELOG = [
  { v: "1.100.5", title: "Slots login fix, Studio reorganised, backup and export fixes", items: [
    "Slots recognise the signed-in account in more cases, and panels redraw within about 1.5 seconds of a login, logout or switch.",
    "Studio > Profile starts with 5 slot tiles; Profile and Chat tabs are grouped, with five tabs on one row.",
    "Downloads try native save, then the share sheet, then the browser, then the clipboard. New Copy backup button.",
    "Read mode exit chip moved to bottom-centre so it no longer hides under Studio's close button.",
  ] },
  { v: "1.100.3", title: "Studio audit and iOS sync", items: [
    "Appearance slots now live in Studio, with labels that follow the app language.",
    "Fixed a regex that broke the composer on older WebViews and Safari before 16.4.",
    "Android performance fixes ported to iOS: fewer timers, no re-render loop in Read later, paused animations behind profile modals.",
  ] },
  { v: "1.100.2", title: "Encrypted DMs", items: [
    "Padlock button next to Send in 1:1 DMs. Messages are encrypted on the device before they go out.",
    "ECDH P-256 per device, AES-GCM keys via HKDF, trust on first use with a security code check.",
    "Modals now switch off everything behind them, which fixed the glitchy profile card.",
  ] },
  { v: "1.100", title: "Motion blur, smoother motion, per-account slots", items: [
    "Opt-in motion blur with an intensity slider; off in performance mode and reduced motion.",
    "Expo-out entrances using only transform and opacity, plus press feedback on buttons.",
    "Per-account appearance with 5 slots each.",
  ] },
  { v: "1.99.1", title: "Truly sharp wallpaper", items: [
    "Background blur at 0 now applies no filter at all, so the WebView stops softening the image.",
    "Glass, surface blur, dimensions and themes are unchanged.",
  ] },
];
