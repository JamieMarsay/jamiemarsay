import { ReactNode } from "react";

export interface IAnchor {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
  target?: string;
  alt?: boolean;
  href: string;
  rel?: string;
}
