import { ArrowLeftOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Avatar, Button, Layout } from 'antd';
import { useAuth } from 'hoc/auth.provider';
import React from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import './MainLayout.css'

function AuthState(props) {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return (
            <>
                {/* <Navigate to='/login' >로그인</Navigate> */}
                <Link to='/login' >Sign In</Link>
            </>
        );
    }

    return (
        <>
            <Layout.Header className="site-layout-background" style={{ padding: 0, backgroundColor: 'white', position: "fixed", zIndex: '1', width: '100%' }} >
                <div className='welcome-box'>
                    <div className='welcome-id'>
                        <Button onClick={props.toggle} style={{ marginRight: '10px' }} icon={props.Collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} type={props.Collapsed ? 'primary' : 'default'}>

                        </Button>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        Welcome <span style={{ color: 'blue' }}>{auth.user.username}{' '} </span>
                    </div>

                    <div className='welcome-button'>
                        <a
                            onClick={() => {
                                auth.signout(() => navigate('/login'));
                            }}
                        >
                            Sign out
                        </a>
                    </div>

                </div>

            </Layout.Header>


            {/* <Outlet /> */}
        </>
    );
}

export default AuthState

