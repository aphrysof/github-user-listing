import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const fetchUserDetails = async (login) => {
    const res = await fetch(` https://api.github.com/users/${login}/repo`, {
      headers: { "Content-Type": "application/vnd.github.v3+json" }
    });
    const data = await res.json();
    // console.log(data);
    return data;
  };

  const users = fetchUserDetails();
//   const [user, setUser] = useState("");

  const params = useParams();
//   const userId = params.id;

console.log (params);

  return <div></div>;
};

export default UserDetails;
