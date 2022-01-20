/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import { withRouter } from "react-router-dom";

function RightMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="gallery">
        <a href="/gallery2">gallery</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="/contact">contact</a>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(RightMenu);
