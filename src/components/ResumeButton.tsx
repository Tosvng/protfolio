import { Button, SxProps, Theme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

interface ResumeButtonProps {
  sx?: SxProps<Theme>;
}

const ResumeButton = ({ sx }: ResumeButtonProps) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        href="/RaheemTResume.pdf"
        download="RaheemTiamiyu_Resume.pdf"
        sx={{
          background: isLight
            ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
            : "linear-gradient(45deg, #FF9800 30%, #FFC107 90%)",
          color: "#ffffff",
          fontWeight: 600,
          px: 4,
          py: 1.5,
          boxShadow: isLight
            ? "0 3px 10px rgba(124, 77, 255, 0.3)"
            : "0 3px 10px rgba(255, 152, 0, 0.3)",
          "&:hover": {
            background: isLight
              ? "linear-gradient(45deg, #6c3fff 30%, #a46cff 90%)"
              : "linear-gradient(45deg, #F57C00 30%, #FFB300 90%)",
            boxShadow: isLight
              ? "0 5px 15px rgba(124, 77, 255, 0.4)"
              : "0 5px 15px rgba(255, 152, 0, 0.4)",
          },
          ...sx,
        }}
      >
        Download Resume
      </Button>
    </motion.div>
  );
};

export default ResumeButton;
