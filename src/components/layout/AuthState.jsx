import { Avatar, Button, Layout } from 'antd';
import { useAuth } from 'hoc/auth.provider';
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './MainLayout.css'

function AuthState() {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return (
            <>
                <Link to='/login' >로그인</Link>
            </>
        );
    }

    return (
        <>
            <Layout.Header className="site-layout-background" style={{ padding: 0, backgroundColor: 'white', position: "fixed", zIndex: '1', width: '100%' }} >
                <div className='welcome-box'>
                    <div className='welcome-id'>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        Welcome <span style={{ color: '#cdcdcd' }}>{auth.user.userId}!{' '} </span>
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


            <Outlet />
        </>
    );
}

export default AuthState

