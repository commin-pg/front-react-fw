import { AppstoreAddOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons';
import { Avatar, Empty, List, message, PageHeader, Popconfirm, Space, Table } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { _stockDeletedList, _stockRestore } from '_axios/finance';

function StockDeletedPage() {
    const [GetStockDataAllLoading, setGetStockDataAllLoading] = useState(false)
    const [Datas, setDatas] = useState([])


    const getStockDeletedList = async () => {
        await _stockDeletedList().then(response => {
            console.log(response.data)
            setDatas(response.data)
        })
    }
    useEffect(() => {
        getStockDeletedList();
    }, [])

    const ContainerHeight = 400;
    const appendData = () => {
        setDatas(Datas.concat(Datas))
    }
    const onScroll = e => {
        if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
            appendData();
        }
    };

    const onDeleteRaw = async (record) => {
        console.log(record)
        await _stockRestore(record).then(response => {
            console.log(response)
            getStockDeletedList().then(result => {
                message.success({ content: 'complete', duration: 2 })
            })
        }).catch(e => { throw e })
    }


    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="제외 리스트"
            />
            {
                Datas.length > 0 ? (<List>
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
                                    title="정말 복구하시겠습니까?"
                                    onConfirm={() => onDeleteRaw(item)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <a style={{ color: 'blue' }}><ReloadOutlined /></a>
                                </Popconfirm>
                            </Space>
                        </List.Item>
                    ))

                    }
                </List>)
                    :
                    (<div className='empty-box' style={{ height: 'calc(100vh - 210px)' }}>
                        <Empty />
                    </div>)
            }




            {/* <Table loading={GetStockDataAllLoading}
                rowKey={'id'}
                // columns={colums}
                dataSource={Datas}
                bordered
                scroll={{ x: 1300, y: 500 }}
                pagination={false}
            >

            </Table> */}

        </div>
    )
}

export default StockDeletedPage