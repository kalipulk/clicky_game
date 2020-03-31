import React from 'react';
import "./style.css";

function Jumbotron() {
  
  return (
    <div className="container">
      <div className="title">Boop the Snoot</div> 
        <div className="directions">
          Click on a doggo to earn a point, but don't click the same one more than once, or it's game over!
        </div> 
    </div>
  );
}

export default Jumbotron;