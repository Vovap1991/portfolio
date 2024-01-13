import sprite from '../../assets/sprite.svg';
import { MenuIcon } from './MenuButton.styled';

export const MenuButton = () => {
  return (
    <MenuIcon>
      <use href={`${sprite}#menu`}></use>
    </MenuIcon>
  );
};
