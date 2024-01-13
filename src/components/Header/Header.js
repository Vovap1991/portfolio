import { MenuButton } from 'components/MenuButton/MenuButton';
import { AvatarAndName } from '../AvatarAndName/AvatarAndName';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <AvatarAndName />
        <MenuButton />
      </HeaderContainer>
    </header>
  );
};
