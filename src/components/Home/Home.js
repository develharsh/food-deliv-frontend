import React, { Fragment } from "react";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="mobileView">
        Harsh Mobile
      </div>
      <div className="tabView">
        <h1 style={{ color: "blue" }}>Harsh Tab</h1>
      </div>
      <div className="LaptopView">
        <h1 style={{ color: "green" }}>Harsh Lapi</h1>
      </div>
    </Fragment>
  );
};

export default Home;
