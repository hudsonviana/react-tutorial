import UserDetails from './components/UserDetails';

const App = () => {
  const mockers = [
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
  ];

  return (
    <div className="principal">
      {mockers.map((user) => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;
