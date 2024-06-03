import React from 'react'
import TextBlock from './TextBlock'
import TextImageBlock from './TextImageBlock';


const Home = () => {
  return (
    <div>
      <TextBlock title="My Title" text="This is some paragraph text." />
      <TextImageBlock title="My Title" text="This is some paragraph text." imageUrl="/path/to/image.jpg" />
      <div>
        <h1>Manage Your Art Business</h1>
        <p>Please help me manage it.</p>
      </div>
      <div>
        <h1>Connect with your audience</h1>
        <p>Please help me manage it.</p>
      </div>
      <div>
        <h1>Get started</h1>
        <p>Please help me manage it.</p>
      </div>
      <div>
        <h1>Learn more</h1>
        <p>Please help me manage it.</p>
      </div>
    </div>
  )
}

export default Home