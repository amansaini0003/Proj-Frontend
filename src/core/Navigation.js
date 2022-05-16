import React from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Navigation = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-items">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-items">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      <li className="nav-items">
        <Link
          style={currentTab(history, "/user/dashborad")}
          className="nav-link"
          to="/user/dashboard"
        >
          DashBoard
        </Link>
      </li>
      <li className="nav-items">
        <Link
          style={currentTab(history, "/admin/dashborad")}
          className="nav-link"
          to="/admin/dashboard"
        >
          A. DashBoard
        </Link>
      </li>
      <li className="nav-items">
        <Link
          style={currentTab(history, "/signup")}
          className="nav-link"
          to="/signup"
        >
          SignUp
        </Link>
      </li>
      <li className="nav-items">
        <Link
          style={currentTab(history, "/signin")}
          className="nav-link"
          to="/signin"
        >
          SignIn
        </Link>
      </li>
      <li className="nav-items">
        <Link
          style={currentTab(history, "/signout")}
          className="nav-link"
          to="/signout"
        >
          SignOut
        </Link>
      </li>
    </ul>
  </div>
);
export default withRouter(Navigation);