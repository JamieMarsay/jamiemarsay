import React, { FunctionComponent, useState } from "react";
import Typography from "@Components/Typography/Typography";
import Anchor from "@Components/Anchor/Anchor";
import ghostIcon from "@Assets/ghost.svg";
import Icon from "@Components/Icon/Icon";
import { IHeader } from "./IHeader";
import "./Header.scss";

const Header: FunctionComponent<IHeader> = ({ title }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner flex flex--v-centre flex--between">
        <Anchor
          children={<Typography text={title} variant="h1" />}
          ariaLabel="Home"
          href="/"
          alt
        />
        <Icon
          className="animate--bounce"
          action={() => toggleOpen(!open)}
          alt="Ghost logo"
          src={ghostIcon}
          large
        />
      </div>
    </header>
  );
};

export default Header;
