import { CSSProperties, StyledComponentPropsWithRef } from "styled-components";

export type NavbarProps = {
  // variant change the navbar position on the screen
  variant?: "desktop" | "mobile";
  // Centering add left and right padding on Navbar, making childrens be closer to the ceonter
  centering?: number;
  backgroundColor?: CSSProperties["backgroundColor"];
} & StyledComponentPropsWithRef<"nav">;
