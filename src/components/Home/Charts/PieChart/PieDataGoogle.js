import React, { useState, useEffect } from 'react';


const PieDataGoogle = () => {
    // const [Deliveroo, setDeliveroo] = useState({});
    const [Google, setGoogle] = useState({});

  
    async function fetchData() {
      const url = "/PieData";
      const response = await fetch(url);
      const data = await response.json();
      

      // setDeliveroo(data.PieData.Deliveroo);
      setGoogle(data.PieData.Google);
      
    }
  
    useEffect(() => {
      fetchData();
    });
  
    return (
      JSON.stringify(Google)

    );
  };
  export default PieDataGoogle;
  
