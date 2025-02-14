import { ReactComponent as Logo } from "../../img/icon.svg";
import { Container, Title, Frame, Block } from "./Home.styled";
export default function Home() {
  return (
    <>
      <Block>
        <Container>
          <Logo />
        </Container>
        <Frame>
          <Title>GCG Lab.</Title>
        </Frame>
      </Block>
    </>
  );
}
