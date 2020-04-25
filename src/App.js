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
import Similarity from './components/recipe_match/search_bar';
import sim from './components/recipe_match/similarity_test';
import Title_text from './components/recipe_match/fetch_titles'

// class component
class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/recipe_generator" activeClassName="active">Recipe Generator</NavLink>
          <NavLink to="/About" activeClassName="active">About</NavLink>
          <NavLink to="/recipesuggestion" activeClassName="active">Recipe Suggestion</NavLink>
          <NavLink to="/sim" activeClassName="active">Sim Suggestion</NavLink>
          
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipe_generator" component={About} />
          <Route path="/About" component={About_page} />
          <Route path="/recipesuggestion" component={Similarity} />
          <Route path="/sim" component={sim} />
          
        </Switch>
      </div>
    );
  }
}

export default App;