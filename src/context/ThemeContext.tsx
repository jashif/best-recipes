import React, {
    createContext,
    useContext,
    useState,
    ReactElement,
  } from "react";

  type ThemeProviderType = {
    theme: string;
    setTheme?: (theme: string) => void;
  };
  const ThemeContext= createContext<ThemeProviderType>({ theme: "light" }); 
  const useTheme = () =>
    useContext<ThemeProviderType>(ThemeContext);

  const ThemeProvider = ({ children }: { children: ReactElement }) => {
    const [theme, setTheme] = useState<string>("light");

    return (
      <ThemeContext.Provider value={{ theme,setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  export { ThemeProvider, useTheme };