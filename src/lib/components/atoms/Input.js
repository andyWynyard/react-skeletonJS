import styled from 'styled-components';

export default styled.input`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
`;
