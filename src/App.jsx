import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mouse, ChevronDown } from 'lucide-react';


import HeroHeadline from './components/HeroHeadline';
import ImpactMetrics from './components/ImpactMetrics';
import CarVisual from './components/CarVisual';
import SecondPhase from './components/SecondPhase';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const lettersRef = useRef([]);
  const statsRef = useRef(null);
  const carContainerRef = useRef(null);
  const newContentRef = useRef(null);
  const scrollPromptRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tlLoad = gsap.timeline();
      
      tlLoad.fromTo(lettersRef.current, 
        { y: 80, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 1.2, ease: "power4.out" }
      )
      .fromTo(statsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(carContainerRef.current,
        { scale: 0.85, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 1.8, ease: "expo.out" },
        "-=1.2"
      )
      .fromTo(scrollPromptRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );

      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        }
      });

      tlScroll.to(heroTextRef.current, { y: -150, opacity: 0, scale: 0.9, duration: 1 })
              .to(statsRef.current, { y: -100, opacity: 0, duration: 1 }, "<")
              .to(scrollPromptRef.current, { opacity: 0, duration: 0.3 }, "<")
              .to(carContainerRef.current, { scale: 1.6, y: "15vh", duration: 2, ease: "power1.inOut" }, "<");

      tlScroll.to(carContainerRef.current, { scale: 3, y: "100vh", opacity: 0, duration: 2, ease: "power2.in" })
              .fromTo(newContentRef.current, 
                { opacity: 0, y: 100, scale: 0.9 }, 
                { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }, 
                "-=1.5"
              );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#030303] text-white min-h-[300vh] font-sans selection:bg-red-600 selection:text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-[1000px]">
        
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-orange-400/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

        <HeroHeadline className= "mb-7"ref={heroTextRef} lettersRef={lettersRef} headline="WELCOME ITZFIZZ" />
        <ImpactMetrics ref={statsRef} />
        <CarVisual ref={carContainerRef} />
        
        <div ref={scrollPromptRef} className="absolute bottom-10 flex flex-col items-center z-20 opacity-0">
          <Mouse className="w-6 h-6 mb-2 animate-bounce text-gray-400" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Scroll</p>
          <ChevronDown className="w-4 h-4 mt-1 text-gray-500" />
        </div>

        <SecondPhase ref={newContentRef} />

      </div>
    </div>
  );
}
