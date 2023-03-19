import Testimonial from "../components/Testimonial";
import testimonials from "../../pseudodatabase/testimonials.json";

const Testimonials = () => {
  return (
    <div>
      {testimonials.map((testimonial) => (
        <Testimonial testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
