import React, { useState, useEffect } from 'react';
import { Header, Image, Table } from 'semantic-ui-react'
import fb from './fb.png'
import star from "./star.png";


const GetData = () => {
    const [Title_text, setTitles] = useState({});
  
    async function fetchData() {
      const url = "/dataa";
      const response = await fetch(url);
      const data = await response.json();
  
      setTitles([data]);
    }
  
    useEffect(() => {
      fetchData();
    });
  
    return (
             JSON.stringify(Title_text)
      //       <Table basic='very' celled collapsing>
      //     {/* <Table.Header>
      //       <Table.Row>
      //         <Table.HeaderCell>Source</Table.HeaderCell>
      //         <Table.HeaderCell>Comment</Table.HeaderCell>
      //         <Table.HeaderCell>Rating</Table.HeaderCell>
      //       </Table.Row>
      //     </Table.Header> */}

      //     <Table.Body>

      //     <Table.Row>
      // <Table.Cell>
      //   <Header as='h4' image>
      //   <a href="https://goo.gl/maps/RfdZnGs43qxpQk3c6">
      //     <Image src={fb} rounded size='mini' />
      //     </a>
      //     <Header.Content>
      //     JSON.stringify(Title_text)
      //       <Header.Subheader>{'ticker'}</Header.Subheader>
      //     </Header.Content>
      //   </Header>
      // </Table.Cell>
      // <Table.Cell>{'stockPrice'}</Table.Cell>
      // <Table.Cell>
      // {'timeElapsed'}<Image src={star} style={{width: "15px"}}/>
      // </Table.Cell>
      // </Table.Row>

      //     </Table.Body>
      //   </Table>
  
    );
  };
  export default GetData;
  

// function Rating_card() {
//   const [currentTime, setCurrentTime] = useState();

//   useEffect(() => {
//     fetch('/rating').then(res => res.json()).then(data => {
//       setCurrentTime(data.rating);
//     });
//   }, []);

//   return (
//     <div className="Rating_card">
//       <header className="Rating_card-header">

        

//         <p>Total Rating {currentTime}</p>
//       </header>
//     </div>
//   );
// }

// export default Rating_card;