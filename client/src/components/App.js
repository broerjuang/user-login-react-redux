import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Auth from '../token.js';


class App extends Component {
  render() {
    if(true){
      return (
        <div className='container'>
          <NavigationBar />
          {this.props.children}
        </div>
      )
    } else {
      return (
        <h1> Nothing </h1>
      )
    }
  }
}

export default App;
