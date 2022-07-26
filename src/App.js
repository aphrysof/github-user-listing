import React  from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile, Overview } from "./pages";
import { Navbar } from "./components";
import {SearchProvider} from './context/context'

function App() {
  
  return (
    <>
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:login" element={<Profile />}>
            {/*Child Routes */}
            <Route index element={<Overview />} />
          </Route>
        </Routes>
      </SearchProvider>
    </>
  );
}

export default App;
