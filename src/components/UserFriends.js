import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class UserFriends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friendsUrl: ''
      // TODO: Add name, other info?
    };
  }

  componentDidMount() {
  
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ friendsUrl: this.props.friendsUrl })
    }

    if (this.state !== prevState) {
      console.log("friendsUrl:", this.state.friendsUrl)
      if (this.state.friendsUrl !== '' &&
        this.state.friendsUrl !== prevState.friendsUrl) {
        axios.get(this.state.friendsUrl)
        .then(res => {
          // console.log(res);
          this.setState({ friends: res.data})
        })
        .catch(err => console.error ("Friends Error:", err));
      }
    }
  }

  render () {
    return (
      <div className="friends">
          {this.state.friends.map(friend => (
            <UserCard person={friend} key={friend.id} />))
        }
      </div>
    );
  }
};

export default UserFriends;
