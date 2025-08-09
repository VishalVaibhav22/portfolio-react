import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react"; // Import necessary icons

// Define the Footer component
export const Footer = () => {
  return (
    // Footer container with styling for border, spacing, and background
    <footer className="relative border-t border-border mt-12 py-6 px-4 bg-card">
      {/* Content container, centered with responsive flex layout */}
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Copyright notice */}
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Vishal Vaibhav. All rights reserved.{" "}
          {/* Dynamically gets current year */}
        </p>

        {/* Container for social media links and scroll-to-top button */}
        <div className="flex items-center gap-6">
          {/* Social media icons with links */}
          <div className="flex items-center space-x-6">
            {/* GitHub link */}
            <a
              href="https://github.com/VishalVaibhav22"
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security best practice
              className="text-muted-foreground hover:text-primary transition-colors" // Styling for icons
              aria-label="GitHub" // Accessibility label
            >
              <Github size={20} /> {/* GitHub icon */}
            </a>
            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/in/vishal-vaibhav-735041291/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} /> {/* LinkedIn icon */}
            </a>
            {/* Instagram link */}
            <a
              href="https://www.instagram.com/vishal22_v/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} /> {/* Instagram icon */}
            </a>
          </div>

          {/* Scroll to Top Button */}
          <a
            href="#hero" // Scrolls to the element with id="hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors" // Styling for the button
            aria-label="Scroll to top" // Accessibility label
          >
            <ArrowUp size={20} /> {/* Up arrow icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};
