import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate progress bar
    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: function() {
        const prog = Math.round(this.progress() * 100);
        setProgress(prog);
      }
    });

    // Fade out text and progress
    tl.to([textRef.current, percentRef.current, progressBarRef.current?.parentElement], {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.inOut'
    });

    // Scale and fade out preloader
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
        onComplete();
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      {/* Background orbs */}
      <div className="glow-orb w-96 h-96 -top-48 -left-48 animate-pulse-glow" />
      <div className="glow-orb-violet w-64 h-64 bottom-20 right-20 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Light beam */}
      <div className="light-beam opacity-50" />

      {/* Content */}
      <div ref={textRef} className="text-center mb-12 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-foreground">Daniyal</span>
          <span className="text-primary text-glow"> Haider</span>
        </h1>
        <p className="text-muted-foreground text-lg tracking-widest uppercase">Software Engineer</p>
      </div>

      {/* Progress bar */}
      <div className="progress-bar-container relative z-10">
        <div ref={progressBarRef} className="progress-bar" />
      </div>

      {/* Percentage */}
      <div ref={percentRef} className="mt-6 text-primary font-mono text-2xl text-glow relative z-10">
        {progress}%
      </div>
    </div>
  );
};

export default Preloader;
