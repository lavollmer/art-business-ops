import React from "react";

const Portfolio = () => {
  return (
    <div>
      <TextBlock
        title="Artwork showcase"
        text="This is some paragraph text."
      />
      <Testimonials testimonials={[
  { title: 'Testimonial 1', text: 'This is some testimonial text.', author: 'Client 1' },
  { title: 'Testimonial 2', text: 'This is some more testimonial text.', author: 'Client 2' },
  // Add more testimonials as needed
]} />
      <TextBlock
        title="Social Media Services"
        text="This is some paragraph text."
      />
      <TextBlock title="More services" text="This is some paragraph text." />
    </div>
  );
};

export default Portfolio;
