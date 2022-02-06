import React from "react";

function Hero() {
  const heroContent = {
    heroImage: "img/hero/back-03.jpg",
    heroMobileImage: "img-mobile",
    heroTitleName: "steve milner",
    heroDesignation: "web designer",
    heroDescriptions: `I'm a Tunisian based web designer & front‑end developer focused on
        crafting clean & user‑friendly experiences, I am passionate about
        building excellent software that improves the lives of those
        around me.`,
    heroBtn: "more about me",
  };
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
      </div>
    </>
  );
}

export default Hero;
