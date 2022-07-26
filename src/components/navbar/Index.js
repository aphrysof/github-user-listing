import React, { useContext } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/context";

const Index = () => {
  const {  handleSearch } = useContext(SearchContext);
  

  const handleChange = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };


  return (
    <nav>
      <div className = "logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form className="nav--searchInput" >
        <input type="text" name="search" onChange={handleChange} />
        {/* <button className="search--button">Search</button> */}
      </form>
    </nav>
  );
};

export default Index;
