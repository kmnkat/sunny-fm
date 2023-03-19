import HeroSection from "../../components/components/specific/HeroSection";
import Features from "../../components/containers/Features";
import Testimonials from "../../components/containers/Testimonials";
import MiniGallery from "../../components/containers/MiniGallery";

const Main = (props) => {
  return (
    <div>
      <HeroSection title="We are creatives" imgUrl="image-header.jpg" />
      <Features />
      <Testimonials />
      <MiniGallery />
    </div>
  );
};

export default Main;
