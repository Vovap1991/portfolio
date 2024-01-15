import sprite from '../../assets/sprite.svg';
import { CloseIcon, CloseModalMenu } from './CloseButton.styled';

export const CloseButton = ({ onClick }) => {
  return (
    <CloseModalMenu onClick={onClick}>
      <CloseIcon>
        <use href={`${sprite}#close`}></use>
      </CloseIcon>
    </CloseModalMenu>
  );
};
