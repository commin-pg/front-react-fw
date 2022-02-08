import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Index from "../../components/About/Index";
import Address from "../../components/Address";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero/Hero";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  { icon: "fa-comments", menuName: "WiseSaying" },
];

const HomeDark = () => {
  return (
    <div className="yellow">
      <div className="demo-sticker">
        <a href="/home-light">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
        </a>
      </div>
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              <Index />
            </div>
          </TabPanel>

          {/* Portfolio Content Start */}
          <TabPanel className="portfolio">Portfolio</TabPanel>

          {/* Contact Content Start */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>


            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
               <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Contact Me!
                  </h3>
                  <p className="open-sans-font mb-4">
                    연락 연락 연락~
                  </p>
                  <Address />
                  {/* End Address */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
          </TabPanel>


        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
