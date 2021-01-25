import React, { useState, useEffect } from 'react';


const PieDataDeliveroo = () => {
    const [Deliveroo, setDeliveroo] = useState({});
  
    async function fetchData() {
      const url = "/PieData";
      const response = await fetch(url);
      const data = await response.json();
      

      setDeliveroo(data.PieData.Deliveroo);
      
    }
  
    useEffect(() => {
      fetchData();
    });
  
    return (
      1700

    );
  };
  export default PieDataDeliveroo;
  
