import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function RouterButton(props) {


  const address = props.routeAddress?props.routeAddress:'/class'

  const styles = {
    height: props.height ? props.height : "50px",
    width: props.width ? props.width : "120px",
  };

  return (
    <div>
      <Link to={address}>
        <Button className="btn-router" style={styles}>
          {props.name}
        </Button>
      </Link>
    </div>
  );
}

export default RouterButton;
