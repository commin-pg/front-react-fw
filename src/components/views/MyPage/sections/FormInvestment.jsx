
import { CaretRightOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { dateToFormatterCustom } from '@utils';
import {
    Button, Card, Divider, Drawer, Form, InputNumber, List, message, PageHeader, Radio, Skeleton, Space, Switch
} from 'antd';
import { _ } from 'core-js';
import { useAuth } from 'hoc/auth.provider';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { _deleteInvestHist, _getInvestHist, _setMyInvestInfo } from '_axios/mypage';
import './FormInvestment.css';

function FormInvestment(props) {
    // investmentAmount: null, // 투자금
    // perDiv: 10, // 종목당 비중 나누는 값
    // emergencyRate: 10, // 비상금 %
    // swing: false, // 스윙주 여부
    const { parentInvestInfo } = props;
    const [Loading, setLoading] = useState(false)

    let auth = useAuth();

    const [InvestInfo, setInvestInfo] = useState({
        modifyAt: parentInvestInfo ? parentInvestInfo.modifyAt : new Date(),
        investmentAmount: parentInvestInfo ? parentInvestInfo.investmentAmount : null, // 투자금
        perDiv: parentInvestInfo ? parentInvestInfo.perDiv : 10, // 종목당 비중 나누는 값
        emergencyRate: parentInvestInfo ? parentInvestInfo.emergencyRate : 10, // 비상금 %
        swing: parentInvestInfo ? parentInvestInfo.swing : false, // 스윙주 여부
    })

    const [EmergencyAmount, setEmergencyAmount] = useState(0);
    const [ActualInvestmentAmount, setActualInvestmentAmount] = useState(0);
    const [UndervaluedAmount, setUndervaluedAmount] = useState(0)
    const [SwingAmount, setSwingAmount] = useState(0);
    const [PerAmount, setPerAmount] = useState(0)
    const [FirstBuy, setFirstBuy] = useState(0)
    const [PerAddBuy, setPerAddBuy] = useState(0)
    const [AddBuys, setAddBuys] = useState(['1차 추가매수', '2차 추가매수', '3차 추가매수', '4차 추가매수', '5차 추가매수'])
    const [IncreatMoney, setIncreatMoney] = useState(0)

    const [DrawerVisible, setDrawerVisible] = useState(false)
    const [HistDrawerVisible, setHistDrawerVisible] = useState(false)

    const [HistCurrentPage, setHistCurrentPage] = useState(1)
    const [HistMeta, setHistMeta] = useState({
        currentPage: 0,
        itemsPerPage: 15,
        totalItems: 0,
        totalPages: 0
    })
    const [HistMoreBtnDisable, setHistMoreBtnDisable] = useState(true)
    const [HistData, setHistData] = useState([])


    const onDrawerToggle = () => {
        setDrawerVisible(!DrawerVisible)
    }

    const onHistDrawerToggle = () => {
        // if (!HistDrawerVisible) {
        //     getInvestHistList();
        // }
        setHistDrawerVisible(!HistDrawerVisible)
    }

    const deleteInvestHist = async (id) => {
        await _deleteInvestHist(id).then(result => {
            if (result.success) {
                setHistData(HistData.filter(f => f.id !== id))
                message.info('성공')
            } else {
                message.error(result.message)
            }

        }).catch(e => {
            message.error('지우기 실패')
        })
    }

    const getInvestHistList = async (next = false) => {
        var request = {}
        if (HistMeta.currentPage >= HistMeta.totalPages) {
            if (next === false) {

            } else {
                return;
            }
        }

        if (next) {
            request.page = HistCurrentPage + 1;
        } else {
            request.page = HistCurrentPage;
        }

        setHistCurrentPage(request.page)

        await _getInvestHist(request).then(result => {
            console.log(result)
            if (result.success) {
                setHistMeta(result.data.meta)
                setHistData([...HistData, ...result.data.data])

                if (request.page >= result.data.meta.totalPages) {
                    setHistMoreBtnDisable(true)
                } else {
                    setHistMoreBtnDisable(false)
                }

            } else {
                alert("InvestHist Fail")
            }
        })
            .catch(e => {
                alert(e)
            })

    }

    useEffect(() => {
        if (InvestInfo.investmentAmount) {
            const emergencyAmount = InvestInfo.investmentAmount * (InvestInfo.emergencyRate / 100); // 비상금
            const actualInvestmentAmount = InvestInfo.investmentAmount - emergencyAmount; // 실제 투자금
            const perAmount = actualInvestmentAmount / InvestInfo.perDiv;
            const firstBuy = perAmount / 2;
            const perAddBuy = firstBuy / 5
            setEmergencyAmount(emergencyAmount)
            setActualInvestmentAmount(actualInvestmentAmount)
            if (InvestInfo.swing) {
                setUndervaluedAmount(actualInvestmentAmount * 0.6)
                setSwingAmount(actualInvestmentAmount * 0.4)
            } else {
                setUndervaluedAmount(actualInvestmentAmount)
                setSwingAmount(0);
            }
            setPerAmount(perAmount)
            setFirstBuy(firstBuy);
            setPerAddBuy(perAddBuy)
        }
    }, [InvestInfo])


    useEffect(() => {
        // var copyValue = {};
        // copyValue.investmentAmount = parentInvestInfo.investmentAmount;
        // copyValue.perDiv = parentInvestInfo.perDiv;
        // copyValue.emergencyRate = parentInvestInfo.emergencyRate;
        // copyValue.swing = parentInvestInfo.swing;
        // setInvestInfo(copyValue)
        getInvestHistList();
        console.log("PROPS!!!", props)
    }, [])


    const [componentSize, setComponentSize] = useState('default');
    const [ModiftState, setModiftState] = useState(false)

    const onFormLayoutChange = (value) => {
        setComponentSize(value);
    };

    const onChangeVal = () => {
        console.log(InvestInfo)
    }

    const onChangeIncreateMoney = (value) => {
        console.log(value)
        // setIncreatMoney(value)
        // var copyValue = _.clone(InvestInfo)
        // copyValue.emergencyRate = value;
        // setInvestInfo(copyValue);
    }

    const onChangeSwing = (value) => {
        var copyValue = _.clone(InvestInfo)
        copyValue.swing = value;
        setInvestInfo(copyValue);
    }

    const onChangePerDiv = (value) => {
        var copyValue = _.clone(InvestInfo)
        copyValue.perDiv = value;
        setInvestInfo(copyValue);
    }


    const onChangeEmergencyRate = (value) => {
        var copyValue = _.clone(InvestInfo)
        copyValue.emergencyRate = value;
        setInvestInfo(copyValue);
    }

    const onChangeInvestmentAmount = (value) => {
        var copyValue = _.clone(InvestInfo)
        copyValue.investmentAmount = Number(value);
        setInvestInfo(copyValue);
    }

    const onChangeDate = (value) => {
        console.log(value)
    }

    const sbumitChangeInvestInfo = async () => {
        await _setMyInvestInfo(InvestInfo).then(result => {
            console.log(result)
            if (result.success) {
                message.success({ content: '저장 성공' })
                props.init();
            } else {
                message.error({ content: '저장 실패' })
            }
        }).catch(e => {
            message.error({ content: `에러 : ${e.message}` })
        })
    }

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>

                <div className='investment-config-container'>
                    {/* <Form.Item label="종목당 비중"> */}
                    <div className='investment-config-container-item'>
                        <div>종목당 비중 &nbsp; </div>
                        <InputNumber placeholder="비중"
                            defaultValue={InvestInfo.perDiv}
                            min={3}
                            max={20}
                            disabled={Loading} bordered={false} onChange={onChangePerDiv}
                        />
                    </div>
                    {/* <Input value={InvestInfo.perDiv} onChange={e => onChangePerDiv(e.currentTarget.value)} /> */}
                    {/* </Form.Item> */}

                    <div className='investment-config-container-divider'></div>

                    {/* <Form.Item label="비상금 %" style={{ padding: '0' }}> */}
                    <div className='investment-config-container-item'>
                        <div>비상금 % &nbsp; </div>
                        <InputNumber placeholder="비상금 %"
                            defaultValue={InvestInfo.emergencyRate}
                            min={5}
                            max={90}
                            disabled={Loading} bordered={false} onChange={onChangeEmergencyRate}
                        />
                    </div>




                    <div className='investment-config-container-divider'></div>

                    <div className='investment-config-container-item'>
                        <div>스윙주 포함 &nbsp; </div>

                        {
                            InvestInfo.swing ? <Switch defaultChecked onChange={onChangeSwing} />
                                : <Switch onChange={onChangeSwing} />
                        }
                    </div>

                    <div className='investment-config-container-item'>
                    </div>
                    <div className='investment-config-container-item'>
                    </div>
                    <div className='investment-config-container-item'>
                    </div>
                    <div className='investment-config-container-item'>
                    </div>
                </div>
                <Space style={{ display: 'flex', justifyContent: 'right' }}>
                    <Button type='primary' onClick={onHistDrawerToggle}>투자금 변화이력</Button>
                    <Button type='primary' onClick={sbumitChangeInvestInfo}> 변경사항 저장 </Button>
                </Space>

                <Card>
                    <PageHeader
                        className="site-page-header"
                        title="나의 투자금"
                        subTitle={dateToFormatterCustom(InvestInfo.modifyAt, 'yyyy-MM-DD')}
                        extra={
                            <Space >


                                <Radio.Group value={componentSize} onChange={e => onFormLayoutChange(e.target.value)}>
                                    <Radio.Button value="small">Small</Radio.Button>
                                    <Radio.Button value="default">Default</Radio.Button>
                                    <Radio.Button value="large">Large</Radio.Button>
                                </Radio.Group>

                                <Button onClick={onDrawerToggle}>요약</Button>
                            </Space>

                        }
                    />
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize,
                        }}
                        size={componentSize}
                    >

                        {/* <Form.Item label="날짜">
                        <DatePicker defaultValue={moment(InvestInfo.modifyAt, 'YYYY-MM-DD')} onChange={e => onChangeDate(e)} />
                    </Form.Item> */}

                        <Form.Item label="총 투자금 ₩" >
                            <InputNumber defaultValue={InvestInfo.investmentAmount ? Number(InvestInfo.investmentAmount) : 0} style={{ width: '100%' }}
                                // value={}
                                min={1000}
                                max={100000000000}
                                formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChangeInvestmentAmount}
                            />
                        </Form.Item>
                        <Form.Item label="비상금" >
                            <InputNumber
                                defaultValue={EmergencyAmount} style={{ width: '100%' }} disabled={!ModiftState}
                                value={EmergencyAmount}
                                min={10}
                                max={100000000000}
                                formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            />
                        </Form.Item>

                        <Form.Item label="실제 투자금" >
                            <InputNumber defaultValue={ActualInvestmentAmount} style={{ width: '100%' }} disabled={!ModiftState}
                                value={ActualInvestmentAmount}
                                min={10}
                                max={100000000000}
                                formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChangeVal}
                            />
                        </Form.Item>

                        <Form.Item label="저평가" >
                            <InputNumber defaultValue={UndervaluedAmount} style={{ width: '100%' }} disabled={!ModiftState}
                                value={UndervaluedAmount}
                                min={10}
                                max={100000000000}
                                formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChangeVal}
                            />
                        </Form.Item>

                        {
                            InvestInfo.swing &&
                            <Form.Item label="스윙주" >
                                <InputNumber defaultValue={SwingAmount} style={{ width: '100%' }} disabled={!ModiftState}
                                    value={SwingAmount}
                                    min={10}
                                    max={100000000000}
                                    formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                    onChange={onChangeVal}
                                />
                            </Form.Item>
                        }


                        <Form.Item label="한 종목당 비중" >
                            <InputNumber defaultValue={PerAmount} style={{ width: '100%' }} disabled={!ModiftState}
                                value={PerAmount}
                                min={10}
                                max={100000000000}
                                formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChangeVal}
                            />
                        </Form.Item>

                        <Form.Item label="첫 매수" >
                            <InputNumber defaultValue={FirstBuy} style={{ width: '100%' }} disabled={!ModiftState}
                                value={FirstBuy}
                                min={10}
                                max={100000000000}
                                formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChangeVal}
                            />
                        </Form.Item>

                        <Form.Item label="추가 매수" >
                            <InputNumber defaultValue={PerAddBuy} style={{ width: '100%' }} disabled={!ModiftState}
                                value={PerAddBuy}
                                min={10}
                                max={100000000000}
                                formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChangeVal}
                            />
                        </Form.Item>

                        {AddBuys.map((title, index) => (
                            <Form.Item label={title} key={index} >
                                <InputNumber defaultValue={FirstBuy + (PerAddBuy * (index + 1))} style={{ width: '100%' }} disabled={!ModiftState}
                                    value={FirstBuy + (PerAddBuy * (index + 1))}
                                    min={10}
                                    max={100000000000}
                                    formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                    onChange={onChangeVal}
                                />
                            </Form.Item>
                        ))}
                    </Form>



                </Card>


            </Space>

            <Drawer
                title="요약"
                placement="right"
                // closable={true}
                onClose={onDrawerToggle}
                visible={DrawerVisible}
                // getContainer={false}
                width={500}
                style={{ position: 'absolute' }}
            >
                <pre>
                    $$ {`${auth.user.username}`} $$ - {dateToFormatterCustom(InvestInfo.modifyAt, 'yyyy년 MM월 DD일')}<br />
                    {`총투자금 :${InvestInfo.investmentAmount}`} <br />
                    {`비상금 (${InvestInfo.emergencyRate}%) : ${EmergencyAmount}`}<br />
                    {`총 비상금 (${InvestInfo.emergencyRate}%) : ${EmergencyAmount}`}<br />
                    {`실제투자금 (${InvestInfo.emergencyRate}) : ${EmergencyAmount}`}<br />
                    {`저평가 (${InvestInfo.emergencyRate}) : ${EmergencyAmount}`}<br />
                    {`스윙주 (${InvestInfo.emergencyRate}) : ${EmergencyAmount}`}<br />
                    {`한 종목당 비중 (${InvestInfo.emergencyRate}) : ${EmergencyAmount}`}<br />
                    {`첫 매수 (${InvestInfo.emergencyRate}) : ${EmergencyAmount}`}<br />

                </pre>
            </Drawer>


            <Drawer
                title="투자금 변경이력"
                placement='bottom'
                width={500}
                onClose={onHistDrawerToggle}
                visible={HistDrawerVisible}
            // extra={
            //     <Space>
            //         <Button onClick={onHistDrawerToggle}>Cancel</Button>
            //         <Button type="primary" onClick={onHistDrawerToggle}>
            //             OK
            //         </Button>
            //     </Space>
            // }
            >

                <Space align='center' style={{ display: 'flex', justifyContent: 'center' }}>
                    <List
                        dataSource={HistData}
                        footer={<div style={{ display: 'flex', justifyContent: 'center' }} onClick={() => getInvestHistList(true)}>{!HistMoreBtnDisable && <Button>더보기</Button>}</div>}
                        renderItem={(item) => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    title={<span style={{ marginRight: '1.12rem' }}>{item.preInvestmentAmount === '0' ? '첫 투자금' : item.preInvestmentAmount} <CaretRightOutlined /> {item.newInvestmentAmount} </span>}
                                    description={dateToFormatterCustom(item.regDate, 'YYYY년 MM월 DD일 ')}
                                />
                                {
                                    (item.preInvestmentAmount === '0') ?
                                        <span></span>
                                        : <a style={{ color: 'red' }} onClick={() => deleteInvestHist(item.id)}><DeleteOutlined /></a>
                                }
                            </List.Item>
                        )}
                    />

                </Space>
            </Drawer>
        </>
    )
}

export default FormInvestment