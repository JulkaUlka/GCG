import { UserMenu } from "components/UserMenu/UserMenu";

import {
  NavBar,
  NavLinkStyled,
  OutletStyled,
  ImHomeStyled,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <>
      <NavBar>
        <NavLinkStyled to="/">
          <ImHomeStyled />
        </NavLinkStyled>
        <UserMenu />
      </NavBar>
      <OutletStyled />
    </>
  );
};
