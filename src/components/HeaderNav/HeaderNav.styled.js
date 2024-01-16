import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const NavListItem = styled(NavLink)`
  font-size: 20px;
  color: var(--white);
  /* 
  &.active {
    color: var(--green-light);
  } */
  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--green-light);
  }
`;
