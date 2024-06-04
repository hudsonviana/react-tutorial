import { useState, useContext } from 'react';
import PostContent from './PostContent';
import { UserContext } from '../utils/contexts/UserContext';

const PostContainer = () => {
  const [data, setData] = useState('Olá, Mundo!!!');
  const userContextData = useContext(UserContext);

  return (
    <div>
      <PostContent data={data} />
      <div>
        {userContextData.displayname}
      </div>
    </div>
  );
};

export default PostContainer;
