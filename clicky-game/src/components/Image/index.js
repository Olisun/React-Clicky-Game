import React from "react";
import "./style.css";

const Images = props => (
 <div className="image" onClick={() =>props.clickedImage(props.id)}>
  <div className="image-container">
    <img alt={props.character} src={props.image} />
    <div className="overlay">
      <div className="text">
        {props.character}
      </div>
    </div>
  </div>
 </div>
);

export default Images;