import { ElementType } from "react";

export interface ITypography {
  size?: "s" | "md" | "l" | "xl" | "xxl"
  text: string | number;
  variant?: ElementType;
  capitalise?: boolean;
  className?: string;
  bold?: boolean;
}
