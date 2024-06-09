import React from "react";
import TextBlock from "./TextBlock";
import TextImageBlock from "./TextImageBlock";
import DemoBlock from "./DemoBlock";

const Home = () => {
  return (
    <div>
      <TextBlock title="About Us" text="I am working to update the way small business art sellers operate. There are so many different websites and features to operate in." />
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
      <TextBlock title="Join the Newsletter" text="Click below to join the newsletter to learn more." />
    </div>
  );
};

export default Home;
