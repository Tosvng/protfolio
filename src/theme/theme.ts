import { createTheme, alpha, ThemeOptions } from "@mui/material";

const getThemeOptions = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#ffc107" : "#7c4dff",
      light: mode === "dark" ? "#ffd54f" : "#b47cff",
    },
    background: {
      default: mode === "dark" ? "#0a0a0a" : "#ffffff",
      paper: mode === "dark" ? "#121212" : "#ffffff",
    },
    text: {
      primary: mode === "dark" ? "#ffffff" : "#000000",
      secondary: alpha(mode === "dark" ? "#ffffff" : "#000000", 0.7),
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontSize: "2rem",
      lineHeight: 1.3,
      marginBottom: "2rem",
    },
    h5: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.5,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.975rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor:
            mode === "dark"
              ? "rgba(10, 10, 10, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
          borderBottom:
            mode === "dark"
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "8px 24px",
          fontSize: "1rem",
          fontWeight: 500,
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
        contained: {
          background:
            mode === "dark"
              ? "linear-gradient(45deg, #FF9800 30%, #FFC107 90%)"
              : "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)",
          color: "#ffffff",
          "&:hover": {
            background:
              mode === "dark"
                ? "linear-gradient(45deg, #F57C00 30%, #FFB300 90%)"
                : "linear-gradient(45deg, #6c3fff 30%, #a46cff 90%)",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background:
              mode === "dark"
                ? "linear-gradient(45deg, #FF9800 30%, #FFC107 90%)"
                : "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)",
            color: "#ffffff",
            "&:hover": {
              background:
                mode === "dark"
                  ? "linear-gradient(45deg, #F57C00 30%, #FFB300 90%)"
                  : "linear-gradient(45deg, #6c3fff 30%, #a46cff 90%)",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: 16,
          border:
            mode === "dark"
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(124, 77, 255, 0.1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: "2rem",
          paddingBottom: "2rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "& ul": {
            paddingLeft: "1.5rem",
            marginBottom: "1rem",
            "& li": {
              marginBottom: "0.75rem",
              position: "relative",
              "&::marker": {
                color: mode === "dark" ? "#FF9800" : "#7c4dff",
              },
            },
          },
        },
      },
    },
  },
});

export const getTheme = (mode: "light" | "dark") =>
  createTheme(getThemeOptions(mode));
