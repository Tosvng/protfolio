import { useState, useMemo } from "react";
import { Box, Typography, Grid, Paper, Button, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import ProjectFilters from "../components/ProjectFilters";
import { useTheme } from "@mui/material/styles";
import { Technology } from "../types/project";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  // Get all unique technologies from all projects
  const allTechnologies = useMemo(
    () =>
      projects.reduce<Technology[]>(
        (acc, project) => [...acc, ...project.technologies],
        []
      ),
    []
  );

  const filteredProjects = useMemo(
    () =>
      projects
        .filter(
          (project) =>
            filter === "all" ||
            project.technologies.some((tech) => tech.name === filter)
        )
        .filter(
          (project) =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        ),
    [filter, searchQuery]
  );

  return (
    <Box id="Projects" sx={{ minHeight: "100vh", pt: 10, pb: 10 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mb: 6,
          background: isLight
            ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
            : "linear-gradient(45deg, #FFC107 30%, #FFD54F 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Projects
      </Typography>

      <ProjectFilters
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        technologies={allTechnologies}
      />

      <AnimatePresence mode="wait">
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          position: "relative",
                          borderRadius: 3,
                          overflow: "hidden",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                          "&::before": {
                            content: '""',
                            display: "block",
                            paddingTop: "56.25%",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <img
                            src={project.images[0].src}
                            alt={project.images[0].alt}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={3}>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={{
                            fontWeight: 600,
                            mb: 2,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "text.secondary",
                            mb: 3,
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Box>
                          {project.websiteUrl && (
                            <Button
                              variant="outlined"
                              color="primary"
                              href={project.websiteUrl}
                              target="_blank"
                              sx={{
                                mb: 3,
                                borderWidth: 2,
                                "&:hover": {
                                  borderWidth: 2,
                                  transform: "translateY(-2px)",
                                },
                              }}
                            >
                              View website
                            </Button>
                          )}
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                          >
                            {project.technologies.map((tech, index) => (
                              <Typography
                                key={index}
                                variant="body2"
                                sx={{
                                  px: 2,
                                  py: 1,
                                  borderRadius: 2,
                                  background: isLight
                                    ? "linear-gradient(45deg, rgba(124, 77, 255, 0.1) 30%, rgba(180, 124, 255, 0.1) 90%)"
                                    : "linear-gradient(45deg, rgba(255, 152, 0, 0.1) 30%, rgba(255, 193, 7, 0.1) 90%)",
                                  border: isLight
                                    ? "1px solid rgba(124, 77, 255, 0.2)"
                                    : "1px solid rgba(255, 152, 0, 0.2)",
                                }}
                              >
                                {tech.name}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
              p: 4,
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" color="text.secondary">
              No projects found matching your criteria
            </Typography>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default Projects;
