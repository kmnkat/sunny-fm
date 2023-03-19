const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <img
        className="testimonial__image"
        src={props.testimonial.imageUrl}
        alt={props.testimonial.author}
      />
      <p>{props.testimonial.text}</p>
      <h6>{props.testimonial.author}</h6>
      <span>{props.testimonial.authorPosition}</span>
    </div>
  );
};

export default Testimonial;
