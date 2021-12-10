import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { Container, Divider, Header } from "semantic-ui-react";
import CardSummary from "./CardSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useNavigate } from "react-router-dom";


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  let history = useNavigate();


  function handleSignOut() {
    setIsAuthenticated(false);
    history('/');
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }
  

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CardSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
