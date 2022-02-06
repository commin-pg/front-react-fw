import { useEffect, useState } from "react";
import { Carousel } from "react-carousel-minimal";

function ImageSlider(props) {
  const [Data, setData] = useState([
    {
      image: undefined,
      caption: undefined,
    },
  ]);

  useEffect(() => {
    console.log("imageSlider", props.itemData)
  }, []);

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          {Data[0].image ? (<div>YES</div>):(<div>NO</div>)}
          {Data && (
            <Carousel
              data={Data}
              time={2000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={false}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
