import UserProfile from './components/UserProfile';

const App = () => {
  const callMe = () => {
    console.log('Hello!!');
  };

  return (
    <>
      <h1>Root component</h1>
      <UserProfile
        username="Bob"
        age={20}
        isLoggedIn={true}
        favoritesFoos={[{ id: '', name: 'Sushi' }]}
        callMe={callMe}
      />
    </>
  );
};

export default App;
