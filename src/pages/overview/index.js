import React, { useEffect, useState } from "react";
import "./overview.css";
import { useParams } from "react-router";
import { RepoIcon, StarIcon, RepoForkedIcon } from "@primer/octicons-react";

const Index = () => {
  const { login } = useParams();
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    const fetchUserByUsername = async () => {
      const res = await fetch(`https://api.github.com/users/${login}/repos`);
      const data = await res.json();
      console.log(data);
      setUserRepos(data);
    };
    fetchUserByUsername();
  }, [login]);

  return (
    <>
      {userRepos &&
        userRepos.map((userRepo) => (
          <div className="card--wrapper" key={userRepo.id}>
            <div className="card">
              <div className="repo--name">
                <RepoIcon />
                <span>{userRepo.name}</span>
              </div>
              <div className="repo--details">
                <a href={userRepo.html_url}>{userRepo?.description}</a>
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
