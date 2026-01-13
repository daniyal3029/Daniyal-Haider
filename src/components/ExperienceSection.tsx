import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Globe, Code, Briefcase, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        role: 'Mobile App Developer',
        company: 'EmbinX',
        type: 'Full-time',
        icon: Smartphone,
        description: [
            'Develop cross-platform mobile applications using Flutter',
            'Focus on performance optimization, clean UI, and scalable architecture',
            'Work on real-world production apps'
        ],
        current: true
    },
    {
        id: 2,
        role: 'Frontend Dashboard Developer Intern',
        company: 'ThingsBoard',
        type: 'Internship',
        icon: Globe,
        description: [
            'Built interactive and responsive IoT dashboards',
            'Technologies: Angular, HTML, CSS',
            'Worked with real-time data visualization'
        ],
        current: false
    },
    {
        id: 3,
        role: 'Software Engineering Intern',
        company: 'EPTeck',
        type: 'Internship',
        icon: Code,
        description: [
            'Contributed to production-level software solutions',
            'Strengthened teamwork, development workflows, and problem-solving skills'
        ],
        current: false
    },
    {
        id: 4,
        role: 'Freelance Software Developer',
        company: 'Self-Employed',
        type: 'Freelance',
        icon: Briefcase,
        description: [
            'Delivered custom mobile apps, web apps, and backend solutions',
            'Worked directly with clients to gather requirements and deploy solutions'
        ],
        current: true
    }
];

const ExperienceSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo('.experience-title',
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
            gsap.fromTo('.experience-card',
                { opacity: 0, x: -60, filter: 'blur(5px)' },
                {
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    duration: 0.7,
                    stagger: 0.2,
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
        <section id="experience" ref={sectionRef} className="relative py-8 overflow-hidden">
            {/* Background orbs */}
            <div className="glow-orb w-72 h-72 top-20 -left-36 animate-pulse-glow" />
            <div className="glow-orb-violet w-64 h-64 bottom-20 right-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 experience-title">
                    <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Experience</span>
                    <h2 className="section-title">Professional Journey</h2>
                </div>

                {/* Experience Timeline */}
                <div ref={containerRef} className="max-w-4xl mx-auto space-y-6">
                    {experiences.map((exp) => {
                        const Icon = exp.icon;
                        return (
                            <div key={exp.id} className="experience-card glass-card p-6 hover:border-primary/30 transition-all duration-300 group">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                            <Icon size={28} className="text-primary" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                            <div>
                                                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-muted-foreground text-sm mt-1">
                                                    {exp.company} • {exp.type}
                                                </p>
                                            </div>
                                            {exp.current && (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium">
                                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <ul className="space-y-2">
                                            {exp.description.map((item, idx) => (
                                                <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                                                    <span className="text-primary mt-1.5">▹</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
