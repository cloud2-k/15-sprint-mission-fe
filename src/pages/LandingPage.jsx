import FeatureSection from "../components/landing/FeatureSection";
import HeroBanner from "../components/landing/HeroBanner";

function LandingPage() {
  return (
    <>
      <HeroBanner position="top" />
      <FeatureSection />
      <HeroBanner position="bottom" />
    </>
  );
}
export default LandingPage;
