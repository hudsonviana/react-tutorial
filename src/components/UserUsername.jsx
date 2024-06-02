import styles from './styles.module.css';

const UserUsername = (props) => {
  return (
    <>
      <b className={styles.username}>Username: </b>
      <span>{props.username}</span>
      <br />
    </>
  );
};

export default UserUsername;
