import Creativ from "@/components/Creativ";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <Hero />
      <Creativ />
    </main>
  );
}
