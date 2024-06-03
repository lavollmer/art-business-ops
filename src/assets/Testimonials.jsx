import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <h2>{testimonial.title}</h2>
          <p>{testimonial.text}</p>
          <p>- {testimonial.author}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;