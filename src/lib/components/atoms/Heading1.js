import styled from "styled-components";

export default styled.h1`
  font-size: ${props => props.fontSize};
  color: ${props =>
    props.primary ? props.theme.h1.primaryColor : props.color};
  padding: ${props => props.padding};
  font-family: ${props => props.fontFamily};
  margin: ${props => props.margin};
  line-height: ${props => props.fontSize * 1.7};
`;
