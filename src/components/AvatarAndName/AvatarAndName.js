import avatar from '../../assets/Header/avatar.jpg';
import {
  AvatarLink,
  AvatarWrapper,
  AvatarImage,
  Name,
  Surname,
} from './AvatarAndName.styled';

export const AvatarAndName = () => {
  return (
    <AvatarLink to="/">
      <AvatarWrapper>
        <AvatarImage src={avatar} alt="avatar" />
      </AvatarWrapper>
      <Name>
        Volodymyr <Surname>Panchenko</Surname>
      </Name>
    </AvatarLink>
  );
};
