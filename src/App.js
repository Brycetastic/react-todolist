import React, { Component } from 'react';
import Main from './containers/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faIgloo, faCheckSquare, faSquare, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add( fas, faIgloo, faCheckSquare, faSquare, faCheck );

class App extends Component {
  render() {
    return (<Main />);
  }
};

export default App;
