// control img timing (if any) and forward/backward
import React from 'react';

export default class Slideshow extends React.Component {
  render() {
    const { images } = this.props;
    console.log(images);
    return (
      <ul>
        hi mom
        {images.map((image, idx) => (
          <img src={image} key={idx} alt="" />
        ))}
      </ul>
    );
  }
}
