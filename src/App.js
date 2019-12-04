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

  handleChanges = e => {
    this.setState ({ username: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.get(`${API_BASE_URL}/users/${this.state.username}`)
    .then(res => {
      this.setState({ userinfo: res.data })
    })
    .catch(err => console.error("cDU error:", err));
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </header>
        <h1>{`GitHub presents ${this.state.userinfo.name}`}</h1>
        <img src={`http://ghchart.rshah.org/${this.state.username}`}
          alt="Github calendar graph"></img>
        <h2>Followers</h2>
        <UserFriends friendsUrl={this.state.userinfo.followers_url} />
      </div>
    );
  }
}

export default App;
