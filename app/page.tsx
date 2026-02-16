import HeroSection from "@/components/sections/HeroSection";
import DiscoverSection from "@/components/home/DiscoverSection";
import RealEstateSection from "@/components/sections/RealEstateSection";
import OpportunitiesSection from "@/components/sections/OpportunitiesSection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DiscoverSection />
      <RealEstateSection />
      <OpportunitiesSection />
      <ExperiencesSection />
      <CTASection />
    </>
  );
}
