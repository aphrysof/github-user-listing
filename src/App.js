import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile, Overview } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:login" element={<Profile />}>
          {/*Child Routes */}
          <Route index element={<Overview />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
