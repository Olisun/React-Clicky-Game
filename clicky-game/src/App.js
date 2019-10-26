import React, { Component } from "react";
import images from "./images.json";
import ScoreCount from "./components/ScoreCount";
import Image from "./components/Image";

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randIndex]] = [array[randIndex], array[i]]
  }
  return array;
}

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccuess: 0
    clickedimages: []
  };

  clickedImage = id => {
    let clickedImages = this.state.clickedImages;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    if (clickedImages.indexOf(id) === -1) {
      clickedImages.push(id);
      console.log(clickedImages);
      this.incrementScore();
      this.shuffleImages();
    }
  }

  incrementScore = () => {
    this.stateState({
      score: this.state.score + 1
    });
  };

  shuffleImages = () => {
    this.setState({
      images: shuffle(images)
    });
  };

}

export default App;