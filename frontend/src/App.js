import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import useToken from "./components/useToken";
import Signup from "./components/Signup/Signup";
import AuthContext, { AuthContextProvider } from "./store/auth-context";
import AuthForm from "./components/Auth/AuthForm";

function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  const ctx = useContext(AuthContext);
  // console.log(ctx.isLoggedIn);
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
