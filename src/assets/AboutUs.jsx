import React from "react";

const AboutUs = () => {
  return (
    <div>
      <TextBlock title="Our history" text="This is some paragraph text." />
      <TextImageBlock
        title="Our team"
        text="This is some paragraph text."
        imageUrl="/path/to/image.jpg"
      />
      <TextBlock title="Our Values" text="This is some paragraph text." />
      <TextBlock title="Our history" text="This is some paragraph text." />
    </div>
  );
};

export default AboutUs;
