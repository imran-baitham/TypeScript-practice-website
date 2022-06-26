import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="form">
        <form action="" className="form__content">
          <div className="form__box">
            <input
              type="text"
              className="form__input"
              placeholder="Enter Name"
            />
            <label className="form__label">ENTER NAME</label>
            <div className="form__shadow"></div>
          </div>
          <div className="form__box">
            <input
              type="email"
              className="form__input"
              placeholder="Enter Email"
            />
            <label className="form__label">ENTER EMAIL</label>
            <div className="form__shadow"></div>
          </div>

          <div className="form__button">
            <Link to={"/Home"}>
              <input type="Submit" className="form__submit" value="Login" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
