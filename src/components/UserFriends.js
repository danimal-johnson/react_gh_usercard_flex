import React from 'react';

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

  }

  render () {
    return (
      <h2>List all the friends here</h2>
      // Map over all the friends in this.state.friends[]
    )
  }

};

export default UserFriends;
