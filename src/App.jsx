import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import HeroSection from "./components/HeroSection";
import HorizontalScroll from "./components/HorizontalScroll";
import MarketingAgency from "./components/MarketingAgency";
import NavBar from "./components/NavBar";
import WorkedSection from "./components/WorkedSection";
import Services from "./components/Services";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";
import PricingTable from "./components/PricingTable";
import Blog from "./components/Blog";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // Smooth scrolling duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing curve
      smooth: true,
      direction: "vertical", // Enable vertical scrolling
      gestureDirection: "vertical", // Allow gestures in the vertical direction
    });

    // Handle request animation frame
    const handleRaf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleRaf);
    };

    requestAnimationFrame(handleRaf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
     <AnimatedCursor
        innerSize={40} // Inner circle size
        outerSize={8} // Outer circle size
        color="0, 0, 255" // RGB values for purple
        outerAlpha={0.5} // Semi-transparent outer circle
        innerScale={0.7} // Slight scaling effect for the inner circle
        outerScale={0} // Enlarged scaling effect for the outer circle
        hasBlendMode={true} // Allows customization for border-only
        innerStyle={{
          border: "2px solid rgb(128, 0, 128)", // Purple border
          backgroundColor: "transparent", // No background fill
        }}
        outerStyle={{
          border: "2px solid rgb(0, 0, 255)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

<div ref={appRef} className="scroll-container">
      <NavBar />
      <HeroSection />
      <WorkedSection />
      <MarketingAgency />
      <Services />
      <FeaturedWork />
      <HorizontalScroll />
      <PricingTable />
      <Blog />
      <Footer />
    </div>
    
    </>
  
  );
}

export default App;
