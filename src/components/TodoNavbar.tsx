
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TodoNavbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-hightodo-blue">HighTodo</span>
          <span className="text-xs text-muted-foreground ml-2 italic">cultivating daily tasks</span>
        </div>

        {isMobile ? (
          <button 
            onClick={toggleMenu}
            className="text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <NavLinks />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="container mx-auto px-4 py-4 border-t border-gray-100">
          <NavLinks isMobile={true} />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  const navItems = [
    { label: "All Tasks", href: "/" },
    { label: "Completed", href: "#completed" },
    { label: "About", href: "#about" },
  ];

  return (
    <div className={`${isMobile ? "flex flex-col gap-4" : "flex gap-4"}`}>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`
            font-medium text-gray-600 hover:text-hightodo-blue transition-colors
            ${isMobile ? "py-2" : ""}
          `}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default TodoNavbar;
