import React from "react";
import "./TopImageComponent.css";

function TopImageComponent(props) {
  console.log(props);

  const styles = {
    ods: {
      background: 'URL("../.././image/image1.jpg") 50% 0 no-repeat fixed',
      height: props.height,
    },
  };

  return (
    <div className="top-img-box" style={styles.ods}>
      <div className="top-img-block"></div>
      <div className="top-img-title">{props.title}</div>
      <div className="top-img-content">
      {props.content}
      </div>
    </div>
  );
}

export default TopImageComponent;
