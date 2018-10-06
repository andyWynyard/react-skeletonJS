import styled from "styled-components";

export default styled.h4`
  font-size: ${props => props.fontSize};
  line-height: ${props => props.fontSize * 1.7}
  color: ${props => props.color};
  padding: ${props => props.padding};
  margin: ${props => props.padding};
  font-family: ${props => props.fontFamily};
`;
