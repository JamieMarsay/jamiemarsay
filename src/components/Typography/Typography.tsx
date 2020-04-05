import React, { FunctionComponent } from "react";
import { ITypography } from "./ITypography";
import "./Typography.scss";
import clsx from "clsx";

const Typography: FunctionComponent<ITypography> = ({
  variant = "p",
  capitalise,
  className,
  underline,
  spacing,
  centre,
  title,
  upper,
  align,
  text,
  bold,
  size
}) => {
  const Tag = variant;

  return (
    <Tag
      className={clsx({
        "text--capitalise": capitalise,
        "text--underline": underline,
        [`${className}`]: className,
        [`text--${align}`]: align,
        "text--spacing": spacing,
        [`text--${size}`]: size,
        "text--centre": centre,
        "text--upper": upper,
        "text--title": title,
        "text--bold": bold
      })}
    >
      {text}
    </Tag>
  );
};

export default Typography;
