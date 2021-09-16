import React from "react";
import { useDarkMode } from "./components/styled-components/useDarkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled-components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/styled-components/Themes";
import ThemeToggler from "./components/styled-components/ThemeToggler";
import Main from "./components/Main";
import LogoHomeButton from "./components/common/LogoHomebutton";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <nav className="navbar flex flex-jc-sb flex-ai-c foreground-color">
          <LogoHomeButton />
          <div className="flex">
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          </div>
        </nav>
        <div className="App">
          <Main />
        </div>
      </>
    </ThemeProvider>
  );
};
export default App;
