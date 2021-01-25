import React, { useState, useEffect } from 'react';


const GetData = () => {
    const [Title_text, setTitles] = useState({});
  
    async function fetchData() {
      const url = "/dataa";
      const response = await fetch(url);
      const data = await response.json();
  
      setTitles(data.rating.rating.Ingredients_to_buy);
    }
  
    useEffect(() => {
      fetchData();
    });
  
    return (
       JSON.stringify(Title_text)
  
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