import styled from 'styled-components';

export const CloseModalMenu = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  display: flex;
  align-items: center;
  padding: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;

  outline: none;
`;

export const CloseIcon = styled.svg`
  width: 28px;
  height: 28px;
  stroke: var(--white);
  cursor: pointer;
  transition: stroke var(--transition-dur-and-fun);

  &:hover {
    stroke: var(--green-light);
  }
`;
