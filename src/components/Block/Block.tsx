import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import Anchor from "@Components/Anchor/Anchor";
import { IBlock } from "./IBlock";
import "./Block.scss";

const Block: FunctionComponent<IBlock> = ({ title, paragraphs, ctas }) => (
  <div className="block pos--rel">
    <Typography
      className="block__title m--bottom-md"
      text={title}
      variant="h2"
      size="xxl"
    />

    {paragraphs
      ? paragraphs.map((paragraph: string) => (
          <Typography
            className="m--bottom-md"
            text={paragraph}
            key={paragraph}
          />
        ))
      : null}
    {ctas && ctas.length
      ? ctas.map(cta => (
          <Anchor
            children={<Typography text={cta.text} bold />}
            className="m--bottom-md"
            ariaLabel={cta.text}
            href={cta.href}
            key={cta.text}
          />
        ))
      : null}
  </div>
);

export default Block;
