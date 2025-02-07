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
  width: fit-content;
  padding: 0px 30px;
  margin: 1vw auto;
  line-height: normal;
  font-size: 8.5vw;
  font-family: "Bricolage Grotesque", serif;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  border: 3px solid transparent;
  border-radius: 12px;
  background: linear-gradient(#000000, #000000) padding-box,
    conic-gradient(
        from var(--angle),
        #ffa500 0deg,
        #000000 90deg,
        #ffa500 180deg,
        #000000 270deg,
        #ffa500 360deg
      )
      border-box;
  animation: text-focus-in 1s ease-out both, rotate 5s linear infinite;
  animation-delay: 0s, 1s;

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

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

  @keyframes rotate {
    0% {
      --angle: 0deg;
    }
    100% {
      --angle: 360deg;
    }
  }
`;
