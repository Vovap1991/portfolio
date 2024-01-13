import { MenuButton } from 'components/MenuButton/MenuButton';
import { ModalMenu } from 'components/ModalMenu/ModalMenu';
import { useState } from 'react';
import { AvatarAndName } from '../AvatarAndName/AvatarAndName';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  const [showModalMenu, setShowModalMenu] = useState(false);

  const toggleModalMenu = () => {
    setShowModalMenu(showModalMenu => !showModalMenu);
  };

  return (
    <header>
      <HeaderContainer>
        <AvatarAndName />
        <MenuButton onClick={toggleModalMenu} />
        {showModalMenu && (
          <ModalMenu
            setShowModalMenu={setShowModalMenu}
            showModalMenu={showModalMenu}
          />
        )}
      </HeaderContainer>
    </header>
  );
};
