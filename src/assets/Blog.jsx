import React from 'react'

const Blog = () => {
  return (
    <div>
    <TextImageBlock
      title="Latest Posts"
      text="This is some paragraph text."
      imageUrl="/path/to/image.jpg"
    />
    <TextImageBlock
      title="Categories"
      text="This is some paragraph text."
      imageUrl="/path/to/image.jpg"
    />
    <DemoBlock
      title="Subscribe to the Blog"
      text="This is some paragraph text."
      imageUrl="/path/to/image.jpg"
      buttonText="Start Demo"
    />
    <TextBlock title="Join the Newsletter" text="Click below to join the newsletter to learn more." />
  </div>
  )
}

export default Blog