import {
  Box,
  Typography,
  Paper,
  Grid,
  LinearProgress,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 1-5
    icon?: string;
  }[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Material UI", level: 4 },
      { name: "HTML/CSS", level: 4 },
      { name: "HTMX", level: 4 },
      { name: "Tailwind", level: 4 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", level: 5 },
      { name: "FastAPI", level: 5 },
      { name: "Node.js", level: 4 },
      { name: "Django", level: 3 },
      { name: "Flask", level: 3 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "SQL", level: 4 },
      { name: "ClickHouse", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "PostgreSQL", level: 4 },
    ],
  },
];

const Skills = () => {
  return (
    <Box id="Skills" sx={{ minHeight: "100vh", pt: 10, pb: 10 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mb: 6,
          background: "linear-gradient(45deg, #FFC107 30%, #FFD54F 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Skills
      </Typography>

      <Grid container spacing={4}>
        {skills.map((skillCategory, index) => (
          <Grid item xs={12} md={4} key={skillCategory.category}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "4px",
                    height: "100%",
                    background:
                      "linear-gradient(45deg, #FFC107 30%, #FFD54F 90%)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {skillCategory.category}
                </Typography>
                <Stack spacing={3}>
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      <Box sx={{ mb: 1 }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 1,
                            fontWeight: 500,
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(skill.level / 5) * 100}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 3,
                              backgroundImage:
                                "linear-gradient(45deg, #FFC107 30%, #FFD54F 90%)",
                            },
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
