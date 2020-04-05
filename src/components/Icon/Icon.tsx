import React, { FunctionComponent } from "react";
import { IIcon } from "./IIcon";
import clsx from "clsx";
import "./Icon.scss";

const Icon: FunctionComponent<IIcon> = ({ className, name, label }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: require(`../../assets/icons/${name}.svg`)
      }}
      className={clsx("icon", {
        [`${className}`]: className
      })}
      aria-label={label}
      role="presentational"
    />
  );
};

export default Icon;
