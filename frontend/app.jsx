import React from 'react';
import Slideshow from './slideshow';
import SearchControls from './search_controls';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { images: [], nextIdx: null };
    this.addImages = this.addImages.bind(this);
  }

  addImages(imgs) {
    console.log(imgs);
    this.setState(prevState => ({
      images: prevState.images.concat(imgs),
    }));
  }

  render() {
    const { nextIdx, images } = this.state;
    return (
      <div>
        <SearchControls nextIdx={nextIdx} addImages={this.addImages} />
        <Slideshow images={images} />
      </div>
    );
  }
}
