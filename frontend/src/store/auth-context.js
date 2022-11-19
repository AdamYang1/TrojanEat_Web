import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token; //if token is empty i.e. if user is not logged in, this will return false, and will return true otherwise
  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  console.log(props.chilldren);
  return (
    <AuthContext.Provider value={contextValue}>
      {props.chilldren}
    </AuthContext.Provider>
  );
};
export default AuthContext;
