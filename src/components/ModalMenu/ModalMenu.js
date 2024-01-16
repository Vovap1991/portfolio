import { CloseButton } from 'components/CloseButton/CloseButton';
import { HeaderNav } from 'components/HeaderNav/HeaderNav';
import { useEffect } from 'react';
import { ModalMenuWrapper, Backdrop } from './ModalMenu.styled';

export const ModalMenu = ({ setShowModalMenu, showModalMenu }) => {
  useEffect(() => {
    const handlerEscape = e => {
      if (e.code === 'Escape') {
        setShowModalMenu(false);
      }
    };
    window.addEventListener('keydown', handlerEscape);

    return () => {
      window.removeEventListener('keydown', handlerEscape);
    };
  }, [setShowModalMenu]);

  const handleCloseButtonClick = () => {
    setShowModalMenu(false);
  };

  return (
    <Backdrop
      className={showModalMenu ? 'active' : ''}
      onClick={() => setShowModalMenu(false)}
    >
      <ModalMenuWrapper onClick={e => e.stopPropagation()}>
        <CloseButton onClick={handleCloseButtonClick} />
        <HeaderNav />
      </ModalMenuWrapper>
    </Backdrop>
  );
};
