import React from "react";
import TopImageComponent from "../../items/TopImageComponent/TopImageComponent";
import "./Sections/ClassPage.css";
function ClassPage() {
  return (
    <div>
      <div className="img-container">
        <TopImageComponent
          height="400px"
          backgroundImg={"../.././image/back-01.jpg"}
          title=""
          content=""
        />
      </div>
      {/* 전체 컨테이너 */}
      <div className="class-middle-container">
        <div className="class-middle-box">
          {/* Info Section */}
          <div className="class-middle-box-item">
            <div className="app-content-title" style={{ textAlign: "center" }}>
              공방쉐어
            </div>
            <div className="app-content">
              가죽공예 일일체험, 커플체험등 단기간에 가죽공예를 경험하고 싶으신
              분들부터, 오랜기간 함께 가죽공예를 배워나가며 공방을 이용하고
              싶으신 분들까지.
              <br></br>
              <br />
              보유기구 목록
              <br />
              <ul>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
                <li>수성 본드기계</li>
              </ul>
              관심 있으신분들의 연락을 기다리겠습니다.
            </div>
          </div>
          <div className="class-middle-box-item">
            <div
              className="app-content-title sub"
              style={{ textAlign: "center" }}
            >
              Classes
            </div>
            <div className="app-content" style={{ textAlign: "center" }}>
              YH Workshop 에서는 원데이 , 단기 가방만들기, 정규수업을 진행하고
              있습니다.
            </div>
          </div>
        </div>
        <div className="class-middle-column-flex-box">
          <div className="class-middle-column-flex-item">
            {/* slide gallary - info */}
            <div style={{ width: "100%", height: "100%" }}>
              <div className="item-flex-box">
                <div className="item-flex-box-item">a</div>
                <div className="item-flex-box-item">
                  <div className="app-content-title sub">원데이클래스</div>
                  <div className="app-content">
                    저희 공방에서는 간단한 소품(팔찌, 카드지갑,여권지갑)에서부터
                    난이도 있는 반지갑, 숄더백까지 원데이수업을 진행합니다.<br/>
                    원데이 클래스는 예약제이며 미리 수업 날짜를 정해 문의
                    주시면, 수강인원과 작품의 난이도에 따라 가격이 결정됩니다. <br/><br/>
                    ※선결제로 이루어지며 수업 당일 환불은 불가능합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="class-middle-column-flex-item">
            {/* slide gallary - info */}
            <div style={{ width: "100%", height: "100%" }}>
              <div className="item-flex-box">
                <div className="item-flex-box-item">a</div>
                <div className="item-flex-box-item">b</div>
              </div>
            </div>
          </div>
          <div className="class-middle-column-flex-item">
            {/* slide gallary - info */}
            <div style={{ width: "100%", height: "100%" }}>
              <div className="item-flex-box">
                <div className="item-flex-box-item">a</div>
                <div className="item-flex-box-item">b</div>
              </div>
            </div>
          </div>
          <div className="class-middle-column-flex-item">
            {/* slide gallary - info */}
            <div style={{ width: "100%", height: "100%" }}>
              <div className="item-flex-box">
                <div className="item-flex-box-item">a</div>
                <div className="item-flex-box-item">
                  b<div>a</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassPage;
