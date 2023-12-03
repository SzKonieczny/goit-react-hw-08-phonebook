import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 4px;
  color: black;
  padding: 10px;
  font-size: 22px;
  &.active {
    background-color: orange;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
