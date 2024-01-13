import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AvatarLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const AvatarWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: rgba(255, 255, 255, 0.01);
`;

export const AvatarImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const Name = styled.p`
  color: var(--white);
  font-size: 15px;
  transition: var(--transition-dur-and-fun);

  ${AvatarLink}:hover & {
    color: var(--green-light);
  }
`;

export const Surname = styled.span`
  display: none;
`;
