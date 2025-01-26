import { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: "ovintiv",
    company: "Ovintiv",
    location: "Calgary, AB",
    position: "Contract Software Developer",
    period: {
      from: "June 2024",
      to: "May 2025",
    },
    description:
      "Ovintiv is one of the largest producers of oil and natural gas in North America.",
    achievements: [
      "Led the digital transformation of organization's completions space, resulting in $1M annual cost savings, displaying system design expertise",
      "Designed high-performance data pipelines using Python, DuckDB, Clickhouse, and customized algorithms, reducing post-stage processing time by 80%",
      "Developed and maintained scalable web applications using React and FastAPI, ensuring clean, efficient, and well-documented code",
      "Ensured code quality and reliability by developing comprehensive test suites using Pytest, Jest and Selenium",
    ],
  },
  {
    id: "nuance",
    company: "Nuance Communications",
    location: "Montreal, QC",
    position: "Front-end Developer (Intern)",
    period: {
      from: "May 2023",
      to: "August 2023",
    },
    description:
      "Nuance Communications is a leading provider of conversational AI innovations that bring intelligence to everyday work and life.",
    achievements: [
      "Transitioned 90% of React components from JavaScript to TypeScript and documented them with storybook, enhancing scalability and maintainability",
      "Collaborated with senior developers in an agile scrum environment, contributing to technical design and implementation",
      "Reduced post-release bugs by 20% through rigorous testing with Jest and Cucumber, enhancing application stability",
    ],
  },
];
