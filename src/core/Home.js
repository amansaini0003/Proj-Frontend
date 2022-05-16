import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

const Home = () => {
  console.log("API IS ...", API);
  return (
    <Base title="Home Page" description="Welcome to the T-Shirt Store">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">test button</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">test button</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">test button</button>
        </div>
      </div>
    </Base>
  );
};
export default Home;
