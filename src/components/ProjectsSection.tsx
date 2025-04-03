
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimationDirection } from "@/utils/scrollAnimation";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import A from "../lib/A.png";
import B from "../lib/B.png";
import C from "../lib/C.png";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.setAttribute('data-animate', AnimationDirection.FADE);
    }
    
    projectRefs.current.forEach((project, index) => {
      if (project) {
        // Alternate animations for projects
        const direction = index % 2 === 0 
          ? AnimationDirection.LEFT 
          : AnimationDirection.RIGHT;
        
        project.setAttribute('data-animate', direction);
      }
    });
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Real-Estate Dashboard",
      description: "A responsive dashboard for real estate listings with rent, lease, buy portals and Adminstrative insights via agents.",
      image: B,
      tags: ["React", "Tailwind CSS", "Firebase"],
      liveUrl: "https://rentwiteaseng.vercel.app",
      githubUrl: "https://github.com/quadribola91/realestateng",
    },
    {
      id: 2,
      title: "Job Connect",
      description: "An employment dashboard for connecting potential employers with job seekers",
      image: A,
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://Jobconnect.vercel.app",
      githubUrl: "https://github.com/quadribola91/jobconnect",
    },
    {
      id: 3,
      title: "HighCloud Tech",
      description: "An interactive enrollment platform for technology courses.",
      image: C,
      tags: ["React", "Firebase","Tailwind CSS"],
      liveUrl: "https://highcloud-tech.vercel.app",
      githubUrl: "https://github.com/quadribola91/HighcloudTech",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development
            and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
              ref={el => projectRefs.current[index] = el}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <ExternalLink size={14} />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Github size={14} />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
