import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Profile,
  Overview,
  Projects,
  Stars,
  Repositories,
} from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path = "/:login" element = {<Profile />} />
        </Route>
        <Route path="/profile" element={<Profile />}>
          {/*Child Routes */}
          <Route index element={<Overview />} />
          <Route path = "overview" element = {<Overview />}/>
          <Route path="projects" element={<Projects />} />
          <Route path="stars" element={<Stars />} />
          <Route path="repositories" element={<Repositories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
