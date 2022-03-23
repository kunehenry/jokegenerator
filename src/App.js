import './App.css';
import Joke from "./Joke";
import React, {Component} from "react";
import Button from "./Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://v2.jokeapi.dev/joke/Any?type=single",
      joke: {},
      active: false,
    };
  };

  componentDidMount() {
    this.fetchJoke();
  };

  fetchJoke = () => {
    return fetch(this.state.url)
        .then(response => response.json())
        .then(material => this.setState({joke: material}));
  }

  newJoke = () => {
    this.setState({url: "https://v2.jokeapi.dev/joke/Any?type=single"})
    return this.fetchJoke();
  }

  render() {
    return (
      <div>
        <Joke jokeProps={this.state.joke}/>
        {/* <button onClick={this.newJoke}>New Joke</button> */}
        <Button click={this.newJoke}/>
      </div>
    )
  };
}

export default App;
