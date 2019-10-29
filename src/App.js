import React, { Component } from "react";
import images from "./images.json";
import ScoreCount from "./components/ScoreCount";
import Image from "./components/Image";

// Function for shuffling the array of images defined in images.json (applied from shuffling a deck of cards from class). 
 const shuffle = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randIndex]] = [array[randIndex], array[i]]
  }
  return array;
}

// Bringing in the components. 
class App extends Component {
  // Setting initial state (basically defining the variables). 
  state = {
    images,
    score: 0,
    highScore: 0,
    showAlert: 0,
    showWins: 0,
    clickedImages: []
  };

  // This links the event-handler function in the Image component to the variables declared above.
  clickedImage = id => {
    // clickedImages is an empty array for images the user clicks once. 
    let clickedImages = this.state.clickedImages;
    let score = this.state.score;
    let highScore = this.state.highScore;
    this.setState({
      showAlert: 0
    });
    // if the clicked image is clicked and it's not found in the array (what the "===-1" states), then push the image id into the clickedImages array. increment the score and run the shuffle function. 
    if (clickedImages.indexOf(id) === -1) {
      clickedImages.push(id);
      console.log(clickedImages);
      this.handleIncrement();
      this.shuffleImages();
    } else if (this.state.score === 10) {
      this.setState({
        showWins: 1,
        score: 0,
        clickedImages : []
      });
    // if the user clicks the same image again, since it's already in the array (from the previous click), the score is reset to 0.
    } else {
      this.setState({
        score: 0,
        clickedImages: []
      });
      // this shows the "Oops" message defined below
      this.setState({
        showAlert: 1
      });
    };
    // if the current score is greater than the high score, then that score becomes the high score. 
    if (score > highScore) {
      this.setState({
        highScore: score
      });
    };
  }
  // Incrementing the score count
  handleIncrement = () => {
    this.setState({
      score: this.state.score + 1
    });
  };
  // Calling the shuffle function defined above. 
  shuffleImages = () => {
    this.setState({
      images: shuffle(images)
    });
  };

  // Rendering everything to the DOM. 
  render() {
    return (
      <div className="container">
        <div className="alert alert-danger" style={{ opacity: this.state.showAlert }} >
          Oops! You've already clicked this! Please try again.
        </div>
        <div className="alert alert-success" style={{ opacity: this.state.showWins }} >
          Great memory! You haven't clicked any duplicates!
        </div>
        {/* Bringing in the ScoreCount function from the ScoreCount component with the dynamic score count defined above */}
        <ScoreCount
          title="Memory Game with the Avengers"
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <div className="row">
          {/* Using the map method to map in the key-value-pairs from images.json */}
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