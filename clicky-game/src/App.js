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
    showSuccess: 0,
    clickedImages: []
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
      this.handleIncrement();
      this.shuffleImages();
    } else if (this.state.score === 10) {
      this.setState({
        showSuccuss: 1,
        score: 0,
        clickedImages : []
      });
    } else {
      this.setState({
        score: 0,
        clickedImages: []
      });
      console.log("Clicked twice!");
      this.setState({
        showAlert: 1
      });
    };

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    };
  }

  handleIncrement = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  shuffleImages = () => {
    this.setState({
      images: shuffle(images)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="alert alert-danger" style={{ opacity: this.state.showAlert }} >
          Oops! You've already clicked this! Please try again.
        </div>
        <div className="alert alert-success" style={{ opacity: this.state.showSuccess }} >
          Great memory! You haven't clicked any duplicates!
        </div>
        <ScoreCount
          title="Memory Game with the Avengers"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="row">
          {this.state.images.map(image => (
            <Image
              key={image.id}
              id={image.id}
              character={image.character}
              title={image.character}
              image={image.image}
              clickedImage={this.clickedImage}
            />  
          ))}
        </div>
      </div>
    );
  };
}

export default App;