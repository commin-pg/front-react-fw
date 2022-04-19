import { Card } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

function NoAuthLayout() {
    return (
        <Card>
            <Outlet />
        </Card>
    )
}

export default NoAuthLayout