import React, { FunctionComponent } from "react";
import { IIcon } from "./IIcon";
import clsx from "clsx";
import "./Icon.scss";

const Icon: FunctionComponent<IIcon> = ({
  className,
  action,
  large,
  src,
  alt
}) => {
  return (
    <img
      onClick={action ? () => action() : () => null}
      className={clsx("icon", {
        [`${className}`]: className,
        "icon--large": large
      })}
      src={src}
      alt={alt}
    />
  );
};

export default Icon;
