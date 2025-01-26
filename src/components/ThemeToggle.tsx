import { IconButton, useTheme, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface ThemeToggleProps {
  toggleTheme: () => void;
}

const ThemeToggle = ({ toggleTheme }: ThemeToggleProps) => {
  const theme = useTheme();

  return (
    <Tooltip
      title={`Switch to ${
        theme.palette.mode === "dark" ? "light" : "dark"
      } mode`}
    >
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
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
