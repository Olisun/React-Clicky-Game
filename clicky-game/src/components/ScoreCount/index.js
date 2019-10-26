import React from "react";
import "./style.css";

function ScoreCount(props) {
  return (
    <header className="scoreCount">
      <div className="row">
        <div className="col-md-6 col-left">
          <h5>{props.character}</h5>
        </div>
        <div className="col-md-3 col-right">
          <h5>High Score: {props.score}</h5>
        </div>
        <div className="col-md-3 col-right">
          <h5>Current Score: {props.topScore}</h5>
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