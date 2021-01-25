
import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

// images
import rating from "./images/rating.jpg";
import folowers from "./images/followers.jpg";
import sent from "./images/sent.png";
import reviews from "./images/review2.jpg";
import RatingData from './Data/Rating'

const RatingCard = () => (
<div class="ui three column grid">
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img style={{width: "250px", justifyContent: "center"}} src={rating}/>
      </div>
      <div class="content">
        <a class="header">Rating:<RatingData/></a>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img style={{width: "250px", justifyContent: "center"}} src={reviews } />
      </div>
      <div class="content">
        <a class="header">Total Reviews: 190</a>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img style={{width: "250px", justifyContent: "center"}} src={folowers} />
      </div>
      <div class="content">
        <a class="header">Instagram Followers: 30</a>
      </div>
    </div>
  </div>
</div>
)
export default RatingCard