import styled from "styled-components";

export const Container = styled.div`
  width: 30vw;
  margin: 0 auto;
  border: 5px solid #000000;
  opacity: 0;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 8.5vw;
  font-family: "Bricolage Grotesque", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  color: #ffffff;
  text-align: center;
  opacity: 0;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both,
    glow 3s ease-in-out infinite alternate;
  animation-delay: 0s, 1s;

  @keyframes text-focus-in {
    0% {
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes glow {
    from {
      -webkit-text-stroke: 0px #ffa500;
    }
    to {
      -webkit-text-stroke: 3px #ffa500;
    }
  }
`;
