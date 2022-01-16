import React from 'react'
import { List, Icon, Avatar } from 'antd'
import Card from "./Card";
const renderCard = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />)
}

function CardMessage(props) {
    const avatarSrc = props.message.who === 'bot' ? <Icon type='robot' /> : <Icon type='smile' />
    return (
        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                // avatar={<Avatar icon={} />}
                avatar={<Avatar icon={avatarSrc} />}
                title={props.message.who}
                description={renderCard(props.message.content.payload.fields.card.listValue.values)}
            />
        </List.Item>
    )
}

export default CardMessage
