import React from "react";

const SocialMedia = () => {
  return (
    <div>
      <TextBlock title="Content Planning" text="This is some paragraph text." />
      <TextImageBlock
        title="Visual Strategies"
        text="This is some paragraph text."
        imageUrl="/path/to/image.jpg"
      />
      <TextBlock title="Engagement Tactics" text="This is some paragraph text." />
    </div>
  );
};

export default SocialMedia;
