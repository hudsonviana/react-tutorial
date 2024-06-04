import { useState } from 'react';
import PostContainer from './components/PostContainer';
import { UserContext } from './utils/contexts/UserContext';
import { useFetchUser } from './utils/hooks/useFetchUser';

const App = () => {
  const { user, loading, error } = useFetchUser(4);

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!loading && !error && !user) {
      setUserData(user);
    }
  }, [loading, error, user]);

  return (
    <div>
      <UserContext.Provider
        value={{
          id: 1,
          username: 'Hudson',
          email: 'teste@teste.com',
          displayname: 'Developer',
        }}
      >
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
