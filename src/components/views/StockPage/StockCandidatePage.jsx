import { DeleteOutlined, ReloadOutlined } from '@ant-design/icons'
import { Avatar, Empty, List, message, PageHeader, Popconfirm, Space, Table } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { _stockCandidateList, _stockRemoveCandidate } from '_axios/finance'
function StockCandidatePage() {
    const [Datas, setDatas] = useState([])

    const getStockCandidateList = async () => {
        await _stockCandidateList().then(response => {
            console.log("Candidate : ", response.data)
            setDatas(response.data)
        })
    }

    useEffect(() => {
        getStockCandidateList();
    }, [])


    const onDeleteRaw = async (record) => {
        console.log(record)
        await _stockRemoveCandidate(record.compayName).then(response => {
            console.log("remove? ", response);
            getStockCandidateList().then(res => {
                message.success({ content: 'complete', duration: 2 })
            })
        })
    }


    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="후보 리스트"
            />
            {
                Datas.length > 0 ?
                    (<List>
                        {Datas.map((item, index) => (
                            <List.Item key={index}>
                                <List.Item.Meta
                                    avatar={<Avatar style={{
                                        backgroundColor: '#f56a00',
                                        verticalAlign: 'middle'
                                    }} >{item.financeType}</Avatar>}
                                    title={<a href={item.compayFinanceDetailUrl} target='_blank'>{item.compayName}</a>}
                                    description={item.regDate}
                                />
                                <Space size="middle">

                                    <Popconfirm
                                        placement="leftBottom"
                                        title="정말 삭제하시겠습니까?"
                                        onConfirm={() => onDeleteRaw(item)}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <a style={{ color: 'red' }}><DeleteOutlined /></a>
                                    </Popconfirm>
                                </Space>
                            </List.Item>
                        ))

                        }
                    </List>) : (
                        <div className='empty-box'
                            style={{ height: 'calc(100vh - 210px)' }}
                        >
                            <Empty />
                        </div>
                    )
            }

        </div>
    )
}

export default StockCandidatePage