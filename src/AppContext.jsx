import { createContext } from "react";
import { useState } from "react";



export const AppContext = createContext();

export default function AppContextProvider({ children }) {

  const [isActive, setActive] = useState(false);

  const value = { isActive, setActive }


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

