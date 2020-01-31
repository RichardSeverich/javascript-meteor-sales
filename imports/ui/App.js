import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

//Components
import Content from './components/content/Content';

class App extends Component {
   static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;    
    return (
      <div className="App">
          <Content body={children}></Content>
      </div>
    );
  }
}

export default App;
