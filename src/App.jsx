import { useState, useEffect } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    document.title = 'Tutorial ' + counter;
  }, [sync]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal,
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    return () => {
      console.log(controller.signal);
      controller.abort();
    };
  }, []);

  // https://www.youtube.com/watch?v=lAFbKzO-fss&t=4310s
  // Parei em 4:51:28

  return (
    <div>
      <div>Você clicou no botão {counter} vezes.</div>
      <button onClick={() => setCounter((count) => count + 1)}>
        Clique aqui
      </button>
      <button onClick={() => setSync((currentState) => !currentState)}>
        Sync
      </button>
    </div>
  );
};

export default App;
