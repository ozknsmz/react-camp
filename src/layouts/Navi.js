import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { Container, Divider, Header } from "semantic-ui-react";
import CardSummary from "./CardSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut"

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CardSummary />
            <SignedOut/>
            <SignedIn/>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
