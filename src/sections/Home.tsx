import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  Stack,
  Container,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import ResumeButton from "../components/ResumeButton";
import ContactForm from "../components/ContactForm";
import CodeIcon from "@mui/icons-material/Code";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Home = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <Box
      id="Home"
      sx={{
        minHeight: "100vh",
        pt: { xs: 12, md: 15 },
        pb: 10,
        position: "relative",
        background: isLight ? "#ffffff" : "transparent",
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: isLight
            ? "radial-gradient(circle at 50% 50%, rgba(124, 77, 255, 0.08) 0%, rgba(255, 255, 255, 0) 50%)"
            : "radial-gradient(circle at 50% 50%, rgba(255, 193, 7, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      background: isLight
                        ? "rgba(124, 77, 255, 0.1)"
                        : "rgba(255, 193, 7, 0.1)",
                      borderRadius: 2,
                      px: 2,
                      py: 1,
                      mb: 2,
                    }}
                  >
                    <CodeIcon sx={{ color: "primary.main" }} />
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "text.secondary" }}
                    >
                      Software Engineer
                    </Typography>
                  </Box>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: 700,
                      background: isLight
                        ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
                        : "linear-gradient(45deg, #FF9800 30%, #FFC107 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 2,
                    }}
                  >
                    Raheem Tiamiyu
                  </Typography>
                </Stack>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.2rem",
                    lineHeight: 1.8,
                    maxWidth: "90%",
                  }}
                >
                  Self-motivated and results-driven Software Developer with
                  expertise in building scalable web applications, cloud-based
                  solutions, and data-driven systems. Proficient in JavaScript,
                  Python and database management, with experience in React and
                  cloud platforms like Azure.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  alignItems={{ xs: "stretch", sm: "center" }}
                >
                  <ResumeButton />
                  <Button
                    variant="outlined"
                    color="primary"
                    href="#Projects"
                    size="large"
                    endIcon={<ArrowDownwardIcon />}
                    sx={{
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Explore projects
                  </Button>
                </Stack>
              </motion.div>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 4,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                }}
              >
                <ContactForm />
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
