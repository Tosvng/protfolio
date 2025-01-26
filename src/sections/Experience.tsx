import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import ExperienceTimeline from "../components/Timeline";
import { experiences } from "../data/experience";

const Experience = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="Experience"
      sx={{
        minHeight: "100vh",
        pt: { xs: 8, sm: 10 },
        pb: { xs: 8, sm: 10 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 4, sm: 6 },
            background: isLight
              ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
              : "linear-gradient(45deg, #FF9800 30%, #FFC107 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "2rem", sm: "2.5rem" },
          }}
        >
          Experience
        </Typography>
      </motion.div>

      <ExperienceTimeline
        experiences={experiences}
        isMobile={isMobile}
        isLight={isLight}
      />
    </Box>
  );
};

export default Experience;
