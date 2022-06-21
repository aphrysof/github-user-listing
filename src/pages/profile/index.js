import React, { useEffect, useState } from "react";
import "./profile.css";
import {
  PeopleIcon,
  LocationIcon,
  OrganizationIcon,
} from "@primer/octicons-react";
import { useParams, Outlet } from "react-router-dom";
import { BottomNav } from "../../components";

const Index = () => {
  // useParams always returns an object
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserByUsername = async () => {
      const res = await fetch(`https://api.github.com/users/${id}`);
      const data = await res.json();
      setUser(data);
    };
    fetchUserByUsername();
  }, [id]);
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
