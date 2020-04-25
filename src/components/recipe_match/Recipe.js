import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import {
  Route,
  NavLink,
  Switch, Link
} from "react-router-dom";

const Recipe = ({Titles, Cuisine, Ingredients,Matching_ingred,Ingredients_to_buy, Image_link, Links}) => {

    return(
        <Card className = 'Card'>
      <Image className = 'recipe-image' src = {Image_link} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{Titles}</Card.Header>
        <Card.Meta>{Cuisine}</Card.Meta>
        <Card.Description>
        {Ingredients.length <20 ? `${Ingredients}`: `${Ingredients.substring(0,200)}.....`} 
    
        
        <Link to={Links}>
      <button className = 'recipe__button'>
      
        View Recipe
        
        </button>
        </Link>

      </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>

          <Icon name='user' />
        Matching Ingredients {Matching_ingred}
      </a>
      <div>
      <a>
          <Icon name='user' />
        Ingredients to purchase: {Ingredients_to_buy}
      </a></div>
      <div>
        
      </div>
      </Card.Content>
    </Card>

    );
}

export default Recipe;