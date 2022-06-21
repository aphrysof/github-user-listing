import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./home.css";
import ReactPaginate from "react-paginate";

const Index = () => {
  //setting state for the user
  const [userDetails, setUserDetails] = useState([]);

  //fetching user details from the api
  const fetchUserDetails = async () => {
    const res = await fetch(`https://api.github.com/users`);
    const data = await res.json();
    console.log(data);
    setUserDetails(data);
  };

  //useFffect to only render the call one

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(0);

  //number of users we want per page

  const usersPerPage = 5;

  //create a variable that keeps track of the pages visited

  const pageVisited = pageNumber * usersPerPage;

  //users to displayperpage

  const displayUsers = userDetails
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((userDetail) => (
      <div className="card--container" key={userDetail.id}>
        <div
          className="card--details"
          onClick={() => navigate(`/profile/${userDetail.id}`)}
        >
          <div className="avatar--section">
            <div className="user--image">
              <img src={userDetail.avatar_url} alt="userimage" />
            </div>
            <div className="user--details">
              <h5>
                {userDetail.login.charAt(0).toUpperCase() +
                  userDetail.login.slice(1)}
              </h5>
              <p>@{userDetail.login}</p>
            </div>
          </div>
          <div className="user--bio">
            <p>{userDetail.bio}</p>
          </div>
        </div>
      </div>
    ));
  //pageCount variable  taking into account the number of users per page
  //ceil is used to round up if the length of the array is an odd number
  const pageCount = Math.ceil(userDetails.length / usersPerPage);
  //changePage function
  //reactpaginate has a selected object which represent the number of the page
  //we want to move to.. so we are gonna destructure it
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <>
        {displayUsers}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previosBttn"}
          nextLinkClassName={"nextBttn"}
          activeClassName={"paginationActive"}
        />
      </>
    </div>
  );
};

export default Index;
