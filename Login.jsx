import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/#" id="contactus">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="login">
          <div className="logo">
            <img
              src="/assets/logo_gms_h_ph_f.png"
              alt="logo"
              id="logo"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="row" id="sign">
            <h5 className="fw-bold pt-2">Sign in</h5>
            <p>Sign in using your GMS account</p>
          </div>

          <form action="">
            <fieldset>
              <div className="input mb-3 mt-3" style={{ display: "flex", justifyContent: "center" }}>
                <input type="text" placeholder="Username" required />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input type="password" placeholder="Password" required />
              </div>

              <button className="btn mt-5" style={{ color: "white", align: "center" }}>
                Proceed
              </button>
              <div className="row">
                <p>
                  Don't have an account? <a href="/#">Register</a>
                </p>
              </div>
              
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
