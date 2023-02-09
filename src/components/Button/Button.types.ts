import { ComponentPropsWithRef } from "react";

export type ButtonProps = {
  text?: string;
  variant: "primary" | "secondary";
  sharpness: "primary" | "rounded";
  size: "small" | "medium" | "large";
  fullWidth: boolean;
} & ComponentPropsWithRef<"button">;
