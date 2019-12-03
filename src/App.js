import React from 'react';
import UserFriends from './components/UserFriends';
import axios from 'axios';
import './App.css';

// Defined constants
const GITHUB_USERNAME = "danimal-johnson";
const API_BASE_URL = "https://api.github.com";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: GITHUB_USERNAME,
      userinfo: {}
    }
  }

  componentDidMount() {
    axios.get(`${API_BASE_URL}/users/${this.state.username}`)
    .then(res => {
      this.setState({ userinfo: res.data })
    })
    .catch(err => console.error("cDM error:", err));
  }

  componentDidUpdate() {
    // Will be useful when an input box is added
  }

  render () {
    return (
      <div className="App">
        <h1>{`GitHub presents ${this.state.userinfo.name}`}</h1>
        <img src={`http://ghchart.rshah.org/${GITHUB_USERNAME}`}
          alt="Github calendar graph"></img>
          <UserFriends friendsUrl={this.state.userinfo.name} />
      </div>
    );
  }
}

export default App;
