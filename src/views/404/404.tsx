import React, { FunctionComponent } from "react";
import Block from "@Components/Block/Block";

const FourOhFour: FunctionComponent = () => (
  <section>
    <Block
      paragraphs={["Go back home and try again..."]}
      title="404 - It broke! 😔"
      ctas={[
        {
          text: "Take me home",
          href: "/"
        }
      ]}
    />
  </section>
);

export default FourOhFour;
