import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "./ILink";
import clsx from "clsx";
import "./Link.scss";

export const InternalLink: FunctionComponent<ILink> = ({
  ariaLabel,
  className,
  children,
  target,
  rel,
  to,
}) => (
  <NavLink
    activeClassName="link--current"
    className={clsx("link interactable", {
      [`${className}`]: className,
    })}
    aria-label={ariaLabel}
    target={target}
    rel={rel}
    to={to}
    exact
  >
    {children}
  </NavLink>
);

export const ExternalLink: FunctionComponent<ILink> = ({
  ariaLabel,
  className,
  children,
  target,
  rel,
  to,
}) => (
  <a
    className={clsx("link interactable", {
      [`${className}`]: className,
    })}
    aria-label={ariaLabel}
    target={target}
    href={to}
    rel={rel}
  >
    {children}
  </a>
);
