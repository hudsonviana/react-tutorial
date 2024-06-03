import { useEffect } from 'react';

const LoginForm = () => {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log('window redefinido');
    };

    const handleDocumentClick = () => {
      console.log('Documento clicado');
    };

    window.addEventListener('resize', resizeEventHandler);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      console.log('Unmounting LoginForm');
      console.log('Removing Resize Event Listener');
      window.removeEventListener('resize', resizeEventHandler);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" />
      <input type="text" />
    </form>
  );
};

export default LoginForm;
