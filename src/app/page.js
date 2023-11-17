import Hero from "@/components/Hero";
import Creativ from "@/components/Creativ";
import SocialMedia from "@/components/SocialMedia";
import Retouch from "@/components/Retouch";
import Illustrations from "@/components/Illustrations";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-[1440px]">
        <Hero />
        <Creativ />
        <SocialMedia />
        <Retouch />
        <Illustrations />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
