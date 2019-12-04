import React from 'react';

// This doesn't use state so it can be a functional component
const UserCard = props => {
    console.log(props);
    return (
      <div className="card">
        <img src={props.person.avatar_url} alt="" />
        <div className="username">
          <a href={props.person.html_url}>{props.person.login}</a>
        </div>
      </div>
    )


}

export default UserCard;