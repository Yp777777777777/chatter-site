import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Studio from "@/components/Studio";
import Themes from "@/components/Themes";
import Download from "@/components/Download";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";
import Decorations from "@/components/Decorations";

export default function Home() {
  return (
    <>
      <Decorations />
      <Nav />
      <main>
        <Hero />
        <Features />
        <Studio />
        <Themes />
        <Download />
        <Changelog />
      </main>
      <Footer />
    </>
  );
}
