import { Col } from 'antd';
import React from 'react';
function ImageGrid(props) {
    // background: 'center / cover URL('+props.backgroundImg+') no-repeat fixed',
  return (
    <Col lg={4} md={8} xs={24} style={{height:'400px'}}>
        <img style={{width:'100%',height:'100%'}} src={props.image} alt={props.name}></img>
    </Col>
  );
}

export default ImageGrid;
