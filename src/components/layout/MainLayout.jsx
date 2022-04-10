import { Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowLeftOutlined,
  StockOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import './MainLayout.css'
import { changeActiveMenu } from "_actions/menu_actions";
import { useDispatch, useSelector } from "react-redux";

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

function MainLayout({ children }) {
  const [Collapsed, setCollapsed] = useState(false);
  const menus = useSelector(state => state.menu.menus);
  const user = useSelector(state => state.user);
  const [UserInfo, setUserInfo] = useState({})

  const ls = window.localStorage;

  useEffect(() => {
    const authUser = JSON.parse(ls.getItem("auth_user"));
    setUserInfo(authUser.userData)

  }, [])


  const toggle = () => {
    setCollapsed(!Collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null}
        collapsible
        collapsed={Collapsed}
        onCollapse={toggle}
        // collapsedWidth={0} 
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0
        }}>


        {/* {React.createElement(
          Collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: toggle,
          }
        )} */}
        <div className="logo" >
          {UserInfo ? `환영합니다. ${UserInfo.userId}` : ''}

        </div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]} >
          {/* {menus.map((menu, key) => (
            <Menu.Item key={menu.path} >
              <NavLink to={menu.path} style={{ textDecoration: 'none' }}>
                {menu.icon}
                <span>{menu.name}</span>
              </NavLink>
            </Menu.Item>
          ))} */}
          {/* <Menu.Item className="menu-collapsed-btn" onClick={toggle}><ArrowLeftOutlined /></Menu.Item> */}
          <Menu.Item key="/" >
            <NavLink to="/">
              <HomeOutlined />
              <span>Home</span>
            </NavLink>
          </Menu.Item>
          <SubMenu key="stock-sub" icon={<StockOutlined />} title="Stock">
            <Menu.Item key="/stock">
              <Link to="/stock">
                <UnorderedListOutlined />
                <span>주식리스트</span>
              </Link>
            </Menu.Item>

          </SubMenu>



        </Menu>

        <div className='menu-collapsed-btn' style={{ color: 'white' }} onClick={toggle}><ArrowLeftOutlined /></div>
      </Sider>


      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px 0",
            padding: 24,
            minHeight: 280,
            backgroundColor: "#fff",
            overflow: "initial"
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design @2022 Created by Commin
        </Footer>
      </Layout>


    </Layout>
  );
}

export default MainLayout;
