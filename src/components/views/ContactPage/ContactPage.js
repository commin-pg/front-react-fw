import { MailOutlined } from "@ant-design/icons/lib/icons";
import { Button, Form, Input, Menu } from "antd";
import React from "react";
import TopImageComponent from "../../items/TopImageComponent/TopImageComponent";
import "./Sections/ContactPage.css";



function ContactPage() {


  const onFinish= (values)=> {
    console.log(values);
    alert(values)
  }
  const onFinishFail = (err)=>{
    console.log(err)
  }
  

  return (
    <div>

      <div className="img-container">
        <TopImageComponent
          height="380px"
          backgroundImg={"../.././image/back-01.jpg"}
          title=""
          content=""
        />
      </div>

      <div className="contact-container">
        <div className="contact-box-flex">
          <div className="contact-flex-item">
            <div className="app-content-title">문의하기</div>
            <div className="app-content">
              문의하상을 남겨주시면 이른 시일내에 연락드리겠습니다. <br />
              전화 또는 카카오톡 문의시 더욱 빠르게 답변 받으실 수 있습니다.
            </div>
            <div className="app-content">
              <Form name="control-hooks"
               onFinish={onFinish}
               onFinishFail={onFinishFail}
               autoComplete="off"
               initialValues={ {remember:true} }>
                <Form.Item
                  name="name"
                  label="이름 *"
                  rules={[{ required: true ,message:'이름을 입력 해 주세요'}]}
                >
                  <Input placeholder="예) 홍길동"/>
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email *"
                  rules={[{ required: true }]}
                >
                  <Input type="email" placeholder="예) abc@gmail.com"/>
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="연락처"
                  rules={[{ required: false }]}
                >
                  <Input placeholder="###-####-####"/>
                </Form.Item>
                <Form.Item
                  name="title"
                  label="제목 *"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="content"
                  label="문의사항 *"
                  rules={[{ required: true }]}
                >
                  <Input.TextArea  rows={10}/>
                </Form.Item>
                <Form.Item>
                  <Button type="default" htmlType="submit" style={{width:'120px',height:'50px'}}>
                    보내기
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        
          <div className="contact-flex-item">
            <div className="app-content-title">연락처</div>
            <div className="app-content">
              서울시 강남구 강남대로 146길 28 <br/>
              논현아파트 상가 1층<br/>
              (우)06043<br/>
              <br/>
              28 Gangnam-daero 146-gil,<br/>
              Unit 110<br/>
              Gangnam-gu, Seoul<br/>
              South Korea 06043<br/>
              <br/>

              info@yhworkshop.com<br/>
              katalk: @yhworkshop<br/>
              instagram: @yhleather<br/>
              tel: 010-6888-0000<br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
