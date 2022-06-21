import React, { useEffect, useState } from "react";
import "./repositories.css";
import { useParams } from "react-router";

const Index = () => {
  const { id } = useParams();
  const [usersRepo, setUsersRepo] = useState([]);

  useEffect(() => {
    const fetchUserByUsername = async () => {
      const res = await fetch(`https://api.github.com/users/${id}/repos`);
      const data = await res.json();
      console.log(data);
      setUsersRepo(data);
    };
    fetchUserByUsername();
  }, [id]);

  return (
  <>
  {usersRepo && usersRepo.map((userRepo) => (
      <div className="card--wrapper">
      <div className="card" key = {userRepo.id}>
        <h2>{userRepo?.name}Repositories</h2>

        <div>
          <h3>{userRepo.visibility}</h3>
        </div>
      </div> 
    </div>
  ))}
  </>
 
  );
};

export default Index;
