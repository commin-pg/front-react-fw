/* global kakao */
import React, { useEffect } from "react";
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    var container = document.getElementById("kakao-map");
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
  }, []);

  return <div id="kakao-map" style={{ height:'100%',width:'100%'}}></div>;
};

export default Map;
