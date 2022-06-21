import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav--searchInput">
        <input type="search" name="search" />
        <button className="search--button">Search</button>
      </div>
    </nav>
  );
};

export default Index;
