import styled from 'styled-components';

export default styled.h1`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding: ${props => props.padding};
  font-family: ${props => props.fontFamily};
  margin: ${props => props.margin};
`;
