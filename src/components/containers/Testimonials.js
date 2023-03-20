import Testimonial from "../components/specific/Testimonial";
import testimonials from "../../pseudodatabase/testimonials.json";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h4 className="heading-secondary">Client testimonials</h4>
      {testimonials.map((testimonial) => (
        <Testimonial
          testimonial={testimonial}
          key={`testimonial-${testimonial.author}`}
        />
      ))}
    </div>
  );
};

export default Testimonials;
