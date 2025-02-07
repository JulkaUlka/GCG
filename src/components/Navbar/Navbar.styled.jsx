import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";

export const NavBar = styled.header`
  // width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  // border-bottom: 1px solid #2a363b;
  padding: 0 25px;
`;

export const HeaderWrapper = styled.div``;

export const NavLinkStyled = styled(NavLink)`
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
  }

  &:hover,
  &:focus {
    color: #ffa500;
  }

  &.active {
    color: #ffa500;
    padding: 6px 12px;
    border-radius: 4px;
    pointer-events: none;
    text-decoration: underline;
  }
`;

export const OutletStyled = styled(Outlet)``;
export const ImHomeStyled = styled(HiOutlineHome)`
  height: 25px;
  width: 25px;
`;
