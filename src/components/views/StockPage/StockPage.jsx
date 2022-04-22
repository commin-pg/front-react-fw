import { AppstoreAddOutlined, CopyOutlined, DeleteOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Col, Input, Layout, Modal, Pagination, Popconfirm, Row, Select, Space, Table, Tag, Form, Button, message, PageHeader, Progress, Tooltip, Card } from "antd";
import { useFrameState } from "antd/lib/form/util";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Last } from "react-bootstrap/esm/PageItem";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveMenu } from "_actions/menu_actions";
import { _crwalingStockData, _deleteStock, _getCrwalingProgressRate, _getStockDataAll, _getStockLastDateKey, _stockAddCandidate, _stockCandidateList, _stockRemoveCandidate } from "_axios/finance";
import LoadingButton from "../@gull/components/buttons/LoadingButton";
import { SutableSelectItem } from "./section/SelectItem";
import './StockPage.css'

const { Option } = Select;

const { Header } = Layout;

let interval = undefined;

function StockPage(props) {
  const [GetStockDataAllLoading, setGetStockDataAllLoading] = useState(false)
  const [Datas, setDatas] = useState([])
  const [MetaData, setMetaData] = useState({})
  const [CurrentPage, setCurrentPage] = useState(1)
  const [Limit, setLimit] = useState(20)
  const [SearchSutableType, setSearchSutableType] = useState(null);
  const [Visible, setVisible] = useState(false)
  const [SearchLoading, setSearchLoading] = useState(false)
  const [ModalData, setModalData] = useState({})
  const [Keyword, setKeyword] = useState('')
  const [LastDateKey, setLastDateKey] = useState('')

  const [IsCrawlingNow, setIsCrawlingNow] = useState(false)
  const [ProcessRate, setProcessRate] = useState(0)

  useEffect(() => {
    if (IsCrawlingNow) {
      setLastDateKey('갱신 중..')
    } else {
      _getStockLastDateKey().then(response => {
        console.log(response?.data?.dateKey)
        setLastDateKey(response?.data?.dateKey)
      }).catch(e => alert(e))
    }
  }, [IsCrawlingNow])


  useEffect(() => {
    if (IsCrawlingNow) {
      interval = setInterval(() => {
        onProgress()
      }, 1000);
    } else {
      clearInterval(interval);
      _getCrwalingProgressRate().then(response => {
        if (response?.data?.progressType === 'PROCESSING') {
          setIsCrawlingNow(true);
          setProcessRate(response?.data?.process);
        } else {
          initData();
          _getStockLastDateKey().then(response => {
            console.log(response?.data?.dateKey)
            setLastDateKey(response?.data?.dateKey)
          }).catch(e => alert(e))
        }
      })
    }
  }, [IsCrawlingNow])

  useEffect(() => {
    if (ProcessRate === 100) {
      setIsCrawlingNow(false);
      clearInterval(interval);
    }
  }, [ProcessRate]);

  const onProgress = () => {
    _getCrwalingProgressRate().then(response => {
      if (response?.data?.progressType === 'PROCESSING') {
        setIsCrawlingNow(true);
        setProcessRate(response?.data?.process);
      } else {
        initData();
        setIsCrawlingNow(false);
        message.success('주식데이터를 모두 읽어왔습니다.')
      }
    })
  }


  const initData = async (limit = 20, page = 1, sutableType = null, keyword = null) => {
    setGetStockDataAllLoading(true);

    await _stockCandidateList().then(candidates => {
      console.log("Candi", candidates.data)
      var candidateCompanyNames = [];
      if (candidates.data)
        candidateCompanyNames = candidates.data.map(c => c.compayName);

      _getStockDataAll({ limit, page, sutableType, keyword }).then(response => {
        console.log(response)
        if (response?.data) {
          const customData = response.data.data.map(d => {
            d.psrRate = Math.ceil(d.psrRate * 100) / 100
            d.candidate = candidateCompanyNames.includes(d.compayName)
            return d;
          })
          setDatas([])
          setMetaData({})
          setTimeout(() => {

            setDatas(response.data.data);

            setMetaData(response.data.meta);
          }, 0)

        } else {
          alert("No Data")
        }
      }).catch(error => {
        alert(error.message);
      })
    }).catch(e => {
      alert(e.message);
    })

    if (SearchLoading)
      setSearchLoading(false)
    setGetStockDataAllLoading(false);
  }

  const changePage = (num) => {
    setCurrentPage(num)

    initData(MetaData.itemsPerPage, num, SearchSutableType, Keyword)
  }

  const onSizeChanger = (current, limit) => {
    setCurrentPage(current)
    setLimit(limit)
    initData(limit, current, SearchSutableType, Keyword)
  }

  const onSutableTypeSelect = (type) => {
    setSearchSutableType(type);
  }

  const onSearch = () => {
    setCurrentPage(1);
    message.loading({ content: 'searching..', key: 'search', duration: 1 })
    initData(Limit, 1, SearchSutableType, Keyword)
    setTimeout(() => {
      message.success({ content: 'complete', key: 'search', duration: 2 })
    }, 1000)

  }

  const onCandidate = async (record) => {
    message.loading({ content: '변경 중..', key: 'search', duration: 1 })

    console.log(record)
    if (record.candidate) {
      // delete

      await _stockRemoveCandidate(record.compayName).then(result => {
        var copy = [...Datas];
        var data = copy.map(f => {
          if (f.id === record.id) {
            f.candidate = false;
          }
          return f;
        });

        setDatas(data);
        setSearchLoading(false)

        message.success({ content: 'complete', key: 'search', duration: 2 })
      })

    } else {
      // add
      await _stockAddCandidate(record.id).then(result => {
        var copy = [...Datas];
        var data = copy.map(f => {
          if (f.id === record.id) {
            f.candidate = true;
          }
          return f;
        });
        setDatas(data);
        setSearchLoading(false)

        message.success({ content: 'complete', key: 'search', duration: 2 })
      })
    }
  }
  const onDeleteRaw = async (record) => {
    if (record.candidate) {
      message.warn({ content: '후보 종목입니다.', duration: 2 })
      return;
    }
    await _deleteStock(record).then(response => {
      initData(MetaData.itemsPerPage, CurrentPage, SearchSutableType, Keyword)
    })
      .catch(e => {
        throw e;
      })
  }

  const onCopy = async (record) => {
    var url = record.compayFinanceDetailUrl;
    var code = url.replace('https://finance.naver.com/item/main.naver?code=', '');
    console.log(code)

    const textarea = document.createElement("textarea");
    textarea.value = code;
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.position = "fixed";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    message.info({ content: `${code} Copied`, duration: 2 })
  }

  const onModal = (record) => {
    console.log(record)
    setVisible(true)
    setModalData(record)
  }

  const crwalingNaver = async () => {
    if (IsCrawlingNow) {
      message.warning('현재 데이터를 읽어오는 중 입니다.')
      return;
    }
    setIsCrawlingNow(true);
    await _crwalingStockData().then(response => {
      initData().then(result => {
        message.info({ content: '주식데이터를 읽어오고 있습니다.' })
      })
    }).catch(e => {
      console.log(e);
      throw e;
    })
  }

  return <div>
    <div>
      <PageHeader
        className="site-page-header"
        title="주식 리스트"
        subTitle={LastDateKey}
        extra={<Button type="normal" onClick={crwalingNaver} disabled={IsCrawlingNow}>갱신</Button>}
      />

    </div>

    {
      IsCrawlingNow === true ?
        (<div style={{ textAlign: 'center' }}>
          <Progress
            type="circle"
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            width={420}
            percent={ProcessRate}
          />
        </div>) : (
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>

            <Card>
              <Form className="stock-page-search-form">
                <Row gutter={24}>
                  <Col span={8} >
                    <Form.Item
                      label="Sutable:"
                    >
                      <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onSutableTypeSelect}
                        // onSearch={onSutableTypeSelect}
                        defaultValue={null}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value={null} > 전체 </Option>
                        {SutableSelectItem.map((item, index) => (
                          <Option value={item.value} >{item.text}</Option>
                        ))}
                      </Select>
                    </Form.Item>


                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Search:"
                    >
                      <Input value={Keyword} onChange={e => {
                        setKeyword(e.currentTarget.value)
                      }} placeholder="Keyowrd" />
                    </Form.Item>
                  </Col>

                  <Col
                    span={8}
                    style={{
                      textAlign: 'left',
                    }}
                  >
                    <Button onClick={onSearch}>검색</Button>
                  </Col>


                </Row>

              </Form>
            </Card>



            <Table loading={GetStockDataAllLoading}
              rowKey={'id'}
              // columns={colums}
              dataSource={Datas}
              bordered
              scroll={{ x: 1300, y: 500 }}
              pagination={false}
            >
              <Column
                title=""
                key="action"
                align="center"
                render={(text, record) => (
                  <Space size="middle">

                    <Tooltip title="후보 추가" color='gold' key='gold'>
                      <a style={{ color: 'blue' }} onClick={() => onCandidate(record)}>
                        {
                          record.candidate ? <HeartFilled /> : <HeartOutlined />
                        }
                      </a>
                    </Tooltip>

                    <Popconfirm
                      title="정말 지우시겠습니까?"
                      onConfirm={() => onDeleteRaw(record)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Tooltip title="영구 삭제" color='gold' key='gold'>
                        <a style={{ color: 'red' }}><DeleteOutlined /></a>
                      </Tooltip>

                    </Popconfirm>

                    <Tooltip title="코드 복사" color='gold' key='gold'>
                      <a style={{ color: 'gray' }} onClick={() => onCopy(record)}>
                        {
                          <CopyOutlined />
                        }
                      </a>

                    </Tooltip>

                  </Space>
                )}
              />
              <Column title="회사" dataIndex="compayName" key="compayName" render={(text, record) => (<a style={{ color: 'blue' }} onClick={() => onModal(record)}>{text}</a>)}></Column>
              <ColumnGroup title="투자정보">
                <Column title="상장주식 수 (천)" dataIndex="sharesNumber" key="sharesNumber"></Column>
                <Column title="시가총액 (억)" dataIndex="totalMarketCap" key="totalMarketCap"></Column>
                <Column title="per (%)" dataIndex="perRate" key="perRate"></Column>
                <Column title="pbr (%)" dataIndex="pbrRate" key="pbrRate"></Column>
                <Column title="psr (%)" dataIndex="psrRate" key="psrRate"></Column>
              </ColumnGroup>

              <ColumnGroup title="이익률">
                <Column title="영업이익률(%)" dataIndex="saleProfitRate" key="saleProfitRate"></Column>
                <Column title="순이익률(%)" dataIndex="salePureProfitRate" key="salePureProfitRate"></Column>
              </ColumnGroup>
              <ColumnGroup title="자산현황">
                <Column title="유보율(%)" dataIndex="cashRate" key="cashRate"></Column>
                <Column title="부채율(%)" dataIndex="deptRate" key="deptRate"></Column>

              </ColumnGroup>
              <Column title="타입" dataIndex="sutableType" key="sutableType" align="center" fixed="right" width={120}
                render={type => (
                  <Space size="large">
                    <Tag color={type === 'SUTABLE' ? 'blue' : 'red'}>{type}</Tag>
                  </Space>
                )}
              ></Column>

            </Table>

            <div style={{ marginTop: '1.2rem' }}></div>
            <div style={{ textAlign: 'center' }}>
              <Pagination defaultCurrent={1}
                showSizeChanger
                onShowSizeChange={onSizeChanger}
                showQuickJumper
                // hideOnSinglePage={true}
                current={MetaData?.currentPage}
                total={MetaData?.totalItems}
                onChange={changePage}
                pageSize={MetaData?.itemsPerPage ? MetaData?.itemsPerPage : 0}
              />

            </div>


            <Modal
              title={ModalData?.compayName}
              centered
              visible={Visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              width={1200}
            >
              <iframe src={ModalData?.compayFinanceDetailUrl} width='100%' height={500}></iframe>
            </Modal>

          </Space>)
    }







  </div >
}

export default StockPage;