import { BrandBanner } from "@/components/home/BrandBanner";
import { CTASection } from "@/components/home/CTASection";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <BrandBanner />
      <ValueProps />
      <CTASection />
    </>
  );
}
