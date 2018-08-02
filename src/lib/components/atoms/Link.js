import styled from 'styled-components';

export default styled.a`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  text-decoration: ${props => props.textDecoration};

  &:hover {
    color: ${props => props.hoverColor};
    text-decoration: ${props => props.hoverTextDecoration};
  }
`;
