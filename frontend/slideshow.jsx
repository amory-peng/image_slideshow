// control img timing (if any) and forward/backward
import React from 'react';

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idx: 0 };
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  noMoreImages() {
    return this.state.idx + 1 >= this.props.images.length;
  }

  handleLeft() {
    const { idx } = this.state;
    if (idx === 0) return;
    this.setState({ idx: idx - 1 });
  }

  handleRight() {
    if (this.noMoreImages()) return;
    this.setState(prevState => ({ idx: prevState.idx + 1 }));
  }

  render() {
    return (
      <div id="slideshow">
        <button type="button" onClick={this.handleLeft}>
          Prev
        </button>
        {this.props.images.length > 0
          ? `${this.state.idx + 1} of ${this.props.images.length}`
          : 'fetch some images'}
        <button type="button" disabled={this.noMoreImages()} onClick={this.handleRight}>
          Next
        </button>
        <img src={this.props.images[this.state.idx]} alt="" />
      </div>
    );
  }
}
