import React from "react";
import TextBlock from "./TextBlock";
import TextImageBlock from "./TextImageBlock";
import DemoBlock from "./DemoBlock";

const Home = () => {
  return (
    <div>
      <TextBlock title="My Title" text="This is some paragraph text." />
      <TextImageBlock
        title="My Title"
        text="This is some paragraph text."
        imageUrl="/path/to/image.jpg"
      />
      <DemoBlock
        title="Try Our Demo"
        text="This is some paragraph text."
        imageUrl="/path/to/image.jpg"
        buttonText="Start Demo"
      />
      <TextBlock title="Learn More" text="This is some paragraph text." />
    </div>
  );
};

export default Home;
