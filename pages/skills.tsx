import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, skillsItem } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Skills() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Skill {
    url: string;
    name: string;
    color: string;
    colorRGB: string;
    isBgBlack?: boolean;
  }
  interface SkillSection {
    title: string;
    skills: Skill[];
  }

  interface Certifications {
    name: string;
    url: string;
  }
  const allSkills: SkillSection[] = [
    {
      "title": "Languages",
      "skills": [
      {
      "url": "https://www.svgrepo.com/show/452091/python.svg",
      "name": "Python",
      "color": "#3776AB",
      "colorRGB": "55, 118, 171"
      },
      {
      "url": "https://www.svgrepo.com/show/354478/typescript-icon.svg",
      "name": "TypeScript",
      "color": "#3178C6",
      "colorRGB": "49, 120, 198"
      },
      {
      "url": "https://www.svgrepo.com/show/353925/javascript.svg",
      "name": "JavaScript",
      "color": "#F7DF1E",
      "colorRGB": "247, 223, 30"
      },
      {
      "url": "https://www.svgrepo.com/show/416280/code-coding-development.svg",
      "name": "C",
      "color": "#0BDC49",
      "colorRGB": "11,220,73"
      },
      {
      "url": "https://www.svgrepo.com/show/452183/cpp.svg",
      "name": "C++",
      "color": "#00599C",
      "colorRGB": "0, 89, 156"
      },
      {
      "url": "https://www.svgrepo.com/show/452184/csharp.svg",
      "name": "C#",
      "color": "#9A5196",
      "colorRGB": "154,81,150"
      },
      {
      "url": "https://www.svgrepo.com/show/353884/html-5.svg",
      "name": "HTML",
      "color": "#E34F26",
      "colorRGB": "227, 79, 38"
      },
      {
      "url": "https://www.svgrepo.com/show/353623/css-3.svg",
      "name": "CSS",
      "color": "#1572B6",
      "colorRGB": "21, 114, 182"
      },
      {
      "url": "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      "name": "SQL",
      "color": "#00BCF2",
      "colorRGB": "0,188,242"
      }
      ]
      },
      {
        title: "Frameworks",
        skills: [
        {
        url: "https://www.svgrepo.com/show/354118/nodejs.svg",
        name: "NodeJS",
        color: "#58A645",
        colorRGB: "88,166,69",
        },
        {
        url: "https://www.svgrepo.com/show/452156/angular.svg",
        name: "Angular",
        color: "#DD0031",
        colorRGB: "221, 0, 49",
        },
        {
        url: "https://www.svgrepo.com/show/452092/react.svg",
        name: "React",
        color: "#61DAFB",
        colorRGB: "97, 218, 251",
        },
        {
        url: "https://www.svgrepo.com/show/508915/flask.svg",
        name: "Flask",
        color: "#000000",
        colorRGB: "0, 0, 0",
        isBgBlack: true,
        },
        {
        url: "https://www.svgrepo.com/show/330413/fastapi.svg",
        name: "FastAPI",
        color: "#009688",
        colorRGB: "0, 150, 136",
        },
        {
        url: "https://www.svgrepo.com/show/473778/scikitlearn.svg",
        name: "Scikit-learn",
        color: "#F7931E",
        colorRGB: "247, 147, 30",
        },
        {
        url: "https://www.svgrepo.com/show/403780/letter-p.svg",
        name: "Photon",
        color: "#000000",
        colorRGB: "0, 0, 0",
        isBgBlack: true,
        }
        ]
        },
    
{
  "title": "Tools",
  "skills": [
  {
  "url": "https://www.svgrepo.com/show/452211/github.svg",
  "name": "GitHub",
  "color": "#181717",
  "colorRGB": "24, 23, 23"
  },
  {
  "url": "https://www.svgrepo.com/show/373848/mysql.svg",
  "name": "MySQL",
  "color": "#4479A1",
  "colorRGB": "68, 121, 161"
  },
  {
  "url": "https://www.svgrepo.com/show/353498/bootstrap.svg",
  "name": "Bootstrap",
  "color": "#7952B3",
  "colorRGB": "121, 82, 179"
  },
  {
  "url": "https://www.svgrepo.com/show/340603/logo-jupyter.svg",
  "name": "Jupyter Notebook",
  "color": "#F37626",
  "colorRGB": "243, 118, 38"
  },
  {
  "url": "https://www.svgrepo.com/show/410899/plot.svg",
  "name": "Matplotlib",
  "color": "#11557C",
  "colorRGB": "17, 85, 124"
  },
  {
  "url": "https://www.svgrepo.com/show/473742/pandas.svg",
  "name": "Pandas",
  "color": "#150458",
  "colorRGB": "21, 4, 88"
  },
  {
  "url": "https://www.svgrepo.com/show/473533/anaconda.svg",
  "name": "Anaconda",
  "color": "#44A833",
  "colorRGB": "68, 168, 51"
  },
  {
  "url": "https://www.svgrepo.com/show/473818/unity.svg",
  "name": "Unity",
  "color": "#000000",
  "colorRGB": "0, 0, 0",
  "isBgBlack": true
  },
  {
  "url": "https://www.svgrepo.com/show/396909/letter-s.svg",
  "name": "ServiceNow",
  "color": "#1B8DDE",
  "colorRGB": "27, 141, 222"
  }
  ]
  },
  {
    "title": "Soft Skills",
    "skills": [
    {
    "url": "https://www.svgrepo.com/show/188779/leadership.svg",
    "name": "Leadership",
    "color": "#EDBE00",
    "colorRGB": "237,190,0"
    },
    {
    "url": "https://www.svgrepo.com/show/514330/teamwork.svg",
    "name": "Teamwork",
    "color": "#3D5AFE",
    "colorRGB": "61,90,254"
    },
    {
    "url": "https://www.svgrepo.com/show/428733/management-innovation-learn.svg",
    "name": "Management",
    "color": "#6096BA",
    "colorRGB": "96,150,186"
    },
    {
    "url": "https://www.svgrepo.com/show/474947/podium-with-speaker.svg",
    "name": "Public Speaking",
    "color": "#FFB74D",
    "colorRGB": "255,183,77"
    }
    ]
    }
  ,
  ];
  const certifications: Certifications[] = [
    {
      name: "Certified Application Developer",
      url: "https://drive.google.com/file/d/1qUp87l8kfbiTDJNf59iatEkiBV-lOeRa/view?usp=sharing",
    },
    {
      name: "Certified System Administrator",
      url: "https://drive.google.com/file/d/1vkxTA3XAJfioDjJb7j5HO77dB-5GiaqP/view?usp=sharing",
    }
  ];
  return (
    <>
      <Head>
        <title>Shreeprasad Sonar | Skills</title>
        <meta
          name="description"
          content="Hey, my name is Shreeprasad Sonar but I am much better known as Shree."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="skills">
        <div className="page__lines"></div>
        {allSkills.map((skill, index) => (
          <motion.div
            className="skills-section"
            key={index}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div
              className="skills-section__title"
              style={{ overflow: "hidden" }}
            >
              <motion.h2
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "50%", opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {skill.title}
              </motion.h2>
            </div>
            <div className="skills-section__cards">
              {skill.skills.map((skill, index) => (
                <div
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    className={skill.isBgBlack ? "card card-black" : "card"}
                    key={index}
                    variants={skillsItem}
                  >
                    <div
                      className="card-icon"
                      style={{
                        backgroundColor: `rgba(${skill.colorRGB}, .1)`,
                        border: `1px solid ${skill.color}`,
                      }}
                    >
                      <Image
                        src={skill.url}
                        alt={skill.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.name}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div
          className="skills-certif"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="skills-certif__title">
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Certifications
            </motion.h2>
          </div>
          <ul className="skills-certif__cards">
            {certifications.map((certif, index) => (
              <motion.li key={index} variants={skillsItem}>
                <Link
                  href={certif.url}
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
                  <span>{certif.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </main>
    </>
  );
}
