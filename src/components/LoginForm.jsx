import { useEffect } from 'react';
import { useDocumentClick } from '../utils/hooks/useDocumentClick';

const LoginForm = () => {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log('window redefinido');
    };

    window.addEventListener('resize', resizeEventHandler);

    return () => {
      console.log('Unmounting LoginForm');
      console.log('Removing Resize Event Listener');
      window.removeEventListener('resize', resizeEventHandler);
    };
  }, []);

  useDocumentClick();

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
