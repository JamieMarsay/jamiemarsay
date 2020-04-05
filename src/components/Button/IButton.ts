import { ReactNode, ReactText } from "react";

export interface IButton {
  children: ReactNode | ReactText | String;
  type?: "primary" | "secondary";
  action: () => void;
  className?: string;
}
