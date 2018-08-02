import styled from 'styled-components';

export default styled.input.attrs({
  type: props => props.type
})`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin || '1em'};
  padding: ${props => props.padding || '1em'};
  width: ${props => props.width || '100%'};
`;
