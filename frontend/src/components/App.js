import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ars" component={HomePage} />
      </div>
    );
  }
}

export default App;
