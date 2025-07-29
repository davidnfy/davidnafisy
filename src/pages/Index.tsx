import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram,
  GraduationCap,
  BookOpen
} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  
  // Typing animation texts
  const texts = ['Full Stack Developer', 'Game Developer'];

  useEffect(() => {
    setIsVisible(true);
    
    const typeEffect = () => {
      const currentText = texts[currentTextIndex];
      
      if (isPaused) {
        setIsPaused(false);
        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
        return;
      }
      
      if (!isDeleting) {
        if (typedText.length < currentText.length) {
          setTypedText(currentText.slice(0, typedText.length + 1));
        } else {
          setIsPaused(true);
          return;
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }
      }
    };

    let typingSpeed;
    if (isPaused) {
      typingSpeed = 2000;
    } else if (isDeleting) {
      typingSpeed = 50;
    } else {
      typingSpeed = 100;
    }

    const timer = setTimeout(typeEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex, isPaused]);

  // Skills data
  const skills = [
      { 
        name: 'HTML', 
        logo: 'upload/html.png'
      },
      { 
        name: 'CSS', 
        logo: 'upload/css.png'
      },
      { 
        name: 'JavaScript', 
        logo: 'upload/js.jpeg'
      },
      { 
        name: 'Bootstrap', 
        logo: 'upload/bootstrap.png'
      },
      { 
        name: 'PHP', 
        logo: 'upload/php.png'
      },
      { 
        name: 'MySQL', 
        logo: 'upload/mysql.png'
      },
      { 
        name: 'Github', 
        logo: 'upload/github.png'
      },
      { 
        name: 'Node JS', 
        logo: 'upload/nodejs.png'
      },
       { 
        name: 'React JS', 
        logo: 'upload/react.png'
      },
       { 
        name: 'Figma', 
        logo: 'upload/figma.png'
      }
  ];

  // Projects data
  const projects = [
      {
        title: 'E-commerce Website',
        description: 'E-commerce website with a system like other e-commerce platforms with CRUD features and Login/Registration.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP' ,'MySQL'],
        image: 'upload/ecommerce.png',
        repoUrl: 'https://github.com/Davidnfy/Ecommerce'
      },
      {
        title: 'Event Organizer Website',
        description: 'Website that organizes or creates a list of events',
        tech: ['PHP', 'CSS', 'MySQL'],
        image: 'upload/event.png',
        repoUrl: 'https://github.com/Davidnfy/Event-Organizer-crud-'
      },
      {
        title: 'Animals Organization Website',
        description: 'website to manage animal data',
        tech: ['PHP', 'CSS','MySQL'],
        image: 'upload/animals.png',
        repoUrl: 'https://github.com/Davidnfy/animals-organizer-data'
      },
      {
        title: 'Number guessing game',
        description: 'A simple and easy number guessing game to avoid boredom.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: 'upload/game-tebak-angka.png',
        repoUrl: 'https://github.com/Davidnfy/game-tebak-angka'
      }
  ];

  // Auto-advance projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden scroll-smooth">
      <Navbar />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-white transform transition-all duration-1000 ease-out">
              Hello, I'm David
            </h1>
            <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 h-16 sm:h-20 flex items-center justify-center">
              <span className="inline-block overflow-hidden whitespace-nowrap bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent gradient-animate relative min-w-[280px] sm:min-w-[400px] text-center">
                {typedText}
                <span className="absolute -right-1 top-0 w-1 h-full bg-blue-300 animate-pulse"></span>
              </span>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-slide-in-left transition-all duration-1000 ease-out px-4" style={{ animationDelay: '1s' }}>
           Expert in building complete web applications (front-end & back-end)<br className="hidden sm:block" />
            and creating games from concept to playable.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-gray-600 leading-relaxed transition-all duration-700 ease-out">
                Hi!.. I'm David Nafisy, a high school student from the city of MALANG, EAST JAVA, INDONESIA. 
                I want to become a skilled web developer and 
                I enjoy coding because my dream is to become a full stack developer/game developer.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed transition-all duration-700 ease-out">
               I also enjoy playing both Mobile and PC games, such as Genshin Impact, Minecraft, Fortnite, PUBG Mobile, Valorant, GTA V (RP), and many more.
                Currently, I only play Genshin Impact and Valorant. Besides gaming, 
                I also like playing the keyboard/piano. 
                I really enjoy accompanying any song with the piano/keyboard, as it is my favorite hobby.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  variant="outline" 
                  className="hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 flex items-center gap-2"
                >
                  <img src="upload/smp.png" alt="SMP Logo" className="h-6 w-6 object-cover rounded" />
                  <span>
                    SMP Negeri 2 Dampit<br />
                    <small className="text-xs text-gray-500">2022 - 2024</small>
                  </span>
                </Button>
                <Button 
                  variant="outline" 
                  className="hover:bg-purple-50 hover:border-purple-500 transition-all duration-300 flex items-center gap-2"
                >
                  <img src="upload/smk.png" alt="SMK Logo" className="h-6 w-6 object-cover rounded" />
                  <span>
                    SMKN Negeri 5 Malang<br />
                    <small className="text-xs text-gray-500">2024 - Present</small>
                  </span>
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-xl border border-blue-200 transition-all duration-700 ease-out hover:scale-105 overflow-hidden">
                <img 
                  src="upload/nafisy.png" 
                  alt="Profile Image" 
                  className="w-full h-full object-cover rounded-full transition-all duration-500 ease-out" 
                />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group animate-fade-in flex flex-col items-center gap-2 p-3 transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`} 
                      className="w-6 h-6 object-contain transition-all duration-500 ease-out group-hover:scale-125 filter drop-shadow-lg" 
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-all duration-300 ease-out text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
           My Projects
          </h2>
          <div className="relative">
            {/* Desktop Layout - Show all 4 projects in grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 mb-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="bg-white border-gray-200 hover:border-blue-400 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group h-full transform overflow-hidden"
                  style={{ 
                    animation: 'fade-in 0.6s ease-out forwards',
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  <CardContent className="p-0">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-all duration-300 ease-out">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm group-hover:text-gray-700 transition-all duration-300 ease-out leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-300 ease-out text-xs px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-out transform hover:scale-105 px-4 py-2 text-sm font-medium rounded-md"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Repository
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mobile Layout - Show 1 project with navigation */}
            <div className="md:hidden mb-8">
              <Card 
                className="bg-white border-gray-200 hover:border-blue-400 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group h-full max-w-sm mx-auto transform overflow-hidden"
                style={{ 
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                <CardContent className="p-0">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={projects[currentProject].image} 
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-all duration-300 ease-out">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm group-hover:text-gray-700 transition-all duration-300 ease-out leading-relaxed">
                      {projects[currentProject].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[currentProject].tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-300 ease-out text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={projects[currentProject].repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-out transform hover:scale-105 px-4 py-2 text-sm font-medium rounded-md"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dots Indicator for Mobile */}
            <div className="flex justify-center space-x-3 md:hidden">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ease-out transform hover:scale-125 ${
                    index === currentProject
                      ? 'bg-blue-600 scale-110 shadow-lg shadow-blue-600/50'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentProject(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Me
          </h2> 
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-left mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transform">
              <Mail className="mr-2 h-5 w-5" />
              mail.davidnafisy@gmail.com
            </Button>
            <div className="flex gap-4">
              <a href="https://github.com/Davidnfy" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-out hover:scale-110 transform">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/davidnafisy/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-out hover:scale-110 transform">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/davidnfy/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-out hover:scale-110 transform">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 transition-all duration-300 ease-out">
            © 2025 davidnfy.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
