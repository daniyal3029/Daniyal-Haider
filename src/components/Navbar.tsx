import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-nav-item',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const navbarHeight = 20; // Minimal offset to show section title
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">D</span>
              <span className="text-primary">H</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Social + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/daniyal3029" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/daniyal-haider-4b52582bb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <button onClick={() => scrollToSection('contact')} className="btn-glow text-sm py-2 px-6">
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground z-50 relative"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="mobile-nav-item text-3xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
            >
              {link}
            </button>
          ))}
          <div className="mobile-nav-item flex items-center gap-6 mt-8">
            <a href="https://github.com/daniyal3029" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/daniyal-haider-4b52582bb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
