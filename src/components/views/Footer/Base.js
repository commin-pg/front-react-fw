import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CHANGE_ACTIVE_MENU } from '_actions/menu_actions';

class Base extends Component {
    componentDidMount() {
        // 최초 마운트 시
        console.log("MOUNT!!!")
        this.props.changeActiveMenu(this.props.location.pathname);
    }
    componentDidUpdate(prevProps) {

        // 컴포넌트가 업데이트 될 때 
        console.log("UPDATE!!!")
        if (this.props.location !== prevProps.location) {
            // URL이 변경되었을 때
            this.props.changeActiveMenu(this.props.location.pathname);
        }
    }

    render() {
        // Base는 단순히 Common 한 기능들을 수행하는 컴포넌트라서 따로 rendering 할건 없습니다
        return (
            <div></div>
        )
    }
}

// 반드시 withRouter로 감싸줘야함!!
export default withRouter(connect(
    null,
    (dispatch) => {
        return {
            changeActiveMenu: (payload) => {
                dispatch({ type: CHANGE_ACTIVE_MENU, payload: payload })
            }
        }
    }
)(Base))