import React, { Children, FC } from "react";
import styled from "styled-components";
import Button from "../Button";
import { ListProps } from "./List.types";

const StyledList = styled.div<ListProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent + ";"}
  align-items: ${({ alignItems }) => alignItems + ";"}
  flex-direction: ${({ direction }) => (direction ? direction + ";" : "row;")} 
    
    > * {
    background-color: yellow;
    
    ${({ direction, gap }) =>
      direction === "row" &&
      `margin-left: ${gap * 0.25}rem;` &&
      `margin-right: ${gap * 0.25}rem;`}
    ${({ direction, gap }) =>
      direction === "column" &&
      `margin-top: ${gap * 0.25}rem;` &&
      `margin-bottom: ${gap * 0.25}rem;`}
`;

const List: FC<ListProps> = ({
  direction = "row",
  gap = 1,
  justifyContent = "center",
  alignItems = "center",
  ...props
}) => {
  return (
    <StyledList
      gap={gap}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...props}
    ></StyledList>
  );
};

export default List;
