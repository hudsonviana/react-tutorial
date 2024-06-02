import { useState } from 'react';
import UserDetails from './components/UserDetails';

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [counter, setCounter] = useState(5);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'anson',
      email: 'anson@test.com',
    },
    {
      id: 2,
      username: 'michael',
      email: 'michael@test.com',
    },
    {
      id: 3,
      username: 'mario',
      email: 'mario@test.com',
    },
    {
      id: 4,
      username: 'pedro',
      email: 'pedro@test.com',
    },
  ]);

  return (
    <div className="principal">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: counter,
            username,
            email,
          };
          setCounter((prevCounter) => prevCounter + 1);
          setUsers((currentUserState) => [...currentUserState, newUser]);
        }}
      >
        <div>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add user</button>
      </form>

      <br />

      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
};

export default App;
