import React from 'react'
import './style.css'
import {
  BookIcon,
 
} from "@primer/octicons-react";
import { NavLink} from "react-router-dom";

const Index = () => {
  return (
    <section>
      <div className="bottom--nav">
        <ul>
          <NavLink to="overview">
            <li>
              <BookIcon />
              Overview
            </li>
          </NavLink>
        </ul>
      </div>
    
    </section>
  );
}

export default Index