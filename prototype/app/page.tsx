import { Hero } from "@/components/hero/Hero";
import { AboutPitch } from "@/components/about/AboutPitch";
import { ParadoxTimelines } from "@/components/paradox/ParadoxTimelines";
import { MayaJourney } from "@/components/journey/MayaJourney";
import { ReleaseSection } from "@/components/release/ReleaseChart";
import { Guardrails } from "@/components/guardrails/Guardrails";
import { WouldNotBuild } from "@/components/judgment/WouldNotBuild";
import { SegmentRibbon } from "@/components/segments/SegmentRibbon";
import { WhyCandidate } from "@/components/candidate/WhyCandidate";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <AboutPitch />
      <ParadoxTimelines />
      <MayaJourney />
      <ReleaseSection />
      <Guardrails />
      <WouldNotBuild />
      <SegmentRibbon />
      <WhyCandidate />
    </main>
  );
}
