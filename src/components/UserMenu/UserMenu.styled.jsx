import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;

  &:hover,
  &:focus {
    color: orange;
  }

  &.active {
    color: orange;
    padding: 6px 12px;
    border-radius: 4px;
    pointer-events: none;
  }
`;
export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
`;
export const LinkItem = styled.li`
  justify-content: flex-end;
`;
