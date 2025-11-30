"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import ElectricBorder from "./components/ElectricBorder"; // Import ElectricBorder component

type Project = {
  image: string;
  title: string;
  description: string;
  skills: string[];
  url: string;
};

const typingWords = ["Full Stack Developer", "UI/UX Designer", "Game Developer"];

const projects: Project[] = [
  {
    image: "/upload/event.png",
    title: "Event Organizer Website",
    description: "Website that easily manages event systems",
    skills: ["PHP", "CSS"],
    url: "https://github.com/davidnfy/Event-Organizer-crud-",
  },
  {
    image: "/upload/animals.png",
    title: "Animal Organizer Website",
    description: "Pet Organizer Website that manages animal health.",
    skills: ["PHP", "CSS"],
    url: "https://github.com/davidnfy/animals-organizer-data",
  },
  {
    image: "/upload/game-tebak-angka.png",
    title: "Number Guessing Game Website",
    description: "Simple Number Guessing Game Website.",
    skills: ["HTML", "CSS", "JS"],
    url: "https://github.com/davidnfy/game-tebak-angka",
  },
  {
    image: "/upload/flappy-bird.png",
    title: "Game Flappy Bird",
    description: "Flappy Bird game that saves the player's score and has obstacles",
    skills: ["Construct 3"],
    url: "https://github.com/davidnfy/Game-Flappy-Bird",
  },
  {
    image: "/upload/afterlight.png",
    title: "Game After Light",
    description: "After Light a game where the goal is to collect all the items quickly to get the lowest timer.",
    skills: ["Construct 2"],
    url: "https://github.com/davidnfy/Game-AfterLight",
  },
  {
    image: "/upload/todolist.png",
    title: "Todo List App",
    description: "Todo list web app that helps organize daily activities",
    skills: ["PHP", "Blade", "JS", "Laravel"],
    url: "https://github.com/davidnfy/Todo-List-App",
  },
];

const education = [
  { title: "Junior High School", detail: "SMPN 2 DAMPIT (2021-2024)" },
  { title: "Vocational High School", detail: "SMKN 5 MALANG (2025-Present)" },
];

function useLandingInteractions() {
  useEffect(() => {
    const navBar = document.querySelector<HTMLElement>(".header-list");
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop && scrollTop > 50) {
        navBar?.classList.add("navbar-hidden");
        navBar?.classList.remove("navbar-visible");
      } else if (scrollTop < lastScrollTop) {
        // Scroll ke atas
        navBar?.classList.add("navbar-visible");
        navBar?.classList.remove("navbar-hidden");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

function useTypingAnimation() {
  useEffect(() => {
    const typingElement = document.querySelector<HTMLElement>(".cursor");
    const words = ["Full Stack Developer", "UI/UX Designer", "Game Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let rafId: number;
    let lastTime = 0;
    let delay = 0;

    const type = (now: number) => {
      if (!typingElement) return;
      if (!lastTime) lastTime = now;
      const elapsed = now - lastTime;
      // Use longer delay for mobile (reduce animation frequency)
      const baseDelay = window.innerWidth < 600 ? 120 : 70;
      if (elapsed > baseDelay + delay) {
        const currentWord = words[wordIndex];
        const visibleText = isDeleting
          ? currentWord.substring(0, charIndex--)
          : currentWord.substring(0, charIndex++);
        typingElement.textContent = visibleText;
        if (!isDeleting && charIndex === currentWord.length) {
          delay = 1000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          delay = 300;
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        } else {
          delay = 0;
        }
        lastTime = now;
      }
      rafId = requestAnimationFrame(type);
    };
    rafId = requestAnimationFrame(type);
    return () => cancelAnimationFrame(rafId);
  }, []);
}

export default function HomePage() {
  useLandingInteractions();
  useTypingAnimation();

  return (
    <>
      <header>
        <div className="div-list">
          <ul className="ul-list">
            <li className="active">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>

      <main id="main-page" className="visible">
        <section className="home" id="home">
          <div className="home-container">
            <div className="info-home">
              <h3>Hi, I&apos;m David</h3>
              <h3>
                <span className="cursor"></span>
              </h3>
              <div className="info-p">
                <p>I am a student and aspire to become a Full-Stack & Game Developer, and I enjoy new things like trying new technology and new games.</p>
              </div>
              <div className="info-p2">
                <p>
                  <i className="fa-solid fa-location-dot" /> Malang, East Java, Indonesia
                </p>
              </div>
              <div className="hhr">
                <hr />
              </div>
              <div className="follow">
                <p className="followw">Follow me:</p>
                <ul>
                  <li>
                    <a href="https://github.com/davidnfy" target="_blank" rel="noopener noreferrer" title="GitHub">
                      <i className="fa-brands fa-github" />
                    </a>
                  </li>
                  <li>
                    <a href="1272875106187608128" title="Placeholder">
                      <i className="fa-brands fa-discord" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/davidnafisy/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/davidnfy/" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Image src="/upload/david1.png" alt="David Nafisy portrait" width={400} height={500} priority />
          </div>
        </section>

        <section className="about" id="about">
          <p>ABOUT ME</p>
          <div className="title">
            <h1>David Nafisy</h1>
          </div>
          <div className="icon-container">
          </div>
          <div className="hrrr">
            <hr />
          </div>
          <div className="about-container">
            <div className="info-about">
              <div className="about-info">
                <p>
                  Hi! I am a vocational high school student who is very interested in technology and the gaming world. My dream is to
                  become a full-stack developer and a game developer. I enjoy learning how things work behind the scenes, and because
                  of that, I continue to study and hone my skills.
                </p>
                <p>
                  Besides coding, I also enjoy playing games like Valorant, GTA V, Mobile Legends, and PUBG Mobile. I’m also passionate
                  about music — I love playing instruments like the piano and guitar in my free time.
                </p>
              </div>
              <h2>
                <i className="fa-solid fa-graduation-cap" /> Education
              </h2>
              <div className="card">
                {education.map((item) => (
                  <div className="c1" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Electric border for about image - responsive */}
            <div style={{ width: '100%', maxWidth: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ElectricBorder color="#0000FF" speed={1} chaos={0.5} thickness={2} style={{ borderRadius: '50%', width: '100%', aspectRatio: '1 / 1', maxWidth: 400, maxHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/upload/david.png" alt="David Nafisy" width={400} height={400} style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </ElectricBorder>
            </div>
          </div>
        </section>

        <section className="project" id="project">
          <p>PROJECTS</p>
          <div className="title">
            <h1>My Projects</h1>
          </div>
          <div className="projects-container">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.skills}
                buttons={[{ label: "GitHub", url: project.url }]}
              />
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p>CONTACT</p>
          <h1>Contact Me</h1>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fa-solid fa-envelope" />
                  <span>davidnafisy3@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="fa-solid fa-location-dot" />
                  <span>Malang, East Java, Indonesia</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/davidnfy" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/davidnafisy/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="https://www.instagram.com/davidnfy/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <h2 className="footer-logo">David Nafisy</h2>
            </div>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="footer-social">
              <a href="https://github.com/davidnfy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/davidnafisy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="https://www.instagram.com/davidnfy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
          <p className="footer-copy">&copy; 2025 David. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
