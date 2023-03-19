import HeroSection from "../../components/components/HeroSection";
import Features from "../../components/containers/Features";
import Testimonials from "../../components/containers/Testimonials";
import MiniGallery from "../../components/containers/MiniGallery";

const Main = () => {
  return (
    <div>
      <HeroSection title="We are creatives" imgUrl="header.jpg" />
      <Features />
      <Testimonials />
      <MiniGallery />
    </div>
  );
};

export default Main;
