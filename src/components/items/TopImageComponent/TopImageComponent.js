import React from "react";
import "./TopImageComponent.css";

function TopImageComponent(props) {
  console.log(props);

  const styles = {
    ods: {
      background: 'URL("../.././image/image1.jpg") 50% 0 no-repeat fixed',
      height: "400px",
    },
  };

  return (
    <div className="top-img-box" style={styles.ods}>
      <div className="top-img-block"></div>
      <div className="top-img-title">{props.title}</div>
      <div className="top-img-content">
        <h2>unique handmade <br />leather</h2>
      </div>
    </div>
  );
}

export default TopImageComponent;
