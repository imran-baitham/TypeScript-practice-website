import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <nav
      style={{
        background: "rgba(0,0,0,0.8)",
        padding: "12px 30px",
        textDecoration: "none",
        borderBottom: "4px solid #e80a89",
        // #f05a28,#e80a89
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{}}>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "#f05a28",
              fontSize: "30px",
              fontFamily: "sans-serif",
            }}
          >
            Logo
          </Link>
        </div>
        <div>
          <button
            style={{
              padding: "10px 30px",
              outline: "none",
              border: "2px solid Black",
              background: "#e80a89",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
          <Link to={"/"}>
            <button
              style={{
                padding: "10px 20px",
                outline: "none",
                border: "2px solid Black",
                background: "#e80a89",
                cursor: "pointer",
              }}
            >
              Signup
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
