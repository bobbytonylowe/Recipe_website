import React, {useEffect, useState}from 'react'; 
import Recipe from "./Recipe";
import "./App.css";

const App = () => {

  const APP_ID = "becaa723";
  const APP_KEY = "00e9cc31a9413c858349f7d3a9aa0994";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

useEffect( ()=>{ 
  getRecipes();
},[query]);

const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);

  }

  return (
    <div className = "App">
      <form onSubmit = {getSearch} className = "search-form">
        <input 
        className = "search-bar" 
        type ="text" 
        value = {search} 
        onChange ={updateSearch}
        />

        <button className = "search-button"  type = "submit" data-hover="test">
          Search
        </button>
      </form>

      <div className= "recipes" data-hover="test"> {recipes.map(recipe=>(
        <Recipe 
          key = {recipe.recipe.label}
          title={recipe.recipe.label} 
          calories ={recipe.recipe.calories} 
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          />
          
      ))}
        

      </div>


    </div>




  );
}

export default App;
