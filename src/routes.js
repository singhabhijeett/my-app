import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

import GlobalStyles from "./styles/globalStyles";
import Main from "./pages/Main";

const MainApp = () => {
  return (
    <>
      <GlobalStyles />
      <Main />
    </>
  );
};

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<MainApp />} />
      </Routes>
    </Router>
  );
}
