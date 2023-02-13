import React, { FC } from "react";
import styled from "styled-components";
import { ListProps } from "./List.types";

const StyledList = styled.div<ListProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};

  > * {
    ${({ direction, gap }) =>
      direction === "row" &&
      gap &&
      `margin-left: ${gap * 0.25}rem` &&
      `margin-right: ${gap * 0.25}rem`};
    ${({ direction, gap }) =>
      direction === "column" &&
      gap &&
      `margin-top: ${gap * 0.25}rem;` &&
      `margin-bottom: ${gap * 0.25}rem;`}
  }
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
