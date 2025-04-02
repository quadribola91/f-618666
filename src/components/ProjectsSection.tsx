
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

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
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A responsive dashboard for e-commerce stores with sales analytics, inventory management, and customer insights.",
      image: "placeholder.svg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://example.com/project1",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A kanban-style task manager for teams with real-time updates, file attachments, and priority settings.",
      image: "placeholder.svg",
      tags: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      liveUrl: "https://example.com/project2",
      githubUrl: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      title: "Educational Platform",
      description: "An interactive learning platform for ICT and data processing courses with quizzes and progress tracking.",
      image: "placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://example.com/project3",
      githubUrl: "https://github.com/yourusername/project3",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
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
