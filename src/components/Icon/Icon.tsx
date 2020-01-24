import React, { FunctionComponent } from "react";
import { IIcon } from "./IIcon";
import clsx from "clsx";
import "./Icon.scss";

const Icon: FunctionComponent<IIcon> = ({ src, alt, action, className }) => {
  return (
    <img
      onClick={action ? () => action() : () => null}
      className={clsx("icon", {
        [`${className}`]: className
      })}
      src={src}
      alt={alt}
    />
  );
};

export default Icon;
