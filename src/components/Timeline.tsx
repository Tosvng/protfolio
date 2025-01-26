import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Experience } from "../types/experience";
import WorkIcon from "@mui/icons-material/Work";

interface ExperienceTimelineProps {
  experiences: Experience[];
  isMobile: boolean;
  isLight: boolean;
}

const ExperienceTimeline = ({
  experiences,
  isMobile,
  isLight,
}: ExperienceTimelineProps) => {
  return (
    <Timeline
      position={isMobile ? "right" : "alternate"}
      sx={{
        p: 0,
        m: 0,
        [`& .MuiTimelineItem-root`]: {
          minHeight: 0,
          "&:before": {
            ...(isMobile && {
              display: "none",
            }),
          },
        },
        [`& .MuiTimelineContent-root`]: {
          px: { xs: 2, sm: 3 },
          py: { xs: 1, sm: 2 },
        },
        [`& .MuiTimelineDot-root`]: {
          margin: { xs: 1, sm: 2 },
        },
        [`& .MuiTimelineConnector-root`]: {
          width: 2,
        },
        [`& .MuiTimelineOppositeContent-root`]: {
          flex: { xs: 0.2, sm: 1 },
          px: { xs: 1, sm: 3 },
        },
      }}
    >
      {experiences.map((experience, index) => (
        <TimelineItem key={experience.id}>
          <TimelineOppositeContent
            sx={{ display: isMobile ? "none" : "block" }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.875rem", sm: "0.975rem" },
              }}
            >
              {experience.period.from} - {experience.period.to}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                background: isLight
                  ? "linear-gradient(45deg, #7c4dff 30%, #b47cff 90%)"
                  : "linear-gradient(45deg, #FF9800 30%, #FFC107 90%)",
              }}
            >
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector
              sx={{
                background: isLight
                  ? "linear-gradient(180deg, #7c4dff 30%, rgba(124, 77, 255, 0.1) 90%)"
                  : "linear-gradient(180deg, #FF9800 30%, rgba(255, 152, 0, 0.1) 90%)",
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              component={motion.div}
              initial={{
                opacity: 0,
                x: isMobile ? -20 : index % 2 === 0 ? 20 : -20,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              sx={{ pb: 4 }}
            >
              <Box
                sx={{
                  p: { xs: 2, sm: 3 },
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 2,
                  position: "relative",
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
                    borderRadius: "4px 0 0 4px",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    mb: 1,
                  }}
                >
                  {experience.position}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    mb: 1,
                  }}
                >
                  {experience.company}
                </Typography>
                {isMobile && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "0.975rem" },
                      mb: 2,
                    }}
                  >
                    {experience.period.from} - {experience.period.to}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontStyle: "italic",
                    fontSize: { xs: "0.875rem", sm: "0.975rem" },
                    mb: 2,
                  }}
                >
                  {experience.description}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    pl: { xs: 2, sm: 3 },
                    m: 0,
                    "& li": {
                      mb: { xs: 1, sm: 1.5 },
                      "&::marker": {
                        color: isLight ? "#7c4dff" : "#FF9800",
                      },
                    },
                  }}
                >
                  {experience.achievements.map((achievement, idx) => (
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
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.875rem", sm: "0.975rem" },
                          lineHeight: 1.6,
                        }}
                      >
                        {achievement}
                      </Typography>
                    </motion.li>
                  ))}
                </Box>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
