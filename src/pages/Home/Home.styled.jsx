import styled from "styled-components";

export const Block = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 991px) {
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
  }
`;

export const Container = styled.div`
  width: 30vw;
  height: auto;
  margin: 0 auto;
  border: 5px solid #000000;
  @media (min-width: 992px) {
    width: 30vw;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.1);
  }
  @media (max-height: 500px) {
    width: 100px;
    height: 150px;
  }
`;
export const AnimationBlock = styled.div`
  width: 100vw;
  @media (min-width: 992px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
  }
`;
export const Frame = styled.div`
  margin-top: 25px;
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
  animation: rotate 5s linear infinite;
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

export const Title = styled.h1`
  width: 100%;
  padding: 5px 10px 5px 15px;
  line-height: 1;
  font-size: 7.5vw;
  font-family: "DrukWideBold", sans-serif;
  font-weight: 100;
  font-style: normal;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
`;

export const Slogan = styled.p`
  width: 100%;
  margin-top: 20px;
  line-height: 1;
  font-size: 4.5vw;
  font-family: "Bricolage Grotesque", serif;
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  @media (max-width: 991px) {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
