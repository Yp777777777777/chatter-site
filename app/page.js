import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Decorations from "@/components/Decorations";
import Studio from "@/components/Studio";
import Features from "@/components/Features";
import Themes from "@/components/Themes";
import Download from "@/components/Download";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div className="bg" aria-hidden="true"><i className="orb o1" /><i className="orb o2" /></div>
      <Nav />
      <main className="wrap">
        <Hero />
        <Decorations />
        <Studio />
        <Features />
        <Themes />
        <Download />
        <Changelog />
      </main>
      <Footer />
    </>
  );
}
