import React from "react";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Text,
  Platform
} from "react-native";
import { oneOf, string, func, bool } from "prop-types";
import theme from "../../theme";
import styled, { css } from "styled-components";

// button styles for different variants of buttons
const viewStyles = {
  primary: css`
    ${({ theme }) => `
    background-color: ${theme.colors.primaryGreen}
  `};
  `,
  danger: css`
    ${({ theme }) => `
    background-color: ${theme.palette.danger}
  `};
  `
};

const textStyles = {
  primary: css`
    ${({ theme }) => `
    color: ${theme.colors.white};
  `};
  `
};

// All base buttons share the same css
const ViewStyled = styled.View`
  padding: 8px 16px;
  border-radius: 4px;
  ${({ variant }) => viewStyles[variant]};
`;

const TextStyled = styled.Text`
  text-align: center;
  line-height: 24;
  font-size: 16;
  color: ${({ theme }) => theme.palette.textLight}
    ${({ variant }) => textStyles[variant]};
`;

const ButtonCustom = ({
  accessibilityLabel,
  disabled,
  onPress,
  theme,
  title,
  variant,
  ...props
}) => {
  const accessibilityTraits = ["button"];

  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Touchable
      accessibilityLabel={accessibilityLabel}
      accessibilityTraits={accessibilityTraits}
      disabled={disabled}
      onPress={onPress}
      {...props}
    >
      <ViewStyled theme={theme} variant={variant}>
        <TextStyled theme={theme}>{title}</TextStyled>
      </ViewStyled>
    </Touchable>
  );
};

ButtonCustom.propTypes = {
  onPress: func.isRequired,
  title: string.isRequired,
  accessibilityLabel: string,
  disabled: bool,
  variant: oneOf(["primary", "secondary", "danger"])
};

ButtonCustom.defaultProps = {
  theme: theme,
  variant: "primary"
};

export default ButtonCustom;
