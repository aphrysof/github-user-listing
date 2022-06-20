import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import user from "../../assets/user1.jpg";
import "./card.css";

const Index = () => {
  //setting state for the user
  const [userDetails, setUserDetails] = useState([]);

  //fetching user details from the api
  const fetchUserDetails = async (id) => {
    const res = await fetch(" https://api.github.com/users", {
      headers: { "Content-Type": "application/vnd.github.v3+json" },
    });
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
          <div className="card--container">
            <div className="card--details" onClick={() => navigate("profile")}>
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
                  <p>followers: {userDetail?.followers_url.length}</p>
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
