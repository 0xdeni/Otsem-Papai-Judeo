import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import StatsGrid from "@/components/sections/stats-grid";
import ComparisonSection from "@/components/sections/comparison";
import HowItWorks from "@/components/sections/how-it-works";
import FeaturesGrid from "@/components/sections/features-grid";
import Pricing from "@/components/sections/pricing";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TrustedBy />
        <StatsGrid />
        <ComparisonSection />
        <HowItWorks />
        <FeaturesGrid />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
