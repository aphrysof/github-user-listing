import React, { useEffect, useState } from "react";
import "./profile.css";
import {
  PeopleIcon,
  LocationIcon,
  OrganizationIcon,
} from "@primer/octicons-react";
import { useParams, Outlet } from "react-router-dom";
import { BottomNav } from "../../components";
import axios from "axios";

const Index = () => {
  // useParams always returns an object
  const { login } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}`).then((res) => {
      setUser(res.data);
    });
  }, [login]);

  // useEffect(() => {
  //   const fetchUserByUsername = async () => {
  //     const res = await fetch(`https://api.github.com/users/${username}`);
  //     const data = await res.json();
  //     setUser(data);
  //   };
  //   fetchUserByUsername();
  // }, [username]);
  return (
    <section>
      <BottomNav />
      <div className="wrapper">
        <div className="sidebar--wrapper">
          <div className="avatar--image">
            <img src={user?.avatar_url} alt=" avatar" />
          </div>
          <div className="user--section">
            <div className="userdetails">
              <p>{user?.name}</p>
              <p>{user?.login}</p>
            </div>
            <div className="people--div">
              <div className="user--followers">
                <PeopleIcon />
                <span>{user?.followers} followers</span>
              </div>
              <div className="user--follower">
                . <PeopleIcon />
                <span>{user?.following} following</span>
              </div>
            </div>
            <div className="bottom--section">
              <div className="organization">
                <OrganizationIcon />
                <span>{user?.company}</span>
              </div>
              <div className="location">
                <LocationIcon />
                <span>{user?.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content--wrapper">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Index;
