import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

import AuthContext from "./store/auth-context";
import AuthForm from "./components/Auth/AuthForm";

function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  const ctx = useContext(AuthContext);
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
