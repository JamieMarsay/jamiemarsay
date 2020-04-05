import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import Nav from "@Components/Nav/Nav";
import { IBlock } from "./IBlock";
import "./Block.scss";

const Block: FunctionComponent<IBlock> = ({ paragraphs, title }) => (
  <section className="block flex flex--stack flex--centre flex--v-centre pos--rel">
    <div className="block__inner">
      <Typography
        className="m--bottom-lg animate__fade--up"
        text={title}
        size="lg"
      />
      {paragraphs.map((paragraph, index) => (
        <Typography
          className={`block__content m--bottom-lg animate__fade--up animate__delay--${
            index + 1
          }`}
          text={paragraph}
          key={paragraph}
          size="md"
        />
      ))}
      <Nav />
    </div>
  </section>
);

export default Block;
