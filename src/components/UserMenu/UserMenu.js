import {
  NavLinkStyled,
  LinkList,
  LinkItem,
} from "components/UserMenu/UserMenu.styled";

export const UserMenu = () => {
  return (
    <LinkList>
      <LinkItem>
        <NavLinkStyled to="login">SignIn</NavLinkStyled>
      </LinkItem>
      <li>
        <NavLinkStyled to="register">SignUp</NavLinkStyled>
      </li>
    </LinkList>
  );
};
