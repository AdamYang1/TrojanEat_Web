import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

import AuthContext from "./store/auth-context";
import AuthForm from "./components/Auth/AuthForm";
import Prefernces from "./components/Preferences/preferences";
import PrefContext from "./store/pref-context";

function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  const ctx = useContext(AuthContext);
  const prefCtx = useContext(PrefContext);
  return (
    <div className="h-full">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={ctx.isLoggedIn ? <Dashboard /> : <Navigate to="/Auth" />}
          />
          <Route path="/Auth" element={<AuthForm />} />
          <Route
            path="/Preferences"
            element={ctx.isLoggedIn ? <Prefernces /> : <Navigate to="/Auth" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
