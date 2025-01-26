import { IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface ThemeToggleProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeToggle = ({ mode, toggleTheme }: ThemeToggleProps) => {
  return (
    <Tooltip title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}>
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        sx={{
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "rotate(180deg)",
          },
        }}
      >
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
