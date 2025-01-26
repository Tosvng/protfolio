import { Project } from "../types/project";
import shopxAdmin from "../assets/images/shopx/adminHdS.png";
import shopxOrders from "../assets/images/shopx/adminOrders.png";
import shopxContact from "../assets/images/shopx/kgcontact.png";
import shopxHome from "../assets/images/shopx/kghome.png";
import shopxTopSellers from "../assets/images/shopx/kgtopsellers.png";

import fitnessOverview from "../assets/images/fitnessapp/g7.jpg";
import fitnessLogin from "../assets/images/fitnessapp/loginpage.jpg";
import fitnessHome from "../assets/images/fitnessapp/homepage.jpg";
import fitnessCalories from "../assets/images/fitnessapp/dailycalories.jpg";

import courseFront from "../assets/images/onlinecourse/frontpage.jpg";
import courseResults from "../assets/images/onlinecourse/results page.jpg";
import courseExam from "../assets/images/onlinecourse/startexampage.jpg";

import dealershipFront from "../assets/images/dreviews/frontpage.jpg";
import dealershipReview from "../assets/images/dreviews/review.jpg";

export const projects: Project[] = [
  {
    id: "shopx",
    title: "SHOPX",
    description:
      "This project is a comprehensive E-Commerce Website Builder and Management Application tailored for entrepreneurs. It empowers users to effortlessly create, manage, and optimize their online stores.",
    images: [
      { src: shopxAdmin, alt: "Admin Dashboard" },
      { src: shopxOrders, alt: "Admin Orders" },
      { src: shopxContact, alt: "Contact Page" },
      { src: shopxHome, alt: "Home Page" },
      { src: shopxTopSellers, alt: "Top Sellers" },
    ],
    technologies: [
      { name: "MongoDB" },
      { name: "Express" },
      { name: "React" },
      { name: "NodeJS" },
    ],
    websiteUrl: "https://myshopx.net",
  },
  {
    id: "fitness-app",
    title: "My Fitness App",
    description:
      "This Fitness Tracker is designed to accompany a user in the journey to physical wellness through tracking their fitness and general caloric input/output. With an all-in-one extensive approach, the fitness tracker aims to combine several aspects of fitness tracking in to one application instead of having to install several applications just to track your general fitness.",
    images: [
      { src: fitnessOverview, alt: "Fitness App Overview" },
      { src: fitnessLogin, alt: "Login Page" },
      { src: fitnessHome, alt: "Home Page" },
      { src: fitnessCalories, alt: "Daily Calories" },
    ],
    technologies: [{ name: "Java" }, { name: "Android Studio" }],
  },
  {
    id: "online-course",
    title: "Online Course",
    description: "This web application evaluates learners for an online course",
    images: [
      { src: courseFront, alt: "Front Page" },
      { src: courseResults, alt: "Results Page" },
      { src: courseExam, alt: "Start Exam Page" },
    ],
    technologies: [{ name: "Python" }, { name: "Django" }],
    websiteUrl: "https://altosin-9b7.us-south.cf.appdomain.cloud/onlinecourse/",
  },
  {
    id: "dealership-reviews",
    title: "Dealership Reviews",
    description:
      "This microservice web application allows users to view and write reviews of different car dealerships in the United States. It employs the use of a Natural Language Understanding microservice to analyse a review and displays the appropirate emoji based on the results",
    images: [
      { src: dealershipFront, alt: "Front Page" },
      { src: dealershipReview, alt: "Review Page" },
      { src: dealershipReview, alt: "Review Analysis" },
    ],
    technologies: [{ name: "Python" }, { name: "Django" }],
    websiteUrl: "https://dreviewer-97b.us-south.cf.appdomain.cloud/djangoapp/",
  },
];
