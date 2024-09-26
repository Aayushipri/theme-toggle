import React, { createContext, useState } from "react";

//Create the context object
const ThemeContext = createContext();

//Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  //Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
