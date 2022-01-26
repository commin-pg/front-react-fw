import React from "react";
import { FaCode } from "react-icons/fa";
import "./Sections/LandingPage.css";
import TopImageComponent from "../../items/TopImageComponent/TopImageComponent";
function LandingPage() {
  return (
    <>
      <div className="img-container">
        <TopImageComponent
          height="680px"
          backgroundImg={"../.././image/image1.jpg"}
          title={<h1>yh workshop</h1>}
          content={
            <h2>
              unique handmade <br /> leather
            </h2>
          }
        />
      </div>
      <div className="landing-container-middle">
        <div className="landing-box-item">
          <div className="landing-item-content-box">
            <div className="app-content-title">공방소개</div>
            <div className="app-content-title sub">나만의 가방 만들기</div>
            <div className="app-content">
              <p>
                새딜 스티치의 손맛을 살려 한 땀 한 땀 만들어진 나만의 가방.{" "}
                <br />
                그 가방에 나의 이름을 새겨 넣는 순간의 희열을 느껴보세요.
                <br /> <br />
                어느 백화점에서나 살 수 있고 누구나 들고 다니는 명품 가방과
                소품에서 더 이상 매력을 느끼지 못한다면 핸드메이드 가방에
                도전해보세요 <br />
                형형색색의 가죽, 화려한 지퍼, 유기적인 나만의 바느질.
                <br />
                <br />
                서툰 내 손끝에서 완선된 아름다운 가방을 보노라면 만족감에 밤잠을
                설칠지 모르겠습니다. <br />
                <br />
                핸드메이드 가방의 매력을 널리 알리고 싶었습니다. 서로 의논하고
                가르친다는 생각보다는 서로 협동하여 각자의 개성 있는 소품을 만들
                수 있는 공간을 마련하고자 합니다.
                <br />
                <br />
                교통 편리한 강남의 중심 논현동에서 함께하실 여러분을 찾습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="landing-box-item"></div>

        <div className="landing-box-item">
          <div className="landing-item-content-box">
            <div className="landing-item-content-box sub">
              <div className="app-content-title">가죽공예</div>
              <div className="app-content-title sub">Classes</div>
              <div className="app-content">
                가죽공예 일일체험, 커플체험등 단기간에 가죽공예를 경험하고
                싶으신 분들부터, 오랜기간 함께 가죽공예를 배워나가며 공방을
                이용하고 싶으신 분들까지.
                <br></br>
                <br></br>
                다양한 수요를 위한 프로그램을 마련했습니다.
              </div>
            </div>
            <div className="landing-item-content-box sub">
              <div className="app-content-title sub">corporate</div>
              <div className="app-content">
                YH workshop은 다양한 사이즈의 기업 워크숍 및 출장강의를
                진행하고있습니다.
                <br />
                <br />
                자세한 내용은 문의 바랍니다.
              </div>
              <br></br>
              <div className="corporate-info">
                tel: +82-10-6837-0490
                <br />
                katalk: @yhworkshop
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <TopImageComponent
          height="480px"
          backgroundImg={"../.././image/back-01.jpg"}
          title=""
          content=""
        />
      </div>

      <div className="landing-container-bottom">
        <div className="landing-box-item">
          <div className="landing-item-content-box">
            <div className="landing-item-content-flex-box">
              <div>
                <div className="app-content-title sub">location</div>
                <div className="app-content">
                  서울시 강남구 강남대로 146길 28
                  <br />
                  논현아파트 상가 2층
                  <br />
                  (우)06043
                  <br />
                  <br />
                  서울시 강남구 강남대로 146길 28
                  <br />
                  논현아파트 상가 2층
                  <br />
                  (우)06043
                </div>
              </div>
              <div>
                <div className="app-content-title sub">contact</div>
                <div className="app-content">
                  info@yhworkshop.com
                  <br />
                  katalk: @yhworkshop
                  <br />
                  instagram: @yhleather
                  <br />
                  tel: 010-6837-0490
                  <br />
                </div>
              </div>
              <div>
                <div className="app-content-title sub">hours</div>
                <div className="app-content">
                  Mon - Fri, 11 am - 5:30 pm <br />
                  Sat - Sun, 2:30 pm - 5:30 pm <br />
                  <br />
                  일일체험, 단체수업 등의 이유로 변경 가능
                  <br />
                  자세한 일정은 문의 바랍니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-box-item">
          <div className="landing-item-content-box">
            <div className="landing-item-content-box sub">
              <div className="app-content-title sub">map</div>
              <div className="app-content">
                YH workshop은
                <br />
                강남구 논현동 22번지 논현아파트 2층에 위치하고 있습니다.
                <br />
                <br></br>
                신사역 1번출구 BK성형외과 골목에서 150m 직진하시면 논현아파트
                건물이 보입니다.
                <br></br>
              </div>
            </div>
            <div className="landing-item-content-box sub">
              <div className="app-content-map"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="empty-block"></div>
    </>
  );
}

export default LandingPage;
