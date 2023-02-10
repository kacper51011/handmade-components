import {
  ComponentProps,
  ComponentPropsWithRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { CSSProperties } from "styled-components";

export { default } from "./List";

export type ListProps = PropsWithChildren & {
  direction: "row" | "column";
  gap: number;
  justifyContent: CSSProperties["justifyContent"];
  alignItems: CSSProperties["alignItems"];
} & ComponentPropsWithRef<"div">;
