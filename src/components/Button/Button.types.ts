import { ComponentProps } from "react";

export type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary";
  sharpness?: "sharp" | "rounded";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
} & ComponentProps<"button">;
