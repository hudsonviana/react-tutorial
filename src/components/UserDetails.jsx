import { useState } from 'react';
// import PropTypes from 'prop-types';

const UserDetails = ({ user, setUsers }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            setUsers((currentUserState) =>
              currentUserState.filter(
                (currentUser) => currentUser.id !== user.id
              )
            );
          }}
        >
          Delete
        </button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUserState) => {
                return currentUserState.map((currentUser) =>
                  currentUser.id === user.id
                    ? { ...currentUser, username, email }
                    : currentUser
                );
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <b>ID: </b>
        <span>{user.id}</span>
        <br />
        <b>Username: </b>
        {isEditing ? (
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        <b>Email: </b>
        {isEditing ? (
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span>{user.email}</span>
        )}
        <br />
        <br />
      </div>
    </div>
  );
};

// UserDetails.propTypes = {
//   user: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     username: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//   }),
// };

export default UserDetails;
