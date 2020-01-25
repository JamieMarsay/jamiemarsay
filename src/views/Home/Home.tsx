import React, { FunctionComponent } from "react";
import { IBlock } from "@Components/Block/IBlock";
import { homeBlocks } from "@Data/homeBlocks";
import Block from "@Components/Block/Block";

const Home: FunctionComponent = () => (
  <section>
    {homeBlocks.map((block: IBlock) => (
      <Block
        paragraphs={block.paragraphs}
        title={block.title}
        ctas={block.ctas}
        key={block.title}
      />
    ))}
  </section>
);

export default Home;
