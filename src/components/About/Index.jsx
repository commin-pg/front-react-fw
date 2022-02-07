import React from "react";
import Achievements from "./Achievements";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

function Index() {
  return (
    <section className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  Personal infos
                </h3>
              </div>
            </div>

            <div className="col-12 d-block d-sm-none">
              <img
                src="img/hero/back-03.jpg"
                className="img-fluid main-img-mobile"
                alt="about abatar"
              ></img>
            </div>

            <div className="col-12">
              <PersonalInfo />
            </div>

            <div className="col-12 mt-1">
              <a className="button" href="img/hero/back-03.jpg" download>
                <span className="button-text">Download CV</span>
                <span className="button-icon fa fa-download"></span>
              </a>
            </div>
            {/* Personal Info End */}
          </div>
          {/* Achivement Start */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achivement End */}
        </div>

        <hr className="separator" />

        {/* Skill Start */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wr-600">
              My Skills
            </h3>
          </div>
          <Skills />
          {/* Skill End */}
        </div>
        <hr className="separator" />
        {/* Experience Start */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wr-600">
              Experience
            </h3>
          </div>
          <div className="col-12 m-15px-tb" >
            <div className="resume-box ">
              <Experience />
            </div>
          </div>
          {/* Experience End */}
        </div>
      </div>
    </section>
  );
}

export default Index;
