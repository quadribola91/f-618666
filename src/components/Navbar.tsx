
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/90 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-primary">
            <Link to="/">Omobolarinwa Quadri</Link>
          </div>

          {isMobile ? (
            <button 
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="flex items-center gap-8">
              <NavLinks />
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="py-4 animate-fade-in">
            <NavLinks isMobile={true} closeMenu={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ 
  isMobile = false,
  closeMenu = () => {}
}: { 
  isMobile?: boolean;
  closeMenu?: () => void;
}) => {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    // { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className={`${isMobile ? "flex flex-col gap-4" : "flex gap-8"}`}>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`
            font-medium hover:text-primary transition-colors
            ${isMobile ? "text-lg py-2" : ""}
          `}
          onClick={closeMenu}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
