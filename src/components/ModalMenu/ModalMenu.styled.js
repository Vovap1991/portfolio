import styled, { keyframes } from 'styled-components';

export const Backdrop = styled.div`
  z-index: 999;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  background: transparent;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  pointer-events: none;
  transition: opacity var(--transition-dur-and-fun);
  opacity: 0;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

const modalOpenAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// const modalCloseAnimation = keyframes`
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(100%);
//   }
// `;

export const ModalMenuWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  width: 220px;
  height: 100vh;
  border-radius: 12px;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: black;
  padding: 25px 15px;
  padding-top: 60px;
  transform: translateX(100%);
  animation: ${modalOpenAnimation} var(--transition-modal);

  ${Backdrop}.active & {
    transform: translateX(0);
  }
`;
