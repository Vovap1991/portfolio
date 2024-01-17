import { NavList, NavListItem } from './HeaderNav.styled';

export const HeaderNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <NavListItem to="about">About</NavListItem>
        </li>
        <li>
          <NavListItem to="portfolio">Portfolio</NavListItem>
        </li>
        <li>
          <NavListItem to="resume">Resume</NavListItem>
        </li>
      </NavList>
    </nav>
  );
};
