import React, { useState } from "react";

const PrefContext = React.createContext({
  userIsNew: false,
  changeState: (val) => {},
});
export const PrefContextProvider = (props) => {
  const [isNew, setUserStatus] = useState(null);
  const prefHandler = function (val) {
    setUserStatus(val);
  };
  const contextValue = {
    userIsNew: isNew,
    changeState: prefHandler,
  };

  return (
    <PrefContext.Provider value={contextValue}>
      {props.children}
    </PrefContext.Provider>
  );
};
export default PrefContext;
