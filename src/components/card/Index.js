import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./card.css";

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
  return (
    <>
      {userDetails &&
        userDetails.map((userDetail) => (
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
        ))}
    </>
  );
};

export default Index;
