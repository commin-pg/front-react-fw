import React from "react";

function Experience() {
  const experiencesContents = [
    {
      year: "2021 - 현재",
      position: "Web Developer",
      companyName: "Danal Entertainments",
      detail: "Back-End Developer And Front-End Developer",
    },
    {
      year: "2019 - 2021",
      position: "Web Developer",
      companyName: "Eduvation",
      detail: "Back-End Developer And Front-End Developer",
    },
    {
      year: "2017 - 2019",
      position: "System Engeneer",
      companyName: "Modernwave",
      detail: "PBX Middleware System Developer",
    },
    {
      year: "2019 - 2021",
      position: "Web Developer",
      companyName: "Eduvation",
      detail: "Back-End Developer And Front-End Developer",
    },
    {
      year: "2019 - 2021",
      position: "Web Developer",
      companyName: "Eduvation",
      detail: "Back-End Developer And Front-End Developer",
    },

  ];
  return (
    <>
      <ul className="about-list">
        {experiencesContents.map((content, key) => (
          <li key={key}>
            <div className="icon">
              <i className="fa fa-briefcase"></i>
            </div>
            <span className="time open-sans-font text-uppercase">
              {content.year}
            </span>
            <h5 className="poppins-font text-uppercase">
              {content.position}
              <span className="place open-sans-font">{content.companyName}</span>
            </h5>
            <p className="open-sans-font">{content.detail}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Experience;
