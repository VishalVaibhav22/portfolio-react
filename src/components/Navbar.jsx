import { cn } from "@/lib/utils"; // Utility for conditionally applying Tailwind CSS classes
import { Menu, X } from "lucide-react"; // Icons for menu (hamburger) and close (X)
import { useEffect, useState } from "react"; // React hooks for side effects and state management
import { ThemeToggle } from "./ThemeToggle"; // Component for theme (light/dark) toggle

// Array of navigation items with names and corresponding section links
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Define the Navbar component
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the page is scrolled
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu open/close

  // Effect hook to add and remove scroll event listener
  useEffect(() => {
    // Function to update 'isScrolled' state based on scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Set to true if scrolled more than 10px
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    // Navigation bar container
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300", // Base styles for fixed navbar
        // Apply different styles based on scroll state for a shrinking effect
        isScrolled ? "py-3 bg-background/80 backdrop-blur-sm shadow-sm" : "py-5"
      )}
    >
      {/* Navbar content container: logo, desktop links, mobile toggle */}
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo/Site Title, links to home section */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">My</span> Portfolio {/* Styled text */}
          </span>
        </a>

        {/* Desktop Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name} // Unique key for each navigation item
              href={item.href} // Link destination
              className="relative text-foreground/80 hover:text-primary transition-colors duration-300 group"
            >
              {item.name} {/* Navigation item name */}
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <ThemeToggle /> {/* Theme toggle button for desktop */}
        </div>

        {/* Mobile Navigation Toggle Button (visible only on small screens) */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)} // Toggles mobile menu state
          className="md:hidden p-2 text-foreground z-50" // Styling for the button
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} // Accessibility label
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Show X or Menu icon based on state */}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center", // Base styles for overlay
            "transition-all duration-300 md:hidden", // Transition and hide on desktop
            // Show/hide and make clickable based on 'isMenuOpen' state
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Mobile menu items container */}
          <div className="flex flex-col space-y-8 text-xl text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-foreground/80 hover:text-primary transition-colors duration-300 group"
                onClick={() => setIsMenuOpen(false)} // Close menu when an item is clicked
              >
                {item.name}
                {/* Hover underline effect for mobile menu */}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="pt-4">
              <ThemeToggle /> {/* Theme toggle button for mobile menu */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};