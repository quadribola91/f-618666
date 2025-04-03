
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Omobolarinwa Quadri</h3>
            <p className="text-gray-300">
              A passionate IT specialist and frontend developer
              creating memorable digital experiences.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/quadribola91" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/omobolarinwa-quadri-a207b3216/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:quadribola91@gmail.com" className="text-gray-300 hover:text-primary">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">IT Support & Consulting</li>
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">ICT & Data Processing Training</li>
              <li className="text-gray-300">UI/UX Design</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Omobolarinwa Quadri    <br/>   <em>HighcloudInc.</em> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
