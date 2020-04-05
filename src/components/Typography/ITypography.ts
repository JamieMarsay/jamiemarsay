import { ElementType } from "react";

export interface ITypography {
  size?: "s" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "insane";
  align?: "left" | "centre" | "right";
  text: string | number;
  variant?: ElementType;
  capitalise?: boolean;
  underline?: boolean;
  className?: string;
  spacing?: boolean;
  centre?: boolean;
  upper?: boolean;
  title?: boolean;
  bold?: boolean;
}
