import React from 'react';
import { Image, Header, Table } from 'semantic-ui-react';
import fb from './fb.png'
import star from "./star.png";



// source	commentID	commentLink	postedDate	comment	recommend	dateTimeGathered
// {Titles, Cuisine,Ingredients,Ingredients_to_buy, Image_link}
const Recipe = ({source, commentID,comment,recommend, commentLink}) => {

    return(
      <Table basic='very' celled collapsing>
      <Table.Body>

      <Table.Row>
  <Table.Cell>
    <Header as='h4' image>
    <a href={commentLink}>
      <Image src={fb} rounded size='mini' />
      </a>
      <Header.Content>
      {commentID}
        <Header.Subheader>{source}</Header.Subheader>
      </Header.Content>
    </Header>
  </Table.Cell>
  <Table.Cell>{comment}</Table.Cell>
  <Table.Cell>
  {recommend}<Image src={star} style={{width: "15px"}}/>
  </Table.Cell>
  </Table.Row>
  
      </Table.Body>
    </Table>


    );
}

export default Recipe;