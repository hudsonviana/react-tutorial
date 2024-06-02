import React from 'react';
import UserFavoriteFoods from './UserFavoriteFoods';

const UserProfile = () => {
  return (
    <div id="user-profile">
      <p>Username: Bob</p>
      <div>
        <span>Email:</span>
        <span>hudson@teste.com</span>
      </div>

      <UserFavoriteFoods />
    </div>
  );
};

export default UserProfile;
