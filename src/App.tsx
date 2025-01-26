import { useState, useMemo, useEffect } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { getTheme } from "./theme/theme";
import ThemeToggle from "./components/ThemeToggle";
import emailjs from "@emailjs/browser";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY!);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar>
        <ThemeToggle toggleTheme={toggleTheme} />
      </Navbar>
      <Container maxWidth="lg">
        <Home />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </Container>
    </ThemeProvider>
  );
}

export default App;
