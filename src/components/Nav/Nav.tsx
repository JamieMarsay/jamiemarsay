import React, { FunctionComponent } from "react";
import { List, ListItem } from "@Components/List/List";
import { navLinks, ILink } from "@Data/navLinks";
import Anchor from "@Components/Anchor/Anchor";
import Icon from "@Components/Icon/Icon";
import "./Nav.scss";

const Nav: FunctionComponent = () => (
  <nav className="nav">
    <List>
      {navLinks.map((link: ILink) => (
        <ListItem key={link.url}>
          <Anchor
            children={<Icon src={link.icon} alt={link.alt} />}
            ariaLabel={link.alt}
            href={link.url}
            target="_blank"
            rel="noopener"
            alt
          />
        </ListItem>
      ))}
    </List>
  </nav>
);

export default Nav;
