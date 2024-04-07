import { createContext, useContext, useEffect, useState } from "react";

// create a context
const GlobalContext = createContext();

// custom hook
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// get initial dark mode
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || prefersDarkMode;
};

// global context
const AppContext = (props) => {
  // toggle theme state
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

  // search value state
  const [searchTerm, setSearchTerm] = useState("cat");

  // toggle function
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("darkTheme", isDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <GlobalContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
