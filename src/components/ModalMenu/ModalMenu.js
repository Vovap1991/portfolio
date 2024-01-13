import { ModalMenuWrapper, Backdrop } from './ModalMenu.styled';

export const ModalMenu = ({ setShowModalMenu, showModalMenu }) => {
  return (
    <Backdrop
      className={showModalMenu ? 'active' : ''}
      onClick={() => setShowModalMenu(false)}
    >
      <ModalMenuWrapper onClick={e => e.stopPropagation()}>
        This is modal
      </ModalMenuWrapper>
    </Backdrop>
  );
};
