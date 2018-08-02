import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  margin: ${props => props.margin};
  text-transform: uppercase;
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
  background-color: ${props => props.backgroundColor};

  &:hover {
    color: ${props => props.hoverColor};
    border: ${props => props.hoverBorder};
    background-color: ${props => props.hoverBackgroundColor};
  }
`;
