import sprite from '../../assets/sprite.svg';
import { MenuIcon, ModalMenuButton } from './MenuButton.styled';

export const MenuButton = ({ onClick }) => {
  return (
    <ModalMenuButton onClick={onClick}>
      <MenuIcon>
        <use href={`${sprite}#menu`}></use>
      </MenuIcon>
    </ModalMenuButton>
  );
};
