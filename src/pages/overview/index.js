import React, { useEffect, useState } from "react";
import "./overview.css";
import { useParams } from "react-router";
import {
  RepoIcon,
  StarIcon,
  RepoForkedIcon,
} from "@primer/octicons-react";

const Index = () => {
  const { id } = useParams();
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    const fetchUserByUsername = async () => {
      const res = await fetch(`https://api.github.com/users/${id}/repos`);
      const data = await res.json();
      console.log(data);
      setUserRepos(data);
    };
    fetchUserByUsername();
  }, [id]);

  return (
    <>
      {userRepos &&
        userRepos.map((userRepo) => (
          <div className="card--wrapper">
            <div className="card" key={userRepo.id}>
              <div className="repo--name">
                <RepoIcon />
                <span>{userRepo.name}</span>
              </div>
              <div className="repo--details">
                <p>{userRepo?.description}</p>
              </div>
              <div className="repo--footer">
                <p>{userRepo?.language}</p>
                <div className="star--repo">
                  <StarIcon />
                  <span>{userRepo?.stargazers_count}</span>
                </div>
                <div className="fork--repo">
                  <RepoForkedIcon />
                  <span>{userRepo?.forks_count}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Index;
