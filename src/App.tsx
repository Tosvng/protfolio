import { useEffect } from "react";
import { initGA, logPageView } from "./utils/analytics";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "./theme/theme";
import Navbar from "./components/navbar/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { useThemeMode } from "./hooks/useThemeMode";

function App() {
  const { mode, toggleTheme } = useThemeMode();
  const theme = getTheme(mode);

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar>
          <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
        </Navbar>
        <Home />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </Box>
    </ThemeProvider>
  );
}

export default App;
