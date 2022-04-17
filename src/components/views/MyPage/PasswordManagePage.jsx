import { Alert, Button, Form, Input, message, PageHeader } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '_actions/user_actions';
import { _changePassword } from '_axios/mypage';
import localstorageService from "../../../services/localstorage.service";

function PasswordManagePage({ history }) {

    const [UserId, setUserId] = useState(null)
    const [UserPassword, setUserPassword] = useState(null)
    const [UserNewPassword, setUserNewPassword] = useState(null)
    const [UserNewPasswordConfirm, setUserNewPasswordConfirm] = useState(null)
    const [AuthUser, setAuthUser] = useState({
        userId: undefined
    })

    const dispatch = useDispatch();

    useEffect(() => {
        const auth_user_str = localStorage.getItem('auth_user');
        const auth_user = JSON.parse(auth_user_str);
        setUserId(auth_user?.userData?.userId);
        setAuthUser(auth_user?.userData)
    }, [])



    const submitLogin = async (e) => {
        e.preventDefault();
        console.log("LOGIN?")
        if (UserPassword && UserNewPassword && UserNewPasswordConfirm && UserNewPassword === UserNewPasswordConfirm) {
            await _changePassword({ userId: UserId, oldPassword: UserPassword, newPassword: UserNewPassword }).then((result) => {
                console.log(result)
                if (result.success) {
                    message.success({ content: 'complete' })
                    setTimeout(async () => {
                        await dispatch(logoutUser(history))
                    }, 400)
                } else {
                    message.error({ content: `${result?.message}` })
                }
            }).catch(e => {
                throw e;
            })
        }
        else {
            message.error({ content: '비밀번호를 제대로 입력해주세요' })
        }

    };



    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="비밀번호 관리"
            />
            {AuthUser?.userId ? (
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    onSubmit={submitLogin}
                    autoComplete="off"
                >

                    {/* {login.error.data ? login.error.data.message : ""} */}
                    <Form.Item
                        label="UserId"
                        name="user_id"
                        initialValue={UserId}
                        rules={[{ required: true, message: "Please input your userId!" }]}
                    >
                        <Input disabled={true} onChange={e => setUserId(e.currentTarget.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your old password!" }]}
                    >
                        <Input.Password onChange={e => setUserPassword(e.currentTarget.value)} />
                    </Form.Item>

                    <Form.Item
                        label="New Password"
                        name="newPassword"
                        rules={[{ required: true, message: "Please input your new password!" }]}
                    >
                        <Input.Password onChange={e => setUserNewPassword(e.currentTarget.value)} />
                    </Form.Item>

                    <Form.Item
                        label="New Password confirm"
                        name="newPasswordConfirm"
                        rules={[{ required: true, message: "Please input your new password Confirm!" }]}
                    >
                        <Input.Password onChange={e => setUserNewPasswordConfirm(e.currentTarget.value)} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                        <Button type="primary" onClick={submitLogin}>
                            비밀번호 변경
                        </Button>
                    </Form.Item>
                </Form>

            ) : (

                <div>NO!!</div>

            )}


        </div >
    );
}

export default PasswordManagePage