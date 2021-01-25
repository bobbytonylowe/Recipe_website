import React from 'react';

import logo from './FOODAI.PNG';

const About_page = () => {
  return(
    <div className="page">
        <section>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to Recipe Generator!</h1>
            <p>The ‘What’s In My Cupboard’ recipe generator is a resourceful tool that will generate recipes based on what you already have in your cupboards.</p>
        </section>
     
    </div>  
)
}

export default About_page;