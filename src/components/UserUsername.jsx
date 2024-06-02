import React from 'react';

const UserUsername = (props) => {
  return (
    <div>
      <b>Username: </b>
      <span>{props.username}</span>
    </div>
  );
};

export default UserUsername;
