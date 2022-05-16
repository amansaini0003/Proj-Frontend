import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";

const Signin = () => {
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control" type="email" />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control" type="password" />
            </div>
            <div class="d-grid gap-2 mt-4">
              <button className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return (
    <Base title="Sign in Page" description="A Page for user to Signin !">
      {signInForm()}
    </Base>
  );
};

export default Signin;
