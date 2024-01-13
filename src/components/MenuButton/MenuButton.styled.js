import styled from 'styled-components';

export const MenuIcon = styled.svg`
  width: 28px;
  height: 28px;
  stroke: var(--white);
  cursor: pointer;
  transition: stroke var(--transition-dur-and-fun);

  &:hover {
    stroke: var(--green-light);
  }
`;
