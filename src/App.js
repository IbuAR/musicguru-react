import React, { Component } from 'react'
import Navigation from './common/Nav';
import Home from './components/Home';
import Search from './components/Search';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    )
  }
}


export default App;