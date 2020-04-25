import React, { useState, useEffect } from "react";

const Title_text = () => {
  const [Title_text, setTitles] = useState({});

  async function fetchData() {
    const res = await fetch("/titles");
    const data = await res.json()
    console.log('???')
    setTitles(data.Titles);
  }

  useEffect(() => {
    fetchData();
  });

  return (
     JSON.stringify(Title_text)

  );
};
export default Title_text;