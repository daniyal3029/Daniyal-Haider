import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';
import project6 from '@/assets/project-6.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'AI Chess Game – Master Edition',
    description: 'Interactive chess application with multi-level AI engines (Easy/Medium/Hard), self-learning system, neural network evaluation, modern GUI with piece animations, and persistent game history tracking.',
    image: project1,
    tags: ['Python', 'Tkinter', 'python-chess', 'Neural Network', 'Minimax', 'NumPy'],
    github: 'https://github.com/daniyal3029/AI-Chess-Game',
  },
  {
    id: 2,
    title: 'AI Underwriter Chat – Full-Stack',
    description: 'An AI-powered insurance underwriting assistant with ChatGPT-style interface, secure authentication, and real-time AI responses using OpenAI GPT-4o-mini.',
    image: project2,
    tags: ['React', 'TypeScript', 'Express', 'MongoDB', 'OpenAI', 'AWS S3'],
    live: 'https://fba-chatbot-final.vercel.app/',
  },
  {
    id: 3,
    title: 'SauceDemo UI Test Automation',
    description: 'Comprehensive Selenium WebDriver framework with Cucumber BDD, Page Object Model, data-driven testing (Excel/H2/Redis), TestNG parallel execution, and Allure Reports. 34 automated scenarios covering login, checkout, and UI validation.',
    image: project3,
    tags: ['Java', 'Selenium', 'Cucumber BDD', 'TestNG', 'Allure', 'Maven'],
    github: 'https://github.com/daniyal3029/SQE-PROJECT',
  },
  {
    id: 4,
    title: 'Tellix – Smart Mobile App',
    description: 'A production-level mobile application developed and deployed on Google Play Store.',
    image: project4,
    tags: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
    playStore: 'https://play.google.com/store/apps/details?id=com.epteck.intellix&hl=en',
  },
  {
    id: 5,
    title: 'Arabic Prose Management System',
    description: 'A Java-based system for managing, structuring, and processing Arabic prose content.',
    image: project5,
    tags: ['Java', 'OOP', 'Design Patterns', 'Architecture'],
    github: 'https://github.com/SoftwareConstructionAndDev/25f-prj-scd-system-design-core',
  },
  {
    id: 6,
    title: 'Mini Games Collection',
    description: 'A collection of mini games developed using Pygame for learning game mechanics.',
    image: project6,
    tags: ['Python', 'Pygame', 'Game Loops', 'Event Handling'],
    live: 'https://www.linkedin.com/posts/daniyal-haider-4b52582bb_flappybird-pygame-gamedevelopment-activity-7288899539695005696-cK1l',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.projects-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo('.project-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-8 overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-80 h-80 -top-40 left-1/4 animate-pulse-glow" />
      <div className="glow-orb-violet w-64 h-64 bottom-20 right-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 projects-title">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/40 transition-colors duration-300"
                      >
                        <Github size={18} className="text-primary" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/40 transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="text-primary" />
                      </a>
                    )}
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/40 transition-colors duration-300"
                      >
                        <Smartphone size={18} className="text-primary" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
