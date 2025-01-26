import {
  Box,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  InputAdornment,
  Stack,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Technology } from "../types/project";

interface ProjectFiltersProps {
  filter: string;
  setFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  technologies: Technology[];
}

const ProjectFilters = ({
  filter,
  setFilter,
  searchQuery,
  setSearchQuery,
  technologies,
}: ProjectFiltersProps) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const uniqueTechnologies = Array.from(
    new Set(technologies.map((tech) => tech.name))
  );

  return (
    <Stack spacing={3} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search projects..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(10px)",
          },
        }}
      />

      <Box
        sx={{
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            height: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(255, 255, 255, 0.05)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "primary.main",
            borderRadius: "3px",
          },
        }}
      >
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(_, newFilter) => setFilter(newFilter || "all")}
          aria-label="project filter"
          sx={{ minWidth: "fit-content" }}
        >
          <ToggleButton
            value="all"
            sx={{
              "&.Mui-selected": {
                background: isLight
                  ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
                  : "linear-gradient(45deg, #FFC107 30%, #FFD54F 90%)",
                color: "#ffffff",
              },
            }}
          >
            All
          </ToggleButton>
          {uniqueTechnologies.map((tech) => (
            <ToggleButton
              key={tech}
              value={tech}
              sx={{
                "&.Mui-selected": {
                  background: isLight
                    ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
                    : "linear-gradient(45deg, #FFC107 30%, #FFD54F 90%)",
                  color: "#ffffff",
                },
              }}
            >
              {tech}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Stack>
  );
};

export default ProjectFilters;
