import Modal from "react-modal";
import React, { useState } from "react";
import ModalOneContent from "./modal/ModalOneContent";

function Wisesaying() {
  Modal.setAppElement("#root");

  const [oneIsOpen, setoneIsOpen] = useState(false);

  function toggleModalOne() {
    setoneIsOpen(!oneIsOpen);
  }

  return (
    <>
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalOne}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/wisesaying/me-01.jpg"
                className="img-fluid"
                alt="Me"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>인생은 어떻게 살아야 하는가</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>인생은 말이야 잘 살아야지.</p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        <Modal
          isOpen={oneIsOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalOneContent />
              
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Wisesaying;
