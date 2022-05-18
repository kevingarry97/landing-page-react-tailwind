import ActionSection from "./components/action";
import FeatureSection from "./components/features";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import TestimonialSection from "./components/testimonials";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <ActionSection />
      <Footer />
    </>
  );
}

export default App;
