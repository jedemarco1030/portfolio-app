"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
            As a software engineer, I collaborate with product owners, architects, and fellow scrum team members in
            an agile environment to create reusable and configurable components for the products. I have over 8 years
            of experience in software engineering, with a focus on UI development and design. I'm also passionate
            about creating interactive dashboards, data visualizations, and dynamic experiences that meet user needs
            and expectations.
        </p>
        <p className="mb-3">
            I use React, TypeScript, Jest, and UI/UX principles to deliver high-quality code, optimize performance,
            and ensure accessibility. I also provide leadership and proactively introduce improvements to our
            architecture, code, tools, pipelines, and process. I am always eager to learn new skills, innovate when
            opportunities arise, automate when possible, confront challenges head on, and create something that I
            can be proud of.
        </p>
    </motion.section>
  );
}
