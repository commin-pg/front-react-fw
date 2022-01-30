import React from "react";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons/lib/icons";
function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="home" icon={<MailOutlined/>}>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="class" icon={<MailOutlined/>}>
        <a href="/class">classes</a>
      </Menu.Item>
      <Menu.Item key="gallery" icon={<MailOutlined></MailOutlined>}>
        <a href="/gallery2">gallery</a>
      </Menu.Item>
      <Menu.Item key="contact" icon={<MailOutlined/>}>
        <a href="/contact" >contact</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
