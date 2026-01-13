import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Zap, Globe, Terminal, Layers, Smartphone, Database, Brain, TestTube, Gamepad2 } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: '🚀 Mobile & Application Development',
    icon: Smartphone,
    skills: ['Flutter (Dart)', 'Java Applications', 'Android Fundamentals']
  },
  {
    category: '🌐 Web & Backend Development',
    icon: Globe,
    skills: ['MEAN Stack', 'Python Flask', 'RESTful APIs', 'MongoDB', 'Express.js', 'Angular', 'Node.js']
  },
  {
    category: '🤖 AI & Generative AI',
    icon: Brain,
    skills: ['Generative AI', 'Prompt Engineering', 'LLM Integration']
  },
  {
    category: '🧪 Software Quality Engineering',
    icon: TestTube,
    skills: ['Selenium Automation', 'Python Testing', 'Test Case Design', 'Functional Testing']
  },
  {
    category: '🎮 Other Technologies',
    icon: Gamepad2,
    skills: ['PyGame', 'Git & GitHub', 'Clean Code Principles']
  }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -100, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );

      // Skills stagger animation
      gsap.fromTo('.skill-item',
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
          }
        }
      );

      // Tech Stack Cards - Staggered entrance with bounce
      gsap.fromTo('.tech-card',
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotateY: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.6,
          stagger: {
            amount: 1.2,
            from: 'start',
            ease: 'power2.out'
          },
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.tech-cards-container',
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-8 overflow-hidden opacity-0">
      {/* Background orbs */}
      <div className="glow-orb w-64 h-64 top-20 right-0 animate-float" />
      <div className="glow-orb-violet w-48 h-48 bottom-20 left-10 animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-start -mt-10">
            <div className="relative">
              <div className="glow-ring">
                <img
                  src={profileImage}
                  alt="Daniyal Haider"
                  className="profile-image w-80 h-80 rounded-full object-cover object-center border-4 border-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <div>
              <span className="text-primary text-sm tracking-widest uppercase mb-4 block about-content">ABOUT ME</span>
              <h2 className="section-title mb-6 about-content">Building the Future<br />One Line at a Time</h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed about-content">
              <p>
                I am <span className="text-foreground font-semibold">Daniyal Haider</span>, a passionate Software Engineering student at <span className="text-foreground font-semibold">FAST-NUCES (CFD)</span>, recognized as a departmental medalist and a consistent Dean's List achiever. My academic journey began as an ICS Board Topper in Sahiwal, and since then, I have continuously pushed boundaries in both academics and technology.
              </p>
              <p>
                Currently, I work as a <span className="text-foreground font-semibold">Mobile App Developer at EmbinX</span>, where I design and develop high-performance, scalable mobile applications using Flutter. Alongside my full-time role, I actively freelance, delivering custom solutions and mobile applications for clients across diverse industries.
              </p>
              <p>
                I have strong industry exposure through internships and hands-on roles, including IoT dashboard development, frontend engineering, backend APIs, and quality assurance automation. I am deeply interested in <span className="text-foreground font-semibold">AI, Generative AI, and prompt engineering</span>, and I enjoy integrating intelligent features into real-world applications.
              </p>
              <p>
                I believe in writing clean, testable, and scalable code while continuously learning new technologies. I'm always ready to take on challenging problems and build impactful solutions!
              </p>
            </div>

            {/* Skills Grid */}
            <div className="skills-grid space-y-6 mt-8">
              {skillCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="skill-item">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-foreground font-semibold mb-2">{category.category}</h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-13">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section - Combined */}
      <div className="container mx-auto px-6 relative z-10 mt-24">
        <div className="text-center mb-12 tech-stack-title">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Tech Stack</h3>
        </div>

        {/* Combined Tech Stack */}
        <div className="tech-cards-container">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {[
              // Programming Languages
              { name: 'C', icon: 'devicon-c-plain' },
              { name: 'C++', icon: 'devicon-cplusplus-plain' },
              { name: 'Java', icon: 'devicon-java-plain' },
              { name: 'Python', icon: 'devicon-python-plain' },
              { name: 'JavaScript', icon: 'devicon-javascript-plain' },
              { name: 'TypeScript', icon: 'devicon-typescript-plain' },
              { name: 'Dart', icon: 'devicon-dart-plain' },
              { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' },
              { name: 'Assembly', icon: 'devicon-embeddedc-plain' },
              { name: 'Bash', icon: 'devicon-bash-plain' },
              { name: 'MATLAB', icon: 'devicon-matlab-plain' },
              { name: 'R', icon: 'devicon-r-plain' },
              // Frameworks & Libraries (Appium removed)
              { name: 'Angular', icon: 'devicon-angular-plain' },
              { name: 'React', icon: 'devicon-react-original' },
              { name: 'Node.js', icon: 'devicon-nodejs-plain' },
              { name: 'Next.js', icon: 'devicon-nextjs-plain' },
              { name: 'Flutter', icon: 'devicon-flutter-plain' },
              { name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
              { name: 'Selenium', icon: 'devicon-selenium-original' },
              { name: 'JUnit', icon: 'devicon-junit-plain' },
              { name: 'Mockito', icon: 'devicon-java-plain' },
              { name: 'TestNG', icon: 'devicon-java-plain' },
              { name: 'NumPy', icon: 'devicon-numpy-plain' },
              { name: 'Pandas', icon: 'devicon-pandas-plain' },
              { name: 'Matplotlib', icon: 'devicon-matplotlib-plain' },
              { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain' },
              { name: 'Pygame', icon: 'devicon-python-plain' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="tech-card glass-card p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/70 hover:bg-primary/10 hover:-translate-y-2 transition-all duration-700 group cursor-pointer relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  animationDelay: `${index * 0.05}s`
                }}
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/20 group-hover:via-accent/10 group-hover:to-primary/20 transition-all duration-700 rounded-2xl opacity-0 group-hover:opacity-100" />

                {/* Floating glow orb */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                </div>

                <i
                  className={`${tech.icon} text-4xl text-primary group-hover:scale-150 group-hover:-rotate-12 transition-all duration-700 relative z-10 group-hover:animate-pulse`}
                  style={{
                    filter: 'drop-shadow(0 0 0px hsl(270 91% 65% / 0))',
                    transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                ></i>
                <span className="text-xs text-muted-foreground group-hover:text-primary group-hover:font-bold transition-all duration-500 text-center relative z-10 group-hover:scale-110">
                  {tech.name}
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
