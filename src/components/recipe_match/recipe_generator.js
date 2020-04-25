import React, { useState, useEffect } from 'react';
import Recipe from "./Recipe";
import { Input, Button } from 'semantic-ui-react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

const About = () => {
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("paneer, onion");
  
    useEffect(() => {
      async function getRecipes () {
        console.log('???')
        //onst response = await fetch(`https://recipe-test11.herokuapp.com/recipes/${query}`);
        const response = await fetch(`/recipes/${query}`);
        const data = await response.json();
        setRecipes(data.Recipes);
      }
  
      getRecipes();
    }, [query]);
  


    return(
        <div className="page">
        <Input className="Search-bar" icon='search' placeholder='Type ingredients...' onChange={(e) => setSearch(e.target.value)} />
        <NavLink to="/Next1" activeClassName="next">
        <Switch>
          <Route path="/Next" component={search} />
        </Switch>
        </NavLink>
        
        <Button className="Search-button" content="Search" onClick={() => setQuery(search) } />
        

        <div className = 'recipe_generator-recipes' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: 30 }}>
        {recipes.map(Recipes => (
            <Recipe
            Titles={Recipes.Title}
            Cuisine={Recipes.cuisine}
            Ingredients={Recipes.Ingredients}
            Matching_ingred	={Recipes.Matching_ingred}
            Ingredients_to_buy	={Recipes.Ingredients_to_buy}
            Image_link = {Recipes.Image_link}
            Links = {Recipes.Link}
            />
            
        ))}
        
        </div>
        
        
    

        </div>   

        
        
        
        
);
};
export default About;