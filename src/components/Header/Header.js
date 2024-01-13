import { AvatarAndName } from '../AvatarAndName/AvatarAndName';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <AvatarAndName />
      </HeaderContainer>
    </header>
  );
};
