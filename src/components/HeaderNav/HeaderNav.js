import { NavList, NavListItem } from './HeaderNav.styled';

export const HeaderNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <NavListItem to="/">About</NavListItem>
        </li>
        <li>
          <NavListItem to="/">Portfolio</NavListItem>
        </li>
      </NavList>
    </nav>
  );
};
