import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function about() {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(2000, 2, 25);

    var currentYear = today.getFullYear();
    var birthYear = birthDate.getFullYear();
    var ageInYears = currentYear - birthYear;

    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() == today.getMonth() &&
        birthDate.getDate() > today.getDate())
    ) {
      setAge(ageInYears - 1);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Shreeprasad Sonar | About</title>
        <meta
          name="description"
          content="Tech enthusiast with a knack for problem-solving and a dash of creativity, turning ideas into code and making the digital world a little more fun and functional."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className="about">
        {/* <div className="about-illus">
          <Image
            src="/illustrations/1.png"
            alt="illustration"
            width={200}
            height={200}
            
          />
        </div> */}
        <div className="page__lines"></div>
        <motion.div
          className="about-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            style={{
              overflow: "hidden",
            }}
            className="about-left__title"
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              About
            </motion.h2>
          </div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__text"
          >I'm Shreeprasad Sonar, a passionate and creative computer science enthusiast with a knack for problem-solving and a love for all things tech. Whether I'm developing incident management systems, crafting innovative web applications, or diving into the world of artificial intelligence, I bring a contagious energy and a thirst for continuous improvement. With a strong foundation in programming languages, frameworks, and tools, I thrive in collaborative environments and embrace challenges head-on. From exploring virtual reality to conquering machine learning algorithms, I'm always ready to embark on exciting adventures in the ever-evolving realm of technology. Let's create something extraordinary together!
          </motion.p>
          <div className="about-left__langs">
            <motion.h3 variants={item}>LANGUAGES</motion.h3>
            <motion.li variants={item}>
              <span>English</span>
              <span>Fluent</span>
            </motion.li>
            <motion.li variants={item}>
              <span>Marathi</span>
              <span>Native</span>
            </motion.li>
            <motion.li variants={item}>
              <span>Hindi</span>
              <span>Native</span>
            </motion.li>
          </div>
          <div className="about-left__links">
            <motion.a
              variants={item}
              href="https://drive.google.com/drive/folders/1-VHnz1ol85wOCZdxDLG3TT6rxqSiy3Ro?usp=sharing"
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
              </svg>{" "}
              Resume
            </motion.a>
          </div>
        </motion.div>
        <div className="about-right">
          <div className="about-right__image">
            <Image
              src="/images/ln-pic-2.jpg"
              alt="Shreeprasad Sonar"
              width={3024}
              height={4032}
            />
          </div>
        </div>
      </main>
    </>
  );
}
