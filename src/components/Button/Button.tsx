import React, { FC } from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  ${({ fullWidth }) => fullWidth && "width:100%;"}
  padding: ${({ size }) =>
    (size === "small" && "0.35rem 0.8rem") ||
    (size === "medium" && "0.55rem 1.4rem") ||
    (size === "large" && "1rem 3rem")};
  background: ${({ color, variant }) =>
    (variant !== "outlined" && color) ||
    (variant === "primary" && "#00e676") ||
    (variant === "secondary" && "#ffea00") ||
    (variant === "outlined" && "#fafafa")};

  border-radius: ${({ sharpness }) =>
    sharpness === "primary" ? "4px;" : "16px"};
  font-family: Arial, Helvetica, sans-serif;
  border-width: ${({ variant }) => variant !== "outlined" && 0};
  border-color: ${({ color }) => color || "#00e676"};
  font-weight: 700;
`;
const Button: FC<ButtonProps> = ({
  fullWidth = false,
  size = "medium",
  sharpness = "primary",
  variant = "primary",
  text,
  ...props
}) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      size={size}
      sharpness={sharpness}
      variant={variant}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
