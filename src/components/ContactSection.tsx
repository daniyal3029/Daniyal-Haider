import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.contact-title',
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

      // Form inputs animation
      gsap.fromTo('.form-element',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
          }
        }
      );

      // Info cards animation
      gsap.fromTo('.info-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.info-section',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call serverless API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - show success message
        alert('✅ Message sent successfully! I\'ll get back to you soon.');

        // Clear form
        setFormData({ name: '', email: '', message: '' });

        // Animate success
        gsap.to('.submit-btn', {
          scale: 1.05,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
        });
      } else {
        // Error from API
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      // Show error message
      console.error('Error sending message:', error);
      alert('❌ Failed to send message. Please try again or email me directly at daniyalhaider2273@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-8 overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-72 h-72 top-10 -right-36 animate-float" />
      <div className="glow-orb-violet w-56 h-56 bottom-20 left-10 animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 contact-title">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Get in Touch</span>
          <h2 className="section-title mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8">
            <div className="space-y-6">
              <div className="form-element">
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="glass-input"
                  required
                />
              </div>

              <div className="form-element">
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="glass-input"
                  required
                />
              </div>

              <div className="form-element">
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="glass-input resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn btn-glow w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="info-section space-y-6">
            <div className="info-card glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:daniyalhaider2273@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  daniyalhaider2273@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Pakistan (Available Worldwide)</p>
              </div>
            </div>

            <div className="info-card glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+923090619257" className="text-foreground hover:text-primary transition-colors">+92 309 0619257</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="info-card flex items-center gap-4 pt-4">
              <span className="text-muted-foreground text-sm">Follow me:</span>
              <div className="flex gap-3">
                <a href="https://github.com/daniyal3029" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(187_85%_53%_/_0.3)]">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/daniyal-haider-4b52582bb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(187_85%_53%_/_0.3)]">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
