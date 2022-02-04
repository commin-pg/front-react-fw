import React from "react";
import { FaBlind } from "react-icons/fa";
function NotFoundPage() {
  return (
    <div>
      <div className="app">
        <FaBlind style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>404 Not Found Page..</span>
      </div>
    </div>
  );
}

export default NotFoundPage;
