import { LoadingOutlined } from '@ant-design/icons';
import { Button, Card, Input, InputNumber, message, PageHeader, Spin } from 'antd'
import Title from 'antd/lib/skeleton/Title'
import LoadingButton from 'components/views/@gull/components/buttons/LoadingButton'
import React from 'react'
import { useState } from 'react';
import { _setMyInvestInfo } from '_axios/mypage';

function InitInvestment(props) {
    const [Loading, setLoading] = useState(false)
    const [InitInvestAmount, setInitInvestAmount] = useState('100000')
    const antIcon = <LoadingOutlined style={{ fontSize: 21 }} spin />;
    const onInitInvestment = async () => {
        setLoading(!Loading)
        var request = {
            "investmentAmount": InitInvestAmount,
            "emergencyRate": 10,
            "perDiv": 10,
            "swing": false
        }
        setTimeout(async () => {
            await _setMyInvestInfo(request).then(res => {
                if (res.success) {
                    props.init();
                } else {
                    message.error({ content: `${res?.message}` })
                }
                setLoading(!Loading)
            })
        }, 300)
    }

    const onChangeVal = (value) => {
        setInitInvestAmount(value)
    }
    return (
        <Card style={{ width: '45rem' }}>
            <PageHeader
                className="site-page-header"
                title="초기 투자금을 입력해주세요."
            />
            <InputNumber placeholder="초기 투자금"
                defaultValue={InitInvestAmount}
                // value={InitInvestAmount}
                min={10000}
                max={100000000000}
                autoFocus={true}
                formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                disabled={Loading} bordered={false} onChange={onChangeVal} style={{ paddingTop: '30px', paddingBottom: '30px', paddingLeft: '20px', paddingRight: '20px', width: '100%', color: 'blue', fontWeight: 'bold' }} />
            <div style={{ marginTop: '1.2rem', marginBottom: '1.2rem' }}></div>
            <Button onClick={onInitInvestment} style={{ width: '100%' }} disabled={Loading}> {Loading ? <Spin indicator={antIcon} /> : '확인'}</Button>
        </Card>
    )
}

export default InitInvestment