import React from "react";
import { Link } from "react-router-dom";

function Preview() {
  const previewDemo = [
    {
      img: "back-01",
      title: "Dark Demo (Professional Portfolio)",
      routerPath: "/home",
      delayAnimation: "50",
    },
    {
      img: "back-02",
      title: "Light Demo (Classic Portfolio)",
      routerPath: "/home-light",
      delayAnimation: "",
    },
  ];
  return <div>
      <section className="banner text-center">
        <div className="content">
          <h1>Commin</h1>
          <h2>My Personal Portfolio React Template</h2>
        </div>
      </section>


      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link to={val.routerPath} target="_blank" rel="noreferrer">
                      <img
                        src={`img/intro/${val.img}.jpg`}
                        alt="demo"
                        className="img-responsive screenshot"
                      />
                    </Link>
                  </div>
                  <h2>{val.title}</h2>
                  <div className="anchor">
                    <h6>
                      <Link
                        className="btn"
                        to={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        view demo
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}

      <footer>
          <div className="go_purchase">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                  아아아아아아아아아아
              </h6>
              <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                <span className="theme-color">React</span> &amp;
                <span className="theme-color"> Bootstrap 5</span><br/>
                Based Portfolio Template.
              </h3>

          </div>
      <div className="text-center footer_copyright">
            <h6>Commin - My Personal Portfolio React Template</h6>
            
      </div>
      </footer>

      


  </div>;
}

export default Preview;
