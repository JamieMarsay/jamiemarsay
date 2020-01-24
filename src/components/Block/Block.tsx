import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import Anchor from "@Components/Anchor/Anchor";
import { IBlock } from "./IBlock";
import "./Block.scss";

const Block: FunctionComponent<IBlock> = ({ title, text, ctaText, href }) => (
  <div className="block">
    <Typography
      className="block__title m--bottom-md"
      text={title}
      variant="h2"
      size="xxl"
    />

    {text ? <Typography text={text} className="m--bottom-md" /> : null}
    {href && ctaText ? (
      <Anchor
        children={<Typography text={ctaText} bold />}
        ariaLabel={ctaText}
        href={href}
      />
    ) : null}
  </div>
);

export default Block;
