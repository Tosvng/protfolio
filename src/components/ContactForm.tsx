import { useState, useRef } from "react";
import {
  TextField,
  Button,
  Stack,
  Alert,
  Slide,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM_STATE: FormData = {
  from_name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    show: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    show: false,
    message: "",
    severity: "success",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setAlert({
        show: true,
        message: "Message sent successfully!",
        severity: "success",
      });
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      setAlert({
        show: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setAlert((prev) => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Contact Me!
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(10px)",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.1)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(10px)",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.1)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(10px)",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.1)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={isSubmitting}
            endIcon={<SendIcon />}
            sx={{
              background: isLight
                ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
                : "linear-gradient(45deg, #FF9800 30%, #FFC107 90%)",
              color: "#ffffff",
              fontWeight: 600,
              boxShadow: isLight
                ? "0 3px 10px rgba(124, 77, 255, 0.3)"
                : "0 3px 10px rgba(255, 152, 0, 0.3)",
              "&:hover": {
                background: isLight
                  ? "linear-gradient(45deg, #6c3fff 30%, #a46cff 90%)"
                  : "linear-gradient(45deg, #F57C00 30%, #FFB300 90%)",
                transform: "translateY(-2px)",
                boxShadow: isLight
                  ? "0 5px 15px rgba(124, 77, 255, 0.4)"
                  : "0 5px 15px rgba(255, 152, 0, 0.4)",
              },
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Stack>
      </form>
      <Slide direction="up" in={alert.show} mountOnEnter unmountOnExit>
        <Alert
          severity={alert.severity}
          sx={{ mt: 2, alignItems: "center" }}
          variant="filled"
        >
          {alert.message}
        </Alert>
      </Slide>
    </Box>
  );
};

export default ContactForm;
