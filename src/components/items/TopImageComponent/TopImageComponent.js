import React from "react";
import "./TopImageComponent.css";

function TopImageComponent(props) {
  console.log(props);

  const styles = {
    ods: {
      background: 'center / cover URL('+props.backgroundImg+') no-repeat fixed',
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
