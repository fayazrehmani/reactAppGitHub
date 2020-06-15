import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './pages/homepage/home.component';
import './App.css';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "New react app"
    }
  }

  render() {
    return(
      <div>
        <Home title={this.state.title} />
      </div>
    )
  }
}



export default App;
