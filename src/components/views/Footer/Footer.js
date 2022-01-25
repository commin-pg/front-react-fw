import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '180px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            color:'#fafafa',backgroundColor:'#1f1f1f'
        }}>
           <p> Happy Coding  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
