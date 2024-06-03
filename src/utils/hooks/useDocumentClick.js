import { useEffect } from 'react';

export function useDocumentClick() {
  useEffect(() => {
    console.log('useDocumentClick');
    const handleDocumentClick = () => console.log('Documento clicado!!');
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
}
