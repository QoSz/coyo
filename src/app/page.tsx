import { About } from "@/components/home/About";
import { CTA } from "@/components/home/CTA";
import { Hero } from "@/components/home/Hero";
import { Methodology } from "@/components/home/Methodology";
import { SuccessStories } from "@/components/home/SuccessStories";
import { Timeline } from "@/components/home/Timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <Methodology />
      <SuccessStories />
      <About />
      <Timeline />
      <CTA />
    </main>
  );
}
