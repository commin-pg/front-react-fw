import Axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

function Chatbot() {
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

        const textQueryVariables = {
            text
        }

        try {
            // async await 를 구현하기위해 then 으로 response 를 받지 않는다.
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)
            console.log('RESPONSE !! : ', response)
            const content = response.data.fulfillmentMessages[0]

            conversation = {
                who: 'bot',
                content: content
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

            console.log(conversation)


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
            console.log(conversation)
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
    return (
        <div style={{
            heigth: 700, width: 700,
            border: '3px solid black', borderRadius: '7px'
        }}>

            <div style={{ height: 644, width: '100%', overflow: 'auto' }}>

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
