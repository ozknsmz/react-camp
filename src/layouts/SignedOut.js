import React from "react";
import { Button, Menu } from "semantic-ui-react";


export default function SignedOut() {
  return (
    <div>
      <Menu.Item>
      <Button primary>Giriş Yap</Button>
      <Button className="kayıt-ol" primary>Kayıt Ol</Button>
      </Menu.Item>
    </div>
  );
}
