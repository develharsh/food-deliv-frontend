import React, { Fragment } from "react";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="mobileView">
        
      </div>
      <div className="tabView">
        <h1 style={{ color: "blue" }}>Harsh</h1>
      </div>
      <div className="LaptopView">
        <h1 style={{ color: "green" }}>Harsh</h1>
      </div>
    </Fragment>
  );
};

export default Home;
