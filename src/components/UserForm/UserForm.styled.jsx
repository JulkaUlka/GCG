import styled from "styled-components";

export const StyledForm = styled.form`
  background: #fff;
  padding: 1em 1em 1em;
  width: 80%;
  max-width: 80%;
  box-shadow: 0 0 1em #222;
  border-radius: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  @media (min-width:768px){
    padding: 2em 2em 2em;
    width: 600px;
  }

  .form-title {
    margin: 0 0 5px 0;
    padding: 10px;
    text-align: center;
    font-size: 24px;
    color: darken(#e5e5e5, 50%);6
    border-bottom: solid 1px #e5e5e5;
    @media (min-width:768px){
    font-size: 30px;
    margin: 0 0 50px 0;
  }
  }
`;
export const Paragraph = styled.p`
  margin: 0 0 3em 0;
  position: relative;
  font-family: sans-serif;
  font-size: 14px;
`;

export const Floatlabel = styled.label`
  position: absolute;
  left: 8px;
  top: 12px;
  color: #999;
  font-size: 16px;
  display: inline-block;
  padding: 4px 10px;
  font-weight: 400;
  background-color: transparent;
  @include transition(color 0.3s, top 0.3s, background-color 0.8s);
  &.floatLabel {
    top: -11px;
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  }
`;
export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  margin: 0;
  background: #fff;
  border: 1px solid #dbdbdb;
  font-size: 1.2em;
  padding: 0.8em 0.5em;
  border-radius: 2px;
  @media (min-width: 768px) {
    font-size: 1.6em;
  }
`;
export const Button = styled.button`
  background: rgba(255, 128, 0, 0.92);
  box-shadow: 0 3px 0 0 #bcb8b2;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  outline: none;
  padding: 10px 15px;
  text-shadow: 0 1pxrgb (25, 29, 24);

  &:hover {
    background: orange;
    color: #fff;
  }
`;
