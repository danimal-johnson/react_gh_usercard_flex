import React from 'react';

// This doesn't use state so it can be a functional component
const UserCard = props => {
    console.log(props);
    return (
      <div className="card">
        <p>{props.person.login}</p>
      </div>
    )


}

export default UserCard;