import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  transition: ${props => props.theme.transition || '0.2s'};
  margin: ${props => props.margin};
  text-transform: uppercase;
  color: ${props =>
    props.primary
      ? props.theme.primaryColor
      : props.secondary
        ? props.theme.secondaryColor
        : props.color};
  font-family: ${props => props.fontFamily};
  border: ${props => props.theme.buttonBorder || props.border};
  border-color: ${props =>
    props.primary
      ? props.theme.primaryColor
      : props.secondary
        ? props.theme.secondaryColor
        : props.color};
  border-radius: ${props => props.theme.buttonRadius || props.borderRadius};
  padding: ${props => props.theme.buttonPadding || props.padding};
  font-size: ${props => props.theme.buttonFontSize || props.fontSize};
  background-color: ${props =>
    props.theme.buttonBackgroundColor || props.backgroundColor};

  &:hover {
    color: ${props =>
      props.primary
        ? props.theme.hoverColorPrimary
        : props.secondary
          ? props.theme.hoverColorSecondary
          : props.hoverColor};
    border: ${props => props.theme.buttonBorder || props.hoverBorder};
    border-color: ${props =>
      props.primary
        ? props.theme.primaryColor
        : props.secondary
          ? props.theme.secondaryColor
          : props.color};
    background-color: ${props =>
      props.primary
        ? props.theme.primaryColor
        : props.secondary
          ? props.theme.secondaryColor
          : props.hoverBackgroundColor};
  }
`;
