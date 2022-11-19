import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import useToken from "./components/useToken";
import Signup from "./components/Signup/Signup";
import { AuthContextProvider } from "./store/auth-context";
import AuthForm from "./components/Auth/AuthForm";
import AuthPage from "./components/Auth/AuthPage";

function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="h-full">
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/Auth" element={<AuthPage />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
