import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import About from './components/recipe_match/recipe_generator';
import About_page from './components/recipe_match/About';


// class component
class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/recipe_generator" activeClassName="active">All Comments</NavLink>
          <NavLink to="/About" activeClassName="active">About</NavLink>
    
          
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipe_generator" component={About} />
          <Route path="/About" component={About_page} />
  
          
        </Switch>
      </div>
    );
  }
}

export default App;