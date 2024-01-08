import { HeaderContainer } from './Header.styled';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/Header/avatar.jpg';
import { AvatarLink, AvatarWrapper, AvatarImage } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <AvatarLink to="/">
          <AvatarWrapper>
            <AvatarImage src={avatar} alt="avatar" />
          </AvatarWrapper>
        </AvatarLink>
      </HeaderContainer>
    </header>
  );
};
