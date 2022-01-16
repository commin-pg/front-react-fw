import React from 'react'
import { List, Icon, Avatar } from 'antd'
function Message(props) {


    const avatarSrc = props.message.who === 'bot' ? <Icon type='robot'/> : <Icon type='smile'/>

    return (
        <div>
            <List.Item  style={{ padding: '1rem' }}>
                <List.Item.Meta
                    // avatar={<Avatar icon={} />}
                    avatar={<Avatar icon={avatarSrc} />}
                    title={props.message.who}
                    description={props.message.content.text.text}
                />
            </List.Item>
        </div>
    )
}

export default Message
