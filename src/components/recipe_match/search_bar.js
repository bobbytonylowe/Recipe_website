import React, { useState, useEffect } from 'react';
import Recipe from "./Recipe";
import { Input, Button } from 'semantic-ui-react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Title_text from './fetch_titles';


export default class Similarity extends React.Component {
    constructor (props) {
        super(props);
        this.items = 
        //Title_text - here I want to import Title_text which should post a list of titles like below
        [
            "Steaks with goulash sauce & sweet potato fries",
            "Lentil soup",
            "Spaghetti with prawns, chilli & rocket",
            "Cheat's scampi with chunky chips",
            "Easy Thai prawn curry",
            "Superhealthy Singapore noodles",
            "Spicy vegetable pilau with cucumber raita",
            "Prawn sweet chilli noodle salad",
            "Quick sticky toffee puddings",
            "Juicy Lucy pudding",
            "Summer pistou",
            "Veggie meatballs with tomato courgetti",
            "Mexican spiced tomato rice",
            "Paella in the oven",
            "Beef goulash"]
        
        ;
        this.state = {
            suggestions: [],

        };

    }
    


onTextChanged = (e) => {
    const value =e.target.value;
    let suggestions = [];
    if (value.length > 0) {
        const regex = new RegExp(`^${value}`, 'i');
        suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({suggestions, text: value}));

    }


    
    suggestionSelected (value) {
        this.setState(() => ({
            text:value,
            suggestions: [],
        }))

    }
    
    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length ===0 ) {
        return null;

        }

        return( 
            <ul> 
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}

            </ul>

        );
}

render () {
    const {text} = this.state;
    return(
        <div>
            <input value ={text} onChange = {this.onTextChanged} type = 'text'/>
            {this.renderSuggestions()}
            <Button className="Search-button" content="Search"  />
        </div>
        



         )
    }
}
            
            
            

