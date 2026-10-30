import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ReleaseProvider from "@/components/ReleaseProvider";

export const metadata = {
  title: "Chatter, a nicer Yapper client for Android and iOS",
  description: "Chatter is an unofficial Yapper client with Discord avatar decorations, ten themes, liquid glass and optional encrypted DMs. Download the Android APK or the iOS IPA.",
  openGraph: { title: "Chatter", description: "Discord decorations, themes and liquid glass for Yapper. Android and iOS.", type: "website" },
};

export const viewport = { themeColor: "#0c0910", colorScheme: "dark light" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scheme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <ReleaseProvider>{children}</ReleaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
