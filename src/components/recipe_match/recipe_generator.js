import React, { useState, useEffect } from 'react';
import Recipe from "./Recipe";
import { Input, Button } from 'semantic-ui-react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Time from "./Time";

const About = () => {
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("dish");
  
    useEffect(() => {
      async function getRecipes () {
        
        // const response = await fetch(`https://recipe-test11.herokuapp.com/recipes/${query}`);
        // const response = await fetch(`/search/${query}`);
        const response = await fetch(`/search/${query}`);
        
        const data = await response.json();
        console.log(data.FilteredData)
        setRecipes(data.FilteredData);
        
      }
  
      getRecipes();
    }, [query]);
  


    return(
        <div className="page">
          <Time/>
        <Input className="Search-bar" icon='search' placeholder='Type ingredients...' onChange={(e) => setSearch(e.target.value)} />
        <NavLink to="/Next1" activeClassName="next">
        <Switch>
          <Route path="/Next" component={search} />
        </Switch>
        </NavLink>
        
        <Button className="Search-button" content="Search" onClick={() => setQuery(search) } />
        

        <div className = 'recipe_generator-recipes' >


        {recipes.map(FilteredData => (
            <Recipe
            source={FilteredData.source}
            commentID={FilteredData.commentID}
            comment={FilteredData.comment}
            recommend	={FilteredData.recommend}
            commentLink	={FilteredData.commentLink}
          
            />
            
        ))}
        
        </div>
        </div>          
);
};
export default About;