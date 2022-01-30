import { Carousel } from 'antd';
import React from 'react';
class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      imageCurrentNo: 0,
    };
  }

  render() {
    const { images } = this.props;
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
       
        <div></div>
);
  }
}

export default ImageSlider;