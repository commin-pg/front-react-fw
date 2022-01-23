import React from "react";
import "./TopImageComponent.css";

function TopImageComponent(props) {
  console.log(props);

  return (
    <section
      className="top-img-section"
    >
      <div className="top-img-box">
        <div
          className="top-img"
          style={{
           
            backgroundImage: "url(" + props.backgroundImg + ")",
          }}
        ></div>
      </div>
      <div className="top-img-text-box">
        <div className="top-img-title" style={{ color: "black" }}>
          마마마마
        </div>
        <div className="top-img-content" style={{ color: "white" }}>
          마마마마
        </div>
      </div>
    </section>
  );
}

export default TopImageComponent;
