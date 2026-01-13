import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Headline animation
      tl.fromTo(headlineRef.current,
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
      );

      // Subtitle
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );

      // CTA button
      tl.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      );

      // Visual container
      tl.fromTo(visualRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
        '-=0.8'
      );

      // Floating orbs animation
      gsap.to('.hero-orb', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const navbarHeight = 20;
      const elementPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 20;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements - Updated to purple/magenta theme */}
      <div className="hero-orb glow-orb-purple w-96 h-96 -top-48 -left-48" />
      <div className="hero-orb glow-orb-magenta w-80 h-80 top-1/4 right-0" style={{ animationDelay: '1s' }} />
      <div className="hero-orb glow-orb-purple w-64 h-64 bottom-20 left-1/4" style={{ animationDelay: '2s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(270 91% 65% / 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(270 91% 65% / 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm tracking-wider uppercase">
                Available for work
              </span>
            </div>

            <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 opacity-0">
              <span className="text-primary text-glow">Daniyal Haider</span>
              <br />
              <span className="text-muted-foreground">Software Engineer</span>
            </h1>

            <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0">
              Building high-performance mobile applications with Flutter and scalable web solutions with MEAN Stack.
              Passionate about AI, Quality Engineering, and creating impactful software.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                ref={ctaRef}
                onClick={scrollToProjects}
                className="btn-glow opacity-0"
              >
                Explore My Work
              </button>
              <button
                onClick={scrollToContact}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
              >
                Get in touch <ArrowDown size={16} className="animate-bounce" />
              </button>
            </div>
          </div>

          {/* 3D Spline Robot - MAXIMUM edge hiding */}
          <div ref={visualRef} className="relative h-[400px] lg:h-[600px] opacity-0 overflow-hidden">
            {/* Robot container with ultra-soft masking */}
            <div
              className="absolute inset-0 -right-16 lg:-right-24"
              style={{
                maskImage: 'radial-gradient(ellipse 105% 115% at 40% 45%, black 25%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 55%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 105% 115% at 40% 45%, black 25%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 55%, transparent 100%)'
              }}
            >
              <Spline
                scene="/src/assets/robot_follow_cursor_for_landing_page.spline"
                className="w-full h-full scale-110 lg:scale-125"
                style={{
                  opacity: 0.8,
                  mixBlendMode: 'lighten'
                }}
              />
            </div>

            {/* MAXIMUM STRENGTH gradient overlays - covering 70-80% of edges */}

            {/* LEFT EDGE - Layer 1: Cover 75% from left with strong fade */}
            <div
              className="absolute inset-y-0 left-0 pointer-events-none"
              style={{
                width: '75%',
                background: 'linear-gradient(to right, #0a0514 0%, rgba(10,5,20,0.95) 20%, rgba(10,5,20,0.8) 40%, rgba(10,5,20,0.5) 60%, rgba(10,5,20,0.2) 80%, transparent 100%)'
              }}
            />

            {/* LEFT EDGE - Layer 2: Extra safety overlay */}
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none"
              style={{ width: '50%' }}
            />

            {/* LEFT EDGE - Layer 3: Hard edge killer */}
            <div
              className="absolute inset-y-0 left-0 pointer-events-none"
              style={{
                width: '300px',
                background: 'linear-gradient(to right, #0a0514 0%, #0a0514 10%, rgba(10,5,20,0.9) 40%, rgba(10,5,20,0.4) 70%, transparent 100%)'
              }}
            />

            {/* BOTTOM EDGE - Layer 1: Cover 60% from bottom */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: '60%',
                background: 'linear-gradient(to top, #0a0514 0%, rgba(10,5,20,0.9) 25%, rgba(10,5,20,0.6) 50%, rgba(10,5,20,0.3) 75%, transparent 100%)'
              }}
            />

            {/* BOTTOM EDGE - Layer 2: Extra safety */}
            <div
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none"
              style={{ height: '40%' }}
            />

            {/* TOP EDGE - Subtle fade */}
            <div
              className="absolute inset-x-0 top-0 bg-gradient-to-b from-background/60 via-background/20 to-transparent pointer-events-none"
              style={{ height: '35%' }}
            />

            {/* Ambient purple/magenta glows for depth */}
            <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/6 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
