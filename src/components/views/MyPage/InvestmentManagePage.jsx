import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { _getInvestmentInfo } from '_axios/mypage'
import FormInvestment from './sections/FormInvestment'
import InitInvestment from './sections/InitInvestment'

function InvestmentManagePage() {
    const [InvestExist, setInvestExist] = useState(false)
    const [ViewInit, setViewInit] = useState(false)
    const [InvestInfo, setInvestInfo] = useState({
        investmentAmount: null, // 투자금
        perDiv: 10, // 종목당 비중 나누는 값
        emergencyRate: 10, // 비상금 %
        swing: false, // 스윙주 여부
    })

    const initInvestData = () => {
        _getInvestmentInfo().then(investInfo => {
            console.log(investInfo)
            if (investInfo.success) {
                if (investInfo.data) {
                    setInvestExist(true);
                    setViewInit(false);
                    var investData = {};
                    investData.modifyAt = investInfo.data.modifyAt;
                    investData.investmentAmount = investInfo.data.investmentAmount;
                    investData.emergencyRate = investInfo.data.emergencyRate;
                    investData.perDiv = investInfo.data.perDiv;
                    investData.swing = investInfo.data.swing;
                    setInvestInfo(investData)
                } else {
                    setInvestExist(false);
                    setViewInit(true);
                }
            } else {
                alert('Fail!')
            }
        }).catch(e => {
            alert(e)
        })
    }
    useEffect(() => {
        initInvestData();
    }, [])

    return (
        <div>
            {/* <div>{InvestExist ? 'true' : 'false'}</div>
            <div>{JSON.stringify(InvestInfo)}</div> */}
            <div>
                {
                    !InvestExist ? (


                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }} >
                            {
                                ViewInit ?
                                    <InitInvestment init={initInvestData} />
                                    :
                                    <LoadingOutlined style={{ fontSize: 30 }} spin />
                            }
                        </div>


                    ) :
                        (
                            <div>
                                {
                                    InvestInfo?.investmentAmount && <FormInvestment parentInvestInfo={InvestInfo} init={initInvestData} />
                                }
                            </div>
                        )
                }
            </div>
        </div >
    )
}

export default InvestmentManagePage