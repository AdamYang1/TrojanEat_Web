import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

import AuthContext from "./store/auth-context";
import AuthForm from "./components/Auth/AuthForm";
import Prefernces from "./components/Preferences/preferences";
import Splash from "./components/Splash/Splash";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div className="h-screen dark:bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            // element={ctx.isLoggedIn ? <Dashboard /> : <Navigate to="/Auth" />}
              element={<Splash/>}
          />
          <Route
              exact
              path="/Dashboard"
              // element={ctx.isLoggedIn ? <Dashboard /> : <Navigate to="/Auth" />}
              element={<Dashboard/>}
          />

          <Route exact path="/Auth" element={<AuthForm />} />
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
