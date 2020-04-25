import React, { useState, useEffect } from 'react';
import logo from './FOODAI.PNG'
import './App.css';
import Recipe from "./components/recipe_match/Recipe";
import { Input, Button } from 'semantic-ui-react';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('onions, chicken, pasta');


  useEffect(() => {
    async function getRecipes () {
      console.log('???')
      //const response = await fetch(`https://recipe-test11.herokuapp.com/recipes/${query}`);
      const response = await fetch(`/recipes/${query}`);
      const data = await response.json();
      setRecipes(data.Recipes);
    }

    getRecipes();
  }, [query]);




  return (

    <div className="App">
    <img src={logo} className ="App-logo" alt="logo"/>
    <Input icon='search' placeholder='Type ingredients...' onChange={(e) => setSearch(e.target.value)} />
    <Button content="Search" onClick={() => setQuery(search)} />

    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: 20 }}>
      {recipes.map(Recipes => (
          <Recipe
            Titles={Recipes.Title}
            Cuisine={Recipes.cuisine}
            Ingredients={Recipes.Ingredients}
            Matching_ingred	={Recipes.Matching_ingred}
            Ingredients_to_buy	={Recipes.Ingredients_to_buy}
            Image_link = {Recipes.Image_link}
          />
      ))} 
    </div>

    </div>
  );
};

export default App;
