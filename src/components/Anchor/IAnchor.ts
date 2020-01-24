import { ReactNode } from "react";

export interface IAnchor {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
  target?: string;
  href: string;
  rel?: string;
}
