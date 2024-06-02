import { createElement } from 'react';

const UserFavoriteFoods = () => {
  return createElement(
    'section',
    {},
    <span>Favorite Foods:</span>,
    <br />,
    <ul>
      <li>Sushi</li>
      <li>Pizza</li>
      <li>Mediterranean Food</li>
    </ul>
  );
};

export default UserFavoriteFoods;
