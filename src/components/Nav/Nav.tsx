import React from "react";
import Typography from "@Components/Typography/Typography";
import { List, ListItem } from "@Components/List/List";
import { ExternalLink } from "@Components/Link/Link";
import { navLinks } from "@Data/navLinks";
import "./Nav.scss";

const Nav = () => (
  <nav className="nav">
    <List
      className="flex"
      children={navLinks.map(({ text, url }, index) => (
        <ListItem
          className={`m--right-lg animate__fade--up animate__delay--${
            index + 3
          }`}
          key={text}
          children={
            <ExternalLink
              children={
                <Typography className="interactable" text={text} size="md" />
              }
              ariaLabel={text}
              to={url}
            />
          }
        />
      ))}
    />
  </nav>
);

export default Nav;
