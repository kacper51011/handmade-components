import { ComponentPropsWithRef } from "react";
import { CSSProperties, StyledComponentPropsWithRef } from "styled-components";

export type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary" | "outlined";
  sharpness?: "primary" | "rounded";
  size?: "small" | "medium" | "large";
  fullWidth: boolean;
} & StyledComponentPropsWithRef<"button">;
