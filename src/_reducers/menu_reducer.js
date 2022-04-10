import {
    CHANGE_ACTIVE_MENU
} from '../_actions/menu_actions'
import React from 'react'
import { produce } from 'immer';
import { UserOutlined } from '@ant-design/icons';

const initialState = {
    menus: [
        {
            name: '홈',
            path: '/',
            icon: <UserOutlined />,
            isActive: false
        },
        {
            name: '주식리스트',
            path: '/stock',
            icon: <UserOutlined />,
            isActive: false
        },
    ]
};


const MenuReducer = function (state = initialState, action) {
    console.log("MENU REDUCER ::: ", state, action)
    switch (action.type) {
        case CHANGE_ACTIVE_MENU:
            return produce(state, draft => {
                draft.menus.forEach((menu) => {
                    const nowUrl = action.payload;
                    if (nowUrl === menu.path) {

                        menu.isActive = true;
                        console.log("MENU REDUCER ::: CHAGNE ", menu.path)
                    } else {
                        menu.isActive = false;
                    }
                })
            })
        default:
            return state;
    }

}

export default MenuReducer;