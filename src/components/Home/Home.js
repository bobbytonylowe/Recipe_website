// import './App.css'
// import ReactDOM from 'react-dom'
import React from 'react'
// import 'semantic-ui-css/semantic.min.css';
// import styled, {css} from 'styled-components';
// import AppLayout from './AppLayout';
// import AppBar from './AppBar';
// import Time from './Time';
// import APITable from './ApiTable';
// import {AppProvider} from './AppProvider';
// import Settings from './Settings'
import PieRechartComponent from './Charts/PieChart/PieRechartComponent'
import TableExampleCollapsing from './Charts/TableExampleCollapsing'
import RatingCard from './Charts/RatingCard'
import LineRechartComponent from './Charts/line'
import PieDataDeliveroo from './Charts/PieChart/PieDataDeliveroo'
import DD from './Charts/PieChart/DA_PieData'
// import AreaRechartComponent from './Charts/AreaRechartComponent'
// import renderLineChart from './Charts/test'
// import Title_text from './Charts/Cards/Rating'

import GetData from './Charts/Data/GetData'
// import Title_text from './recipes/recipe_all'
// import Rating from './Charts/Rating'
// import Example from './recipes/example'


function Home() {
  return (
    
    // <AppLayout>
    //   <AppProvider>
    //     {/* <Rating/> */}
    //   <AppBar/>
    <div>
      {/* <Time/> */}
      {/* <Example/> */}
      {/* <Title_text/> */}
      {/* <GetData/> */}

      {/* <GetDataa/> */}


      {/* <PieData/> */}
      <DD/>
      {/* <PieDataDeliveroo/> */}
      <div

      
  style={{
    display: "flex",
    justifyContent: "center"}}>  
    <RatingCard />
    </div>

      
      <div
  style={{
    display: "flex",
    justifyContent: "center"}}>  
    <PieRechartComponent />
    </div>

    <div
  style={{
    display: "flex",
    justifyContent: "center"}}>  
    <LineRechartComponent/>
    </div>
   
    <div
  style={{
    display: "flex",
    justifyContent: "center"}}>
      {/* <APITable/>   */}
    
    </div>
    <div
  style={{
    display: "flex",
    justifyContent: "center"}}> 
    <TableExampleCollapsing/>
    </div>



    {/* <div
  style={{
    display: "flex",
    justifyContent: "center"}}>  
    <AreaRechartComponent/>
    </div> */}
<renderLineChart/>

    {/* </AppProvider> 
    </AppLayout> */}
</div>
 

  );


}


export default Home;