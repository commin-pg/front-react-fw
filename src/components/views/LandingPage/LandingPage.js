import React from "react";
import { FaCode } from "react-icons/fa";
import TopImageComponent from "../../items/TopImageComponent/TopImageComponent";
function LandingPage() {
  return (
    <>
      <div className="img-container">
        <TopImageComponent
          height="680px"
          backgroundImg={
            "https://icampus.dongguk.edu/data/file/dongguk4_1/thumb-3529417547_puYVS1Z5_c11efdfccfff9ffe841dc84de5b54a7303ece2e2_800x450.jpg"
          }
          title={<h1>yh workshop</h1>}
          content={<h2>unique handmade <br /> leather</h2>}
        />
      </div>
      <div className="body-container" style={{height:'700px'}}>
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Let's Start Coding!</span>
      </div>

      <div className="img-container">
        <TopImageComponent
          height="680px"
          backgroundImg={
            "https://icampus.dongguk.edu/data/file/dongguk4_1/thumb-3529417547_puYVS1Z5_c11efdfccfff9ffe841dc84de5b54a7303ece2e2_800x450.jpg"
          }
          title={<h1>gkgkgkgkgk</h1>}
          content={<h2>usdfdsfdsf <br /> leather</h2>}
        />
      </div>

      <div className="body-container" style={{height:'700px'}}>
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Let's Start Coding!</span>
      </div>
    </>
  );
}

export default LandingPage;
