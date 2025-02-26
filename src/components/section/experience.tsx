import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Mercado Libre Colombia",
    position: "SSr Software Development Analyst",
    date: "Jul 2021 - Sept 2024",
    link:"https://www.mercadolibre.com.co/",
    details: [
      "Designed and developed responsive single-page applications using React, improving user experience across desktop and mobile platforms.",
      "Collaborated with cross-functional teams to optimize server performance, achieving a 50% reduction in response times.",
      "Modernized legacy codebases by implementing advanced caching strategies, significantly enhancing application efficiency and user interactions.",
    ],
  },
  {
    company: "Puntored",
    position: "Fullstack Developer",
    date: "Sept 2020 - Jul 2021",
    link:"https://puntored.co/en/",
    details: [
      "Led UX improvements, enhancing user satisfaction by 30% through optimized design and functionality using Vue.js",
      "Conducted code reviews, improving software reliability by 10% and ensuring platform consistency.",
      "Improved team collaboration by providing clear feedback during code reviews.",
      "Ensured alignment of design and development standards across multiple projects.",
    ],
  },
];

export default function ExperienceSection() {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);

  return (
    <>
    <h2 className="text-center w-full text-xl font-bold">
        Where I’ve worked
        </h2>
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-8 bg-background text-foreground max-w-6xl mx-auto">
        
      {/* Left Side - Job List */}
      <div className="flex flex-col space-y-4 md:w-1/3 self-start">
        {experiences.map((job, index) => (
          <button
            key={index}
            className={`text-lg font-mono transition-all ${
              selectedJob.company === job.company
                ? "text-cyan-400"
                : "text-gray-400 hover:text-cyan-300"
            }`}
            onClick={() => setSelectedJob(job)}
          >
            {job.company}
          </button>
        ))}
      </div>

      {/* Right Side - Job Details */}
      <motion.div
        key={selectedJob.company}
        className="lg:2-2/3 md:w-2/3 space-y-4 min-w-[725px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold">{selectedJob.position}</h3>
        <a
            href={selectedJob.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-cyan-400 font-mono">@{selectedJob.company}</p>
          </a>
        
        <p className="text-gray-400">{selectedJob.date}</p>

        <ul className="space-y-2">
          {selectedJob.details.map((detail, i) => (
            <li key={i} className="flex items-start space-x-2">
              <span className="text-cyan-400">➤</span>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
    </>
  );
}
