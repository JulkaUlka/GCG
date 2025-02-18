import React, { useState, useEffect } from "react";
import gsap from "gsap";
import {
  Container,
  Title,
  Frame,
  Block,
  Slogan,
  AnimationBlock,
} from "./Home.styled";
import logo from "../../img/logo.png";

// Хук для відслідковування медіа-запиту
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    if (isDesktop) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to("#image", { duration: 5, scale: 1.2, rotate: 360, opacity: 1 })
        .to("#image", { duration: 5, scale: 0.1, rotate: -360, opacity: 0 })
        .fromTo(
          "#text, #text2",
          { scale: 0.1, opacity: 0 },
          { duration: 3, scale: 1.2, opacity: 1 }
        )
        .to("#text, #text2", { duration: 3, opacity: 1 })
        .to("#text, #text2", { duration: 3, scale: 0.1, opacity: 0 });

      // Очистка таймлайну при демонтованні або зміні режиму
      return () => tl.kill();
    } else {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to("#image", { duration: 5, scale: 1.2, opacity: 1 })
        .to("#image", { duration: 5, scale: 0.1, opacity: 0 })
        .fromTo(
          "#text",
          { scale: 0.1, opacity: 0 },
          { duration: 3, scale: 1.2, opacity: 1 }
        )
        .to("#text", { duration: 3, opacity: 1 })
        .to("#text", { duration: 3, scale: 0.1, opacity: 0 });

      // Очищення таймлайну при демонтованні або зміні режиму
      return () => tl.kill();
    }
  }, [isDesktop]);

  return (
    <>
      {isDesktop ? (
        // Розмітка для десктопної версії з id для GSAP-анімації
        <Block>
          <Container id="image">
            <img src={logo} alt="Logo" />
          </Container>
          <AnimationBlock>
            <Title id="text">
              GCG Lab<span style={{ fontSize: "4.5vw" }}>.</span>
            </Title>
            <Slogan id="text2">
              No limits in tech, no borders in solutions!
            </Slogan>
          </AnimationBlock>
        </Block>
      ) : (
        // Розмітка для мобільної версії
        <Block>
          <Container>
            <img src={logo} alt="Logo" />
          </Container>
          <Frame id="image">
            <Title>
              GCG Lab<span style={{ fontSize: "4.5vw" }}>.</span>
            </Title>
          </Frame>
          <Slogan id="text">
            No limits in tech,
            <br />
            no borders in solutions!
          </Slogan>
        </Block>
      )}
    </>
  );
}
