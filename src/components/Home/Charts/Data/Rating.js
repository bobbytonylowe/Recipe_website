import React, { useState, useEffect } from 'react';


const RatingData = () => {
    const [Title_text, setTitles] = useState({});
  
    async function fetchData() {
      const url = "/rating";
      const response = await fetch(url);
      const data = await response.json();
  
      setTitles(data.rating.rating);
    }
  
    useEffect(() => {
      fetchData();
    });
  
    return (
       JSON.stringify(Title_text)
  
    );
  };
  export default RatingData;
  
