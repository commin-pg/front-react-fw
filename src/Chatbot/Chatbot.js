import Axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveMessage } from '../_actions/message_actions'
import Message from './Sections/Message'


function Chatbot() {

    const dispatch = useDispatch()
    const messageFromRedux = useSelector(state => state.message.messages)

    useEffect(() => {
        eventQuery('welcomeToMyWebSite')

    }, [])

    const textQuery = async (text) => {
        let conversation = {
            who: 'user',
            content: {
                text: {
                    text: text
                }
            }
        }


        dispatch(saveMessage(conversation))

        const textQueryVariables = {
            text
        }

        try {

            console.log('I Sent : ', conversation)
            // async await 를 구현하기위해 then 으로 response 를 받지 않는다.
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)

            for (let content of response.data.fulfillmentMessages) {
                conversation = {
                    who: 'bot',
                    content: content
                }
                dispatch(saveMessage(conversation))

            }

        } catch (error) {
            console.log(error)
            conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: 'Error just occured, please check the problem'
                    }
                }
            }

            dispatch(saveMessage(conversation))
        }

        console.log(conversation)
    }


    const eventQuery = async (event) => {

        const eventQueryVariables = {
            event
        }

        try {
            // async await 를 구현하기위해 then 으로 response 를 받지 않는다.
            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)
            const content = response.data.fulfillmentMessages[0]

            let conversation = {
                who: 'bot',
                content: content
            }

            dispatch(saveMessage(conversation))


        } catch (error) {
            console.log(error)
            let conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: 'Error just occured, please check the problem'
                    }
                }
            }
            dispatch(saveMessage(conversation))
        }
    }

    const keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            if (!e.target.value) {
                return alert('you need to type somthing first')
            }
            textQuery(e.target.value)

            e.target.value = "";
        }
    }

    const renderOneMessage = (message, i) => {
        console.log("renderOneMessage : ", message, i)
        return <>
            <Message
                key={i}
                message={message}
            ></Message>
        </>
    }




    const renderMessage = (returnMessage) => {
        if (returnMessage) {
            return returnMessage.map((message, i) => {
                return renderOneMessage(message, i);
            })
        } else {
            return null
        }

    }

    return (
        <div style={{
            heigth: 700, width: 700,
            border: '3px solid black', borderRadius: '7px'
        }}>

            <div style={{ height: 644, width: '100%', overflow: 'auto' }}>
                {renderMessage(messageFromRedux)}
            </div>

            <input style={{ margin: 0, width: '100%', height: 50, borderRadius: '4px', padding: '5px', fontSize: '1rem' }}
                placeholder='Send a message..'
                type='text'
                onKeyPress={keyPressHandler}
            />

        </div>
    )
}

export default Chatbot
