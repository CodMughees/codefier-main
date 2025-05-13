
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    setActiveSection(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg border-b border-codefier-blue/20"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#home"
            className="text-2xl font-bold text-white flex items-center"
          >
            <span className="text-codefier-blue animate-text-glow mr-1">&lt;</span>
            Code
            <span className="text-codefier-blue">Fier</span>
            <span className="text-codefier-blue animate-text-glow">/&gt;</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "cursor-pointer transition-all hover:text-codefier-blue",
                activeSection === link.id
                  ? "text-codefier-blue font-medium"
                  : "text-gray-300"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-codefier-darkGray/95 backdrop-blur-lg p-4 border-t border-codefier-blue/20 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "cursor-pointer transition-all hover:text-codefier-blue py-2",
                  activeSection === link.id
                    ? "text-codefier-blue font-medium border-l-2 border-codefier-blue pl-2"
                    : "text-gray-300 pl-2"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
