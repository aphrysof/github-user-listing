import React, {useEffect, useState} from "react";
import "./profile.css";
import {
  BookIcon,
  RepoIcon,
  TableIcon,
  StarIcon,
} from "@primer/octicons-react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const Index = () => {  

   const fetchUserDetails = async () => {
    const res = await fetch(" https://api.github.com/users", {
      headers: { "Content-Type": "application/vnd.github.v3+json" },
    });
    const data = await res.json();
    console.log(data);
  }

  const users = fetchUserDetails()
  const [user, setUser] = useState ("");

  const params = useParams(users);
 

  useEffect (() => {
     const userId = params.login;
     setUser(userId)
    
  }, [params])
  return (
    <section>
      <div className="bottom--nav">
        <ul>
          <NavLink to = "overview">
            <li>
              <BookIcon />
              Overview
            </li>
          </NavLink>
          <NavLink to = "repositories">
            <li>
              <RepoIcon />
              Repositories
            </li>
          </NavLink>
          <NavLink to = "projects">
            <li>
              <TableIcon />
              Projects
            </li>
          </NavLink>
          <NavLink to = "stars">
            <li>
              <StarIcon />
              Stars
            </li>
          </NavLink>
        </ul>
      </div>
      <Outlet />
    </section>

  );
};

export default Index;
