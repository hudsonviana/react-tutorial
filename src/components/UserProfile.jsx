import PropTypes from 'prop-types';
import UserFavoriteFoods from './UserFavoriteFoods';
import UserUsername from './UserUsername';

const UserProfile = (props) => {
  props.callMe();

  return (
    <>
      <UserUsername username={props.username} />
      <b>Age: </b>
      <span>{props.age}</span>

      <UserFavoriteFoods />
    </>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
};

export default UserProfile;
