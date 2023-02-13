import { CSSProperties, StyledComponentPropsWithRef } from "styled-components";

export type NavbarProps = {
  variant?: "desktop" | "mobile";
  centering?: number;
  backgroundColor?: CSSProperties["backgroundColor"];
} & StyledComponentPropsWithRef<"nav">;
