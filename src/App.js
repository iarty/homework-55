import React, { Component, Fragment } from 'react';
import Burger from './components/burger/burger';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Burger />
      </Fragment>
    )
  }
}
