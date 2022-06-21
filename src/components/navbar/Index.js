import React,  {useState} from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Index = () => {

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
      setUserInput(e.target.value);
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
    .then((res) => 
      res.json()
    ).then ((data) => {
      console.log(data)
    })
  }
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form className="nav--searchInput" onSubmit = {handleSubmit}>
        <input type="text" name="search" onChange={handleChange} />
        <button className="search--button">Search</button>
      </form>
    </nav>
  );
};

export default Index;
