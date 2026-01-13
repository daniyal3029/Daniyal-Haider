import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-content',
        { opacity: 0, y: 60, filter: 'blur(5px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          }
        }
      );

      // Floating particles
      gsap.to('.footer-particle', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.3,
          from: 'random'
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative py-16 border-t border-white/5 overflow-hidden">
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="footer-particle absolute w-2 h-2 rounded-full bg-primary/20"
          style={{
            left: `${10 + i * 12}%`,
            bottom: `${20 + (i % 3) * 20}%`,
          }}
        />
      ))}

      {/* Background glow */}
      <div className="glow-orb w-64 h-64 -bottom-32 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="footer-content">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo */}
            <a href="#home" className="text-3xl font-bold tracking-tight">
              <span className="text-foreground">Daniyal</span>
              <span className="text-primary">.</span>
            </a>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/daniyal3029" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/daniyal-haider-4b52582bb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Daniyal Haider. Made with
              <Heart size={14} className="text-primary animate-pulse" fill="currentColor" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
