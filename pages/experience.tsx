import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item, skillsItem } from "../animation";
import { useContext, useState } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Experience() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Work {
    name: string;
    url?: string;
    location: string;
    position: string;
    date: string;
    description: string;
    stacks?: string[];
  }

  interface PersonalWork {
    name: string;
    url: string;
    image: string;
  }

  const works: Work[] = [
    {
      name: "The University of Texas at Dallas - Graduating May 2024",
      url: "https://drive.google.com/file/d/1uoLckJuDVUIVDFcU_0wTDNIo2canZTnn/view?usp=sharing",
      position: "Masters in Computer Science - GPA 3.85",
      location: "Richardson, TX, USA",
      date: "Aug 2022 - May 2024",
      description: "I am currently pursuing a Master's degree in Computer Science at The University of Texas at Dallas, with a plan to graduate in May 2024. This educational journey is equipping me with advanced knowledge and skills in the field, preparing me for a successful career in the ever-evolving world of technology.",
      stacks: ["Artificial Intelligence", "Machine Learning", "Big Data Management and Analytics", "Natural Language Processing", "Database Design", "Design and Analysis of Computer Algorithms", "Robot Manipulation and Navigation", "Virtual Reality", "Discrete Structures"],
    },
    {
      name: "Savitribai Phule Pune University",
      url: "https://drive.google.com/file/d/1YGKik93ixEiKALBstL-Lhj83mMaMT2rn/view?usp=sharing",
      position: "Bachelor of Engineering - GPA 9.46 - Rank 2/286",
      location: "Pune, India",
      date: "Aug 2017 - May 2021",
      description: "I pursued a Bachelor of Engineering in Electronics and Telecommunication at Savitribai Phule Pune University from 2017 to 2021, where I gained a strong foundation in various technical areas, including data structures, programming fundamentals, and cutting-edge fields like artificial intelligence and machine learning.",
      stacks: ["Data Structures and Algorithms", " Object Oriented Programming", "Fundamentals of Programming Languages", "Artificial Intelligence", "Machine Learning"],
    }
  ];
  const internships: Work[] = [
    {
      name: "FedEx",
      url: "https://www.linkedin.com/in/shreeprasadsonar/",
      position: "Full Stack Developer - Innovation Award Winner",
      location: "Internship",
      date: "June 2023 - Present",
      description:"In my role as an Information Technology intern, I developed an error and fault monitoring system, creating alerts and a monitoring dashboard for leaders and stakeholders to track issues across frontend and backend services. Additionally, I utilized Agile methodologies, taking on the roles of Scrum Master, Product Owner, and Developer, and worked collaboratively to ensure seamless communication and efficient project management.",
      stacks: ["API Integration", "PowerBI", "Application Dynamics", "Splunk", "Scrum Master", "Product Owner"],
    },
    {
      name: "Cognizant",
      url: "https://www.linkedin.com/in/shreeprasadsonar/",
      position: "Programmer Analyst - Top Performer Accolade",
      location: "Full-time",
      date: "Aug 2021 - July 2022",
      description:
        "During my tenure as a Programmer Analyst at Cognizant, I developed and designed an incident management system using Angular and FastAPI. I achieved a significant improvement of 50% in incident tracking time and successfully pitched the solution to clients. Additionally, my collaboration with Center of Excellence teams enabled effective implementation of diverse solutions to meet client requirements, resulting in being recognized as the Associate of the Month for my early project development progress.",
      stacks: ["Angular", "TypeScript", "JavaScript", "Node.js", "React.js", "HTML", "Python", "CSS", "Bootstrap", "Fast-API", "ServiceNow Development", "GitHub"],
    },
    {
      name: "Cognizant",
      url: "https://www.linkedin.com/in/shreeprasadsonar/",
      position: "ServiceNow Developer",
      location: "Internship",
      date: "Mar 2021 - July 2021",
      description:
        "As a Team Lead, I successfully guided a team of three members in designing and implementing a comprehensive learning system for employee upskilling. I ensured efficient code organization by breaking it into modular components and implemented workflow validation techniques for user access control. Additionally, I obtained certifications as a Certified System Administrator and Certified Application Developer, showcasing my expertise in those areas.",
      stacks: ["ServiceNow", "GitLab", "Javascript", "Web Development"],
    },
    {
      name: "OneWorldLerners",
      url: "https://drive.google.com/file/d/1YpteYBoMQvasAf3g7Vt73OdJCzNpfeAT/view?usp=sharing",
      position: "Web Development Intern",
      location: "Internship",
      date: "Sept 2020 - Feb 2021",
      description:
        "As a lead frontend developer, I spearheaded front-end development initiatives and introduced innovative reusable UI components using Angular, HTML, CSS, and Bootstrap. Through continuous improvement efforts such as optimizing code, integrating Google Analytics, and enhancing SEO strategies, I achieved remarkable results, including up to 80% improvements in user engagement, loading time, and website ranking, thereby enhancing the overall functionality and performance of the application.",
      stacks: ["Angular", "TypeScript", "JavaScript", "Node.js", "HTML", "Python", "CSS", "Bootstrap", "Google Analytics", "SEO", "GitHub"],
    },
  ];
  const volunteerships: Work[] = [
    {
      name: "ML Project Personal Key Indicators of Heart Disease",
      url: "https://github.com/ShreeprasadSonar/ML-Project-Personal-Key-Indicators-of-Heart-Disease",
      position: "",
      location: "",
      date: "",
      description: "Developed models to predict heart disease using the 2020 CDC survey data. Various models were implemented and compared. Achieved accuracies of 92.35% (LR), 89.67% (NB), and 93.12% (DT). Bagging and Boosting techniques improved accuracy by 4.5%. Practical experience gained in preprocessing, model selection, hyperparameter tuning, and real-world ML applications.",
      stacks: ["Python", "Pre-processing", "Exploratory Data Analysis", "Logistic Regression", "Decision Tree", "Na¨ıve Bayes", "KNN", "SVM", "Bagging", "Boosting", "Sci-kit Learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      name: "NFT Transaction System",
      url: "https://github.com/ShreeprasadSonar/NFT-Transaction-System",
      position: "",
      location: "",
      date: "",
      description:
        "Created from scratch a web-based software system called NTS (NFT Transaction System) that leverages the relational DBMS technology for data storage and querying. Convenient and easy-to-use software for NFT traders trying to buy and sell NFTs.",
        stacks: ["Angular", "Node.js", "SQL", "Flask", "Python", "Typescript", "HTML", "CSS", "Bootstrap", "GitHub"],
    },
    {
      name: "Nine Men’s Morris Game AI",
      url: "",
      position: "",
      location: "",
      date: "",
      description:
        "Alpha-Beta pruning algorithms for optimal moves in different game phases. Achieved an average reduction of 64% in node evaluations using Alpha-Beta pruning. Developed an improved static estimation function with enhanced accuracy.",
        stacks: ["Python", "Mini-max", "Alpha–beta pruning", "Game Trees"],
    },
    {
      name: "Spacecraft Analysis and Diagnosis in VR",
      url: "https://github.com/ShreeprasadSonar/SADVR",
      position: "",
      location: "",
      date: "",
      description:
        " Spacecraft Analysis and Diagnosis in VR is a virtual reality project with interactable objects, joystick controller for movement, selection and manipulation system, the system controls for stabilizing failing systems, physics and collision system, and visual and audio cues for feedback. Players can practice troubleshooting skills in a realistic spacecraft system failure scenario.",
        stacks: ["C#", "Photon Engine", "Unity", "GitHub"],
    },
    {
      name: "ML Model Based Live Plagiarism Inspector Application",
      url: "",
      position: "",
      location: "",
      date: "",
      description:
        "Devised an auto proctoring system using ML models that monitors eye movement, recognizes objects, and records audio when necessary. Achieved a 20% frame-rate improvement over the solutions in use at the time. Obtained an ”O” (Outstanding) grade for demonstrating the application as a senior-year project.",
      stacks: ["Python", "ML Model Analysis"],
    },
    {
      name: " Angular-based Yearbook Application For Colleges",
      url: "https://github.com/Team-ELESA/Yearbook2021/tree/main/Yearbook2021",
      position: "",
      location: "",
      date: "",
      description:
        "Developed the college’s yearbook website while leading a group of 20 students. Used Angular 12 for frontend with every student group working on assigned angular components. Devised a code execution that collects data from Google after a student fills out a form and dynamically shows the information in real-time following verification.",
      stacks: ["Node.js", "Angular", "HTML", "CSS", "TypeScript", "Bootstrap", "GitHub"],
    },
  ];
  const sideProjects: PersonalWork[] = [
  ];

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const handleMouseEnter = (url: string, name: string) => {
    setImageUrl(url);
    setImageName(name);
  };
  const handleMouseLeave = () => {
    setImageUrl("");
    setImageName("");
  };

  return (
    <>
      <Head>
        <title>Shreeprasad Sonar | Experience</title>
        <meta
          name="description"
          content="Hey, my name is Shreeprasad Sonar but I am much better known as Shree."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="experience">
        <div className="page__lines"></div>
        <motion.div
          className="experience-works"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-works__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Education
            </motion.h2>
          </div>
          <div className="experience-works__cards">
            {works.map((work, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{work.name}</h3>
                    <p>{work.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{work.date}</h3>
                    <p>{work.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{work.description}</p>
                </div>
                {work.stacks && (
                  <div className="card-stacks">
                    {work.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {work.url && (
                    <Link
                      href={work.url}
                      passHref
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <span>Reference</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="experience-internship"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-internship__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Experience
            </motion.h2>
          </div>
          <div className="experience-internship__cards">
            {internships.map((internship, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{internship.name}</h3>
                    <p>{internship.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{internship.date}</h3>
                    <p>{internship.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{internship.description}</p>
                </div>
                {internship.stacks && (
                  <div className="card-stacks">
                    {internship.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {internship.url && (
                    <Link
                      href={internship.url}
                      passHref
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <span>Reference</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="experience-internship"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-internship__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Projects
            </motion.h2>
          </div>
          <div className="experience-internship__cards">
            {volunteerships.map((volunteership, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{volunteership.name}</h3>
                    <p>{volunteership.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{volunteership.date}</h3>
                    <p>{volunteership.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{volunteership.description}</p>
                </div>
                {volunteership.stacks && (
                  <div className="card-stacks">
                    {volunteership.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {volunteership.url && (
                    <Link
                      href={volunteership.url}
                      passHref
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <span>Reference</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
}
