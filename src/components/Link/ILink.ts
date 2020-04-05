import { ReactNode } from "react";

export interface ILink {
  children: ReactNode;
  internal?: boolean;
  className?: string;
  ariaLabel: string;
  target?: string;
  rel?: string;
  to: string;
}
