import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./screens/MainPage/MainPage";
import { SignUp } from "./screens/SignUp/SignUp";
import { Login } from "./screens/Login/Login";
import { Verification } from "./screens/Verification/Verification";
import { Verify2} from "./screens/Verify2/Verify2";
import { Verify3} from "./screens/Verify3/Verify3";


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/verify2" element={<Verify2 />} />
        <Route path="/verify3" element={<Verify3 />} />
      </Routes>
    </Router>
  );
};
export default App;