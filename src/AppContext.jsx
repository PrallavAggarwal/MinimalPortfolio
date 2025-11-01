import { createContext } from "react";
import { useState } from "react";



export const AppContext = createContext();

export default function AppContextProvider({ children }) {

  const [isActive, setActive] = useState(false);
  const [isLoading, setLoading] = useState(false)

  const value = { isActive, setActive, isLoading, setLoading }


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

