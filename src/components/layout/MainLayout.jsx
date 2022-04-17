import { Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import {
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowLeftOutlined,
  StockOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  DeleteOutlined,
  HeartOutlined,
  MoneyCollectOutlined,
  WalletOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import './MainLayout.css'
import { changeActiveMenu } from "_actions/menu_actions";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "_actions/user_actions";

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

function MainLayout({ children, history }) {
  const [Collapsed, setCollapsed] = useState(false);
  // const menus = useSelector(state => state.menu.menus);
  // const user = useSelector(state => state.user);
  const [UserInfo, setUserInfo] = useState({})

  const ls = window.localStorage;

  const dispatch = useDispatch();
  useEffect(() => {
    const authUser = JSON.parse(ls.getItem("auth_user"));
    setUserInfo(authUser?.userData)

  }, [])


  const toggle = () => {
    setCollapsed(!Collapsed);
  };

  const logout = async () => {
    console.log(history)
    await dispatch(logoutUser(history));
  }

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
          left: 0,
        }}>


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
                <span>주식 리스트</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/stock/deleted">
              <Link to="/stock/deleted">
                <DeleteOutlined />
                <span>제외 리스트</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/stock/candidate">
              <Link to="/stock/candidate">
                <HeartOutlined />
                <span>후보 리스트</span>
              </Link>
            </Menu.Item>
          </SubMenu>


          <SubMenu key="mypage-sub" icon={<UserOutlined />} title="Mypage">
            <Menu.Item key="/mypage/finance_manage">
              <Link to="/mypage/finance_manage">
                <MoneyCollectOutlined />
                <span>투자금 관리</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/mypage/stock_manage">
              <Link to="/mypage/stock_manage">
                <WalletOutlined />
                <span>보유주식관리</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/mypage/password">
              <Link to="/mypage/password">
                <SecurityScanOutlined />
                <span>비밀번호 변경</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>

        <div className='menu-collapsed-btn' style={{ color: 'white' }} onClick={toggle}><ArrowLeftOutlined /></div>
      </Sider>


      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor: 'white', position: "fixed", zIndex: '1', width: '100%' }}>
          <div>
            {UserInfo ? `환영합니다. ${UserInfo.userId}` : ''}
          </div>
          <div>
            {UserInfo ? <a onClick={logout}>로그아웃</a> : <Link to='/login'>로그인</Link>}
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px 0",
            padding: 24,
            minHeight: 280,
            backgroundColor: "#fff",
            overflow: "initial",
            marginTop: "100px"
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

export default withRouter(MainLayout);
