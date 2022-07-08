import React from "react";
import Navigation from "./Navigation";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <>
      <Navigation />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title} </h2>
          <p className="display">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>

      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>If you got any question feel free to reach out !</h4>
          <button className="btn btn-warning btn-lg">Contact Us</button>
        </div>
        {/* <div className="container">
          <span className="text-white">
            An Amazing <strong>MERN</strong> Bootcamp
          </span>
        </div> */}
      </footer>
    </>
  );
};
export default Base;
