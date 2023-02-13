import React, { FC } from "react";
import styled from "styled-components";

import { NavbarProps } from "./Navbar.types";

const StyledNavbar = styled.nav<NavbarProps>`
  box-sizing: border-box;
  width: 100%;
  height: 75px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: fixed;
  ${({ variant }) => (variant === "desktop" ? "top: 0px;" : "bottom: 0px")};
  padding-left: ${({ centering }) =>
    centering ? centering * 0.5 + "rem" : "0rem"};
  padding-right: ${({ centering }) =>
    centering ? centering * 0.5 + "rem" : "0rem"};
`;

const Navbar: FC<NavbarProps> = ({
  variant = "desktop",
  backgroundColor = "#00e676;",
  centering = 1,
  ...props
}) => {
  return (
    <StyledNavbar
      centering={centering}
      variant={variant}
      backgroundColor={backgroundColor}
      {...props}
    ></StyledNavbar>
  );
};

export default Navbar;
