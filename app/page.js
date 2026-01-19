"use client";

import Image from "next/image";
import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";

const projects = [
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
    const navBar = document.querySelector(".header-list");
    const navLinks = document.querySelectorAll(".ul-list li");
    const sections = document.querySelectorAll("section");
    let lastScrollTop = 0;

    const updateActiveLink = () => {
      let currentSection = "home";
      const scrollTop = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          currentSection = section.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.querySelector("a").getAttribute("href");
        if (href === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop && scrollTop > 30) {
        navBar?.classList.add("navbar-hidden");
        navBar?.classList.remove("navbar-visible");
      } else if (scrollTop < lastScrollTop) {
        navBar?.classList.add("navbar-visible");
        navBar?.classList.remove("navbar-hidden");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      updateActiveLink();
    };

    window.addEventListener("scroll", handleScroll);
    updateActiveLink();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

function useTypingAnimation() {
  useEffect(() => {
    const typingElement = document.querySelector(".cursor");
    const words = ["Full Stack Developer", "UI/UX Designer", "Game Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      if (!typingElement) return;
      const currentWord = words[wordIndex];
      if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentWord.substring(0, charIndex);
      } else {
        charIndex++;
        typingElement.textContent = currentWord.substring(0, charIndex);
      }
      let delay = isDeleting ? 60 : 110;
      if (!isDeleting && charIndex === currentWord.length) {
        delay = 1200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }
      timeoutId = setTimeout(type, delay);
    }
    type();
    return () => clearTimeout(timeoutId);
  }, []);
}

function useAutoProjectSlider() {
  useEffect(() => {
    const container = document.querySelector(".projects-container");
    if (!container) return;

    let animationId;
    const speed = 5.0;
    let isPaused = false;

    if (!container.dataset.loopCloned) {
      const originalItems = Array.from(container.children);
      originalItems.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        container.appendChild(clone);
      });
      container.dataset.loopCloned = "true";
    }

    let halfWidth = container.scrollWidth / 2;

    const step = () => {
      if (isPaused) {
        animationId = requestAnimationFrame(step);
        return;
      }
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) {
        animationId = requestAnimationFrame(step);
        return;
      }

      const next = container.scrollLeft + speed;
      container.scrollLeft = next >= halfWidth ? next - halfWidth : next;
      animationId = requestAnimationFrame(step);
    };

    const handleEnter = () => {
      isPaused = true;
    };

    const handleLeave = () => {
      isPaused = false;
    };

    const handlePointerDown = () => {
      isPaused = true;
    };

    const handlePointerUp = () => {
      isPaused = false;
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);
    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("touchstart", handlePointerDown, { passive: true });
    container.addEventListener("touchend", handlePointerUp, { passive: true });

    const handleResize = () => {
      halfWidth = container.scrollWidth / 2;
      container.scrollLeft = container.scrollLeft % halfWidth;
    };

    window.addEventListener("resize", handleResize);
    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("touchstart", handlePointerDown);
      container.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}

export default function HomePage() {
  useLandingInteractions();
  useTypingAnimation();
  useAutoProjectSlider();

  return (
    <>

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
                <p>Follow me:</p>
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
            {/* Simple about image without electric border */}
            <div style={{ width: '100%', maxWidth: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src="/upload/david.png" alt="David Nafisy" width={400} height={400} style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
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
              <ProjectCard key={index} image={project.image} title={project.title} url={project.url} />
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