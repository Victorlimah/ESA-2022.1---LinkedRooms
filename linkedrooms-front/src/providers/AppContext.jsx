import { useState, createContext } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);
  const [ newUser, setNewUser ] = useState(null);
  return (
    <AppContext.Provider value={{ user, setUser, newUser, setNewUser }}>
      {children}
    </AppContext.Provider>
  );
}

