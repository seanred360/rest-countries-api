import React from "react";
import RestCountriesApp from "./components/RestCountriesApp";
import { useDarkMode } from "./components/styled-components/useDarkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled-components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/styled-components/Themes";
import ThemeToggler from "./components/styled-components/ThemeToggler";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <nav className="navbar flex flex-jc-sb flex-ai-c foreground-color">
          <span className="title">Where in the world?</span>
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        </nav>
        {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
        <div className="App">
          <RestCountriesApp />
        </div>
      </>
    </ThemeProvider>
  );
};
export default App;
