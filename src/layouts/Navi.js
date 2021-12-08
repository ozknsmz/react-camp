import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { Container, Divider, Header } from "semantic-ui-react";
import CardSummary from "./CardSummary";

export default function Navi() {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CardSummary />
            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
