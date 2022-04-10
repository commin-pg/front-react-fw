import { AppstoreAddOutlined, DeleteOutlined } from "@ant-design/icons";
import { Col, Input, Layout, Modal, Pagination, Popconfirm, Row, Select, Space, Table, Tag, Form, Button, message, PageHeader } from "antd";
import { useFrameState } from "antd/lib/form/util";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import React, { useState } from "react";
import { useEffect } from "react";
import { Last } from "react-bootstrap/esm/PageItem";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveMenu } from "_actions/menu_actions";
import { _getStockDataAll, _getStockLastDateKey } from "_axios/finance";
import LoadingButton from "../@gull/components/buttons/LoadingButton";
import { SutableSelectItem } from "./section/SelectItem";
import './StockPage.css'

const { Option } = Select;

const { Header } = Layout;

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
  // cashRate: "2708.44"
  // compayFinanceDetailUrl: "https://finance.naver.com/item/main.naver?code=078930"
  // compayName: "GS"
  // currentFinancePrice: "43150"
  // currentQuarterSales: (5) [36529, 42846, 44405, 55140, 60010]
  // dateKey: "2022-04-07"
  // deptRate: "119.61"
  // facePrice: "5000"
  // financeType: "KOSPI"
  // id: 986
  // pbrRate: "0.4"
  // perRate: "2.82"
  // psrRate: "0.19808696597348827"
  // rank: 86
  // regDate: "2022-04-07T14:55:27.824Z"
  // saleProfitRate: "13.05"
  // salePureProfitRate: "7.98"
  // sharesNumber: "92915"
  // sutableType: "SHARE_LESS"
  // totalMarketCap: "40093"
  // tradeAmount: "369885"
  // yearSales: (3) [177861, 154442, 202401]

  const dispatch = useDispatch();


  useEffect(() => {
    console.log("Stock!", props)
    _getStockLastDateKey().then(response => {
      console.log(response?.data?.dateKey)
      setLastDateKey(response?.data?.dateKey)
    }).catch(e => alert(e))
    initData();

  }, [])


  const initData = async (limit = 20, page = 1, sutableType = null, keyword = null) => {
    setGetStockDataAllLoading(true);
    const result = await _getStockDataAll({ limit, page, sutableType, keyword }).then(response => {
      console.log(response)
      if (response?.data) {
        const customData = response.data.data.map(d => {
          d.psrRate = Math.ceil(d.psrRate * 100) / 100
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
      alert(error);
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
    message.loading({ content: 'searching..', key: 'search', duration: 1 })
    initData(Limit, CurrentPage, SearchSutableType, Keyword)
    setTimeout(() => {
      message.success({ content: 'complete', key: 'search', duration: 2 })
    }, 1000)

  }

  const onCopyRaw = (record) => {
    console.log(record)
  }
  const onDeleteRaw = (record) => {
    console.log(record)
  }

  const onModal = (record) => {
    console.log(record)
    setVisible(true)
    setModalData(record)
  }

  const menus = useSelector(state => state.menu.menus);

  return <div>
    {/* <LoadingButton
      variant="primary"
      loading={GetStockDataAllLoading}
      spinnerSize="small"
      className="btn-submit"
      onClick={initData}
    >
      전송
    </LoadingButton> */}



    <div>
      <PageHeader
        className="site-page-header"
        title="주식 리스트"
        subTitle={LastDateKey}
      />

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

    </div>

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
            <a style={{ color: 'blue' }} onClick={() => onCopyRaw(record)}><AppstoreAddOutlined /></a>
            <Popconfirm
              title="정말 지우시겠습니까?"
              onConfirm={() => onDeleteRaw(record)}
              okText="Yes"
              cancelText="No"
            >
              <a style={{ color: 'red' }}><DeleteOutlined /></a>
            </Popconfirm>
          </Space>
        )}
      />
      <Column title="Index" dataIndex="id" key="id"></Column>
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

  </div >
}

export default StockPage;