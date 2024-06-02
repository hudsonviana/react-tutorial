import { createElement } from 'react';
import styles from './users.module.scss';

const UserFavoriteFoods = () => {
  return createElement(
    'section',
    {},
    <span className={styles.foodsTitle}>Favorite Foods:</span>,
    <br />,
    <ul>
      <li>Sushi</li>
      <li>Pizza</li>
      <li>Mediterranean Food</li>
    </ul>
  );
};

export default UserFavoriteFoods;
