import React, { FunctionComponent } from "react";
import { IMain } from "./IMain";
import "./Main.scss";

const Main: FunctionComponent<IMain> = ({ Current }) => (
  <main className="main">
    <Current />
  </main>
);

export default Main;
