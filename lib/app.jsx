import React from 'react';
import fetchImages from './helpers';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetchImages('ballerina', 0).then(res => console.log(res));
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
