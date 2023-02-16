import { PropsWithChildren } from "react";
import { CSSProperties, StyledComponentPropsWithRef } from "styled-components";

export type ListProps = PropsWithChildren & {
  direction?: "row" | "column";
  gap?: number;
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
} & StyledComponentPropsWithRef<"div">;
