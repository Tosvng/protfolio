import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GradeIcon from "@mui/icons-material/Grade";

interface Education {
  school: string;
  period: {
    from: string;
    to: string;
  };
  gpa: string;
  details?: string[];
}

const educationData: Education[] = [
  {
    school: "International College of Manitoba",
    period: {
      from: "Aug 2019",
      to: "Aug 2020",
    },
    gpa: "3.6/4.5",
  },
  {
    school: "University of Manitoba",
    period: {
      from: "Aug 2020",
      to: "April 2024",
    },
    gpa: "3.6/4.5",
    details: [
      "Relevant courses: Analysis of algorithm, Data structures and algorithms, Distributed Computing, Machine learning, Object-oriented Programming, Operating System, Software engineering",
      "Clubs: Devclub, Women In Computer Science (WICS)",
    ],
  },
];

const Education = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <Box id="Education" sx={{ minHeight: "100vh", pt: 10, pb: 10 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mb: 6,
          background: isLight
            ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
            : "linear-gradient(45deg, #FF9800 30%, #FFC107 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Education
      </Typography>

      <Grid container spacing={4}>
        {educationData.map((edu, index) => (
          <Grid item xs={12} key={edu.school}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
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
                    background: isLight
                      ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
                      : "linear-gradient(45deg, #FF9800 30%, #FFC107 90%)",
                  },
                }}
              >
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {edu.school}
                  </Typography>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ color: "text.secondary" }}
                  >
                    <Typography variant="subtitle1">
                      {edu.period.from} - {edu.period.to}
                    </Typography>
                    <Typography variant="subtitle1">GPA: {edu.gpa}</Typography>
                  </Stack>
                  {edu.details && (
                    <Box
                      component="ul"
                      sx={{
                        listStyle: "none",
                        pl: 0,
                        "& li": {
                          position: "relative",
                          pl: "1.5rem",
                          mb: 2,
                          "&::before": {
                            content: '"•"',
                            position: "absolute",
                            left: 0,
                            color: isLight ? "#7c4dff" : "#FF9800",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            lineHeight: 1.4,
                          },
                        },
                      }}
                    >
                      {edu.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + idx * 0.1,
                          }}
                        >
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ lineHeight: 1.7 }}
                          >
                            {detail}
                          </Typography>
                        </motion.li>
                      ))}
                    </Box>
                  )}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
