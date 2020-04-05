import React, { FunctionComponent } from "react";
import { IButton } from "./IButton";
import clsx from "clsx";
import "./Button.scss";

const Button: FunctionComponent<IButton> = ({
  type = "primary",
  className,
  children,
  action
}) => {
  return (
    <button
      className={clsx("button interactable", {
        [`${className}`]: className,
        [`button--${type}`]: type
      })}
      children={children}
      onClick={() => action()}
    />
  );
};

export default Button;
