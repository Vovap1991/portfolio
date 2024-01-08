import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Container } from 'components/StyledComponents/Container';

export const HeaderContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--black-secondary);
`;

export const AvatarLink = styled(Link)`
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
