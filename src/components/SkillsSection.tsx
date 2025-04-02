
import { Progress } from "@/components/ui/progress";
import { AnimationDirection } from "@/utils/scrollAnimation";
import { useEffect, useRef } from "react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const technicalRef = useRef<HTMLDivElement>(null);
  const otherSkillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.setAttribute('data-animate', AnimationDirection.FADE);
    }
    
    if (technicalRef.current) {
      technicalRef.current.setAttribute('data-animate', AnimationDirection.LEFT);
    }
    
    if (otherSkillsRef.current) {
      otherSkillsRef.current.setAttribute('data-animate', AnimationDirection.RIGHT);
    }
    
    if (educationRef.current) {
      educationRef.current.setAttribute('data-animate', AnimationDirection.UP);
    }
  }, []);

  const technicalSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Firebase", level: 65 },
  ];

  const otherSkills = [
    "IT Troubleshooting",
    "Network Administration",
    "Data Processing",
    "Technical Training",
    "UX/UI Design",
    "Responsive Design",
    "Git/GitHub",
  ];

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've developed a diverse set of skills across IT support, education, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={technicalRef}>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div ref={otherSkillsRef}>
              <h3 className="text-xl font-bold mb-6">Other Skills</h3>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div ref={educationRef} className="mt-12">
              <h3 className="text-xl font-bold mb-6">Education & Certifications</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h4 className="font-bold">Bachelor's Degree in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-400">Example University, 2015-2019</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h4 className="font-bold">Microsoft Certified: Azure Fundamentals</h4>
                  <p className="text-gray-600 dark:text-gray-400">Microsoft, 2020</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h4 className="font-bold">CompTIA A+ Certification</h4>
                  <p className="text-gray-600 dark:text-gray-400">CompTIA, 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
