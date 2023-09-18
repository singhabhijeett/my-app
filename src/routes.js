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
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function checkLogin() {
  //     const token = await localStorage.getItem("token");
  //     console.log(token);
  //     if (token) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //     setLoading(false);
  //   }
  //   checkLogin();
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<MainApp />} />
      </Routes>
    </Router>
  );
}
