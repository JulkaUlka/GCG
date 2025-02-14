// import { ReactComponent as Logo } from "../../img/logo.png";
import { Container, Title, Frame, Block } from "./Home.styled";
import logo from "../../img/logo.png";
export default function Home() {
  return (
    <>
      <Block>
        <Container>
        <img src={logo} alt="Logo" />
        </Container>
        <Frame>
          <Title>GCG Lab.</Title>
        </Frame>
      </Block>
    </>
  );
}
