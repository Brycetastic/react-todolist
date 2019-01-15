import React, { Component } from 'react';
import Main from './containers/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faMinus} from '@fortawesome/free-solid-svg-icons';

library.add( faCheck, faMinus );

class App extends Component {
  render() {
    return (<Main />);
  }
};

export default App;
