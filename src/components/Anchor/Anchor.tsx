import React, { FunctionComponent } from "react";
import { IAnchor } from "./IAnchor";
import clsx from "clsx";
import "./Anchor.scss";

const Anchor: FunctionComponent<IAnchor> = ({
  ariaLabel,
  className,
  children,
  target,
  href,
  alt,
  rel
}) => (
  <a
    className={clsx("anchor", {
      [`${className}`]: className,
      "anchor--alt": alt
    })}
    aria-label={ariaLabel}
    target={target}
    href={href}
    rel={rel}
  >
    {children}
  </a>
);

export default Anchor;
