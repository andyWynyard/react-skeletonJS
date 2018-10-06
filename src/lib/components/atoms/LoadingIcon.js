import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
    0% {background-color:red;}
    50.0% {background-color:#fff;}
    100.0% {background-color:red;}
`;

export default styled.img.attrs({
  src: props => props.src
})`
  animation: ${colorChange} 2s ease-in-out infinite;

  width: 100px;
  height: 100px;
`;
