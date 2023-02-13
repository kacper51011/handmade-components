import { ComponentPropsWithRef, PropsWithChildren } from "react";
import {
  CSSProp,
  CSSProperties,
  StyledComponentPropsWithRef,
  StyledProps,
} from "styled-components";

export type ListProps = PropsWithChildren & {
  direction?: "row" | "column";
  gap?: number;
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
} & StyledComponentPropsWithRef<"div">;
