
import { Button } from "@/components/ui/button";
import { AnimationDirection } from "@/utils/scrollAnimation";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.setAttribute('data-animate', AnimationDirection.LEFT);
      // Make hero content animate immediately
      setTimeout(() => {
        contentRef.current?.classList.add('animated');
      }, 300);
    }
    
    if (imageRef.current) {
      imageRef.current.setAttribute('data-animate', AnimationDirection.RIGHT);
      // Make hero image animate immediately
      setTimeout(() => {
        imageRef.current?.classList.add('animated');
      }, 600);
    }
    
    if (scrollRef.current) {
      scrollRef.current.setAttribute('data-animate', AnimationDirection.FADE);
      setTimeout(() => {
        scrollRef.current?.classList.add('animated');
      }, 1200);
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-20 flex flex-col justify-center relative"
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" ref={contentRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              IT Specialist & <span className="text-primary">Frontend Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              I specialize in creating visually stunning websites, providing IT support,
              and teaching ICT & Data Processing to help businesses and individuals succeed
              in the digital world.
            </p>

            <div className="flex gap-4 pt-2">
              <a href="#contact">
                <Button>
                  Contact Me
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline">
                  My Projects
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center" ref={imageRef}>
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                  <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <p className="text-center">Your Profile Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" ref={scrollRef}>
        <a href="#about" className="text-gray-400 hover:text-primary">
          <ArrowDown size={24} />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
