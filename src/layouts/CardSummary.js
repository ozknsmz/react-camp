import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function CardSummary() {
  return (
    <div>
      <Dropdown item text="Language">
        <Dropdown.Menu>
          <Dropdown.Item>Iphone Phone case</Dropdown.Item>
          <Dropdown.Item>Samsung Phone case</Dropdown.Item>
          <Dropdown.Item>Ixaomi Phone case</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/cart">Sepete Git </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
