import React from "react";
import { FaReact } from "react-icons/fa";
import gameSearchImg from "@/public/game-search-1.png";
import makeAPaymentImg from "@/public/make-a-payment-ui-1.png";
import memberDashboardImg from "@/public/member-dashboard-ui-1.png";
import conversionFrameworkImg from "@/public/conversion-framework-ui-2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Programmer Analyst",
    location: "Express Scripts - Franklin Lakes, NJ (Hybrid)",
    description:
        "I started working as a Programmer Analyst at Express Scripts in 2015. Shortly after I started, the software " +
        "engineering organization began modernizing the B2C member website. I was involved in efforts to create apps " +
        "in React for the Registration, Account Recovery, Login, and Home pages. I later moved to another team working on " +
        "apps in the post-login flow such as the Conversion Framework page.",
    icon: React.createElement(FaReact),
    date: "September 2015 - December 2018",
  },
  {
    title: "Software Engineer",
    location: "Cigna - Franklin Lakes, NJ (Hybrid)",
    description:
        "After the merger with Cigna in 2018, I was moved into a Software Engineer role in the same organization where " +
        "I continued working on B2C member web applications such as the Conversion Framework page and the Member " +
        "Dashboard. Throughout my time there, the technologies I worked on included React, Redux, JavaScript, Jest, SonarQube, " +
        "Jenkins, GitHub, Adobe Analytics, and LaunchDarkly.",
    icon: React.createElement(FaReact),
    date: "January 2019 - June 2021",
  },
  {
    title: "Software Engineer II",
    location: "Optimizely - Nashua, NH (Remote)",
    description:
        "Upon leaving Cigna, I joined Optimizely in 2021 as a Software Engineer II. I spent most of my time working on the " +
        "experimentation platform with features that allowed users to do A/B testing for different features on their " +
        "site. Here I used much of the same tech stack such as React, TypeScripts, and internal UI components library.",
    icon: React.createElement(FaReact),
    date: "June 2021 - April 2022",
  },
  {
    title: "UI Engineer",
    location: "Vestmark - Wakefield, MA (Remote)",
    description:
        "I then moved on to Vestmark where I began working as a UI Engineer. During my time here, I worked on the VAST " +
        "platform which modernized the existing platform that allowed users, such as financial advisors, to generate " +
        "proposals for their clients. I also continued to use React and TypeScript here, as well as get familiar with " +
        "Docker, Storybook, Next JS, and React Testing Library.",
    icon: React.createElement(FaReact),
    date: "April 2022 - February 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Game Search",
    link: "https://game-search-jd.vercel.app/",
    description:
        "This application is a side project that uses Next JS with Tailwind to allow users to search for games and " +
        "then add them to their favorites.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Jest", "Storybook"],
    imageUrl: gameSearchImg,
  },
  {
    title: "Make a Payment",
    link: "",
    description:
        "This application allows Express Scripts members to make payments online for any outstanding balances.",
    tags: ["React", "Redux", "JavaScript", "Jest", "Adobe Analytics", "SonarQube", "Launch Darkly"],
    imageUrl: makeAPaymentImg,
  },
  {
    title: "Member Dashboard",
    link: "",
    description:
        "This application allows Express Scripts members to view any information on their available refills, order status, " +
        "payment options, etc.",
    tags: ["React", "Redux", "JavaScript", "Jest", "Adobe Analytics", "SonarQube", "Launch Darkly"],
    imageUrl: memberDashboardImg,
  },
  {
    title: "Conversion Framework",
    link: "",
    description:
        "This application allows Express Scripts members to convert prescriptions from retail pick-up to home delivery by mail. ",
    tags: ["React", "Redux", "JavaScript", "Jest", "Adobe Analytics", "SonarQube", "Launch Darkly"],
    imageUrl: conversionFrameworkImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "PostgreSQL",
  "Jest",
  "React Testing Library",
  "Docker",
  "Storybook",
  "Cypress",
  "Figma",
  "JIRA",
  "Vercel",
  "Jenkins",
  "Adobe Analytics",
  "SonarQube",
  "LaunchDarkly",
] as const;
