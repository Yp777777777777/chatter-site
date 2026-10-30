import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ReleaseProvider from "@/components/ReleaseProvider";

export const metadata = {
  title: "Chatter — unsigned iOS client for Yapper",
  description: "Download the unsigned Chatter.ipa for iOS. Unofficial Yapper client with Discord avatar decorations, liquid glass, ten themes and encrypted DMs. Install with AltStore or Sideloadly.",
  openGraph: { title: "Chatter", description: "Unsigned iOS IPA. Discord decorations, in liquid glass.", type: "website" },
};

export const viewport = { themeColor: "#0c0910", colorScheme: "dark light" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scheme="dark">
      <body>
        <ThemeProvider>
          <ReleaseProvider>{children}</ReleaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
