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
            As a software engineer, collaborate with Product Owners, Architects, and fellow Scrum team members in an
            Agile environment to create reusable and configurable components for products. Over 9 years of
            experience in software engineering, with a focus on UI development and design, along with a web development
            certificate from Ramapo College of New Jersey.
        </p>
        <p className="mb-3">
            Passionate about creating interactive dashboards, data visualizations, and dynamic experiences that meet
            user needs and expectations. Utilize React, TypeScript, Jest, UI, and UX principles to deliver high-quality
            code, optimize performance, and ensure accessibility.
        </p>
        <p className="mb-3">
            Provide leadership and proactively introduce improvements to the architecture, code, tools, pipelines, and
            processes. Always eager to learn new skills, innovate when opportunities arise, automate when possible,
            confront challenges head-on, and create something to be proud of.
        </p>
    </motion.section>
  );
}
