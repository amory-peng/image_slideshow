// component that talks with google api
// search bar
// submit
// back and forth
// NOTE: MAKE SURE U KEEP THE PREVIOUS RESULTS IN MEMORY. EXTRA QUERIES
// WILL RATE LIMIT YOU FAST

import React from 'react';

export default class SearchControls extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const response = await fetch('/search', { method: 'POST' });
    const images = await response.json();
    this.props.addImages(images.imgs);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        click me!
      </button>
    );
  }
}
