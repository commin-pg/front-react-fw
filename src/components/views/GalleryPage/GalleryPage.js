import { Button, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { IMAGE_API_ACCESS_KEY, IMAGE_API_BASE_URL } from "../../Config";
import ImageGrid from "../../ImageGridComponent/ImageGrid";
import ImageSlider from "../../ImageSliderComponent/ImageSlider";
import TopImageComponent from "../../items/TopImageComponent/TopImageComponent";
import "./Sections/GalleryPage.css";



function GalleryPage(props) {
  const [Images, setImages] = useState([]);
  const [TempImages, setTempImages] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [MainImage, setMainImage] = useState(null);
  const [Lodding, setLodding] = useState(false);

  async function fetchImages(end_point) {
    setLodding(true);
    fetch(end_point)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCurrentPage(CurrentPage + 1);
        if (!MainImage) setMainImage(response[0].urls.regular);


        let tmps = response.map(img => {
          return img.urls.regular
        })
        setTempImages([...TempImages, ...tmps]);

        console.log(tmps)
        setImages([...Images, ...response]);
      })
      .finally(
        setTimeout(() => {
          setLodding(false);
        }, 1000)
      );
  }

  useEffect(() => {
    const end_point = `${IMAGE_API_BASE_URL}photos/random/?count=30&topics=dog&client_id=${IMAGE_API_ACCESS_KEY}&page=1`;
    fetchImages(end_point);
  }, []);

  function loadMore() {
    const end_point = `${IMAGE_API_BASE_URL}photos/random/?count=12&client_id=${IMAGE_API_ACCESS_KEY}&page=${CurrentPage}`;
    fetchImages(end_point);
  }

  return (
    <div>
      <div className="img-container">
        {TopImageComponent && (
          <TopImageComponent height="470px" backgroundImg={MainImage} />
        )}
      </div>
      <div>
          <ImageSlider
            images={TempImages}
          ></ImageSlider>

      </div>

      <div className="gallery-container">
        <div className="app-content-title" style={{ textAlign: "center" }}>
          Gallery Images
        </div>

        <div id="empty-box" style={{ marginBottom: "20px" }}>
          <Row gutter={[8, 8]} justify="start" align="top">
            {Images &&
              Images.map((image, index) => (
                <React.Fragment key={index}>
                  {
                    <ImageGrid
                      image={image.urls.thumb ? image.urls.regular : null}
                      id={index}
                      name={image.alt_description}
                    />
                  }
                </React.Fragment>
              ))}
          </Row>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
        >
          <Button onClick={loadMore} style={{ width: "100px", heght: "60px" }}>
            {Lodding === true ? <Spin /> : "Load More"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
