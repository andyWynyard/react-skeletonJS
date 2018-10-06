import styled from "styled-components";

export default styled.p`
  display: inline;
  font-size: 16px;
  color: ${props =>
    props.type === "error"
      ? "red"
      : props.type === "caution"
        ? "orange"
        : props.type === "success"
          ? "green"
          : "black"};
  padding: 5px 10px;
  font-family: ${props => props.fontFamily};
  margin: 10px;
  line-height: 20px;
  border: 1px solid
    ${props =>
      props.type === "error"
        ? "red"
        : props.type === "caution"
          ? "orange"
          : props.type === "success"
            ? "green"
            : "black"};
  border-radius: 4px;
`;
