
import { Card, CardContent } from "@/components/ui/card";
import { Code, Laptop, School } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate IT professional with experience in support, education, and frontend development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-800 border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Laptop className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">IT Support Specialist</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I provide comprehensive IT support solutions, troubleshooting hardware and software issues to ensure 
                smooth operations for businesses and individuals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <School className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">ICT & Data Processing Instructor</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I teach ICT and Data Processing skills, helping students and professionals acquire essential 
                digital literacy and data management capabilities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Frontend Web Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I build visually stunning and user-friendly websites and web applications using modern frontend 
                technologies including React, Tailwind CSS, and more.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">My Story</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            With a background in IT support, I've always been passionate about solving technical problems and helping others 
            navigate the digital world. This passion led me to become an instructor, sharing my knowledge with students and 
            professionals alike.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            My journey into frontend development was a natural progression of my love for technology and design. I enjoy creating 
            visually appealing interfaces that deliver exceptional user experiences. I'm constantly learning and expanding my 
            skillset to stay current with the latest web technologies and design trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
