import styled from 'styled-components';

export const ModalMenuButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: stroke var(--transition-dur-and-fun);

  &:hover {
    stroke: var(--green-light);
  }
`;

export const MenuIcon = styled.svg`
  width: 28px;
  height: 28px;
  stroke: var(--white);
  cursor: pointer;
`;
