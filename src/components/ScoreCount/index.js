import React from "react";
import "./style.css";

// Defining the ScoreCount component. 
const ScoreCount = props => {
  return (
    // Adding static content in the header section for title, high score, current score and a brief description.
    <header className="scoreCount">
      <div className="row">
        <div className="col-md-3 col-left">
          <h5>{props.title}</h5>
        </div>  
        <div className="col-md-3 col-left">
          <h5>{props.character}</h5>
        </div>
        <div className="col-md-3 col-right">
          <h5>Current Score: {props.score}</h5>
        </div>
        <div className="col-md-3 col-right">
          <h5>High Score: {props.highScore}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-right">
          <h5>Click on any Avenger to score a point but you will lose a point if you click the same Avenger twice!</h5>
        </div>
      </div>
    </header>
  );
};

export default ScoreCount;