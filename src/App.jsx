import { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle((currentState) => !currentState)}>
        Toggle
      </button>
      {toggle && <LoginForm />}
    </div>
  );
};

export default App;
