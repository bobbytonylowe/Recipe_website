import React, { useState, useEffect } from 'react';


const PieDataFacebook = () => {
    // const [Deliveroo, setDeliveroo] = useState({});
    // const [Google, setGoogle] = useState({});
    const [Facebook, setFacebook] = useState({});
    // const [Trip_Advisor, setTrip_Advisor] = useState({});
    // const [AllData, setData]= useState({});
  
    async function fetchData() {
      const url = "/PieData";
      const response = await fetch(url);
      const data = await response.json();
      

      // setDeliveroo(data.PieData.Deliveroo);
      // setGoogle(data.PieData.Google);
      setFacebook(data.PieData.Facebook);
      // setTrip_Advisor(data.PieData.Trip_Advisor);
      // setData(data.PieData.PieData);
      
    }
  
    useEffect(() => {
      fetchData();
    });
  
    return (
      JSON.stringify(Facebook)

    );
  };
  export default PieDataFacebook;
  
