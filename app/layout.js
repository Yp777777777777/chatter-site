import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Chatter — liquid glass client for Yapper",
  description: "Chatter is an unofficial Yapper client with a liquid glass interface, ten themes, profile cosmetics, screen share, smart notifications and encrypted DMs. Download for Android.",
  openGraph: { title: "Chatter", description: "Chat, in liquid glass. Unofficial client for Yapper.", type: "website" },
};

export const viewport = { themeColor: "#0c0910", colorScheme: "dark light" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scheme="dark">
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
