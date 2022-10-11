import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    return <UserContext.Provider value={children}>{children}</UserContext.Provider>;
};
  
function useUser() {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
  
    return context;
}
  
export { useUser, UserProvider };