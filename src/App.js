import React, { Component } from 'react';
import './App.css';
import Search from './searchYoutube'
import MainVideo from './mainVideo'
import Sidebar from './sidebar'

class App extends Component {

  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
        <Search/>
        <MainVideo/>
        <Sidebar/>
      </div>
    );
  }
}

export default App
