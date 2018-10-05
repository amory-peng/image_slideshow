import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('hi mom');
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          click me
        </button>
      </div>
    );
  }
}
