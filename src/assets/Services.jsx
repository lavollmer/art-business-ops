import React from "react";

const Services = () => {
  return (
    <div>
      <TextBlock title="Schedule Creation" text="This is some paragraph text." />
      <TextImageBlock
        title="Art Website Management"
        text="This is some paragraph text."
        imageUrl="/path/to/image.jpg"
      />
      <TextBlock title="Social Media Services" text="This is some paragraph text." />
      <TextBlock title="More services" text="This is some paragraph text." />
    </div>
  );
};

export default Services;
