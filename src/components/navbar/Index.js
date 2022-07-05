import React, { useContext } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/context";

const Index = () => {
  const {  handleSearch } = useContext(SearchContext);

  // const handleSearch = (value) => {
  //   if (value && value.length > 2) {
  //     axios
  //       .get(`https://api.github.com/search/users?q=${value}`)
  //       .then((res) => {
  //         setSearchInputs(res.data.items);
  //       });
  //   } else {
  //     setSearchInputs([]);
  //   }
  // };
  

  const handleChange = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { search } = e.target.elements;
  //   handleSearch(search.value.toLowerCase());
  // };

  return (
    <nav>
      <div>
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
