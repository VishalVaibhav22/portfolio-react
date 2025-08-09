import React, { useCallback, useRef } from "react"; // React hooks for memoization and element references
import useEmblaCarousel from "embla-carousel-react"; // Embla Carousel hook for creating carousels
import Autoplay from "embla-carousel-autoplay"; // Autoplay plugin for Embla Carousel
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"; // Icons for navigation and external links

// Array of project data, each object represents a project card
const projects = [
  {
    id: 1,
    title: "SafeSpace - AI Stress Monitoring",
    description: "AI-powered stress detection with 85% accuracy via real-time biometric analysis.",
    image: "/assets/SafeSpace.png", // Path to project image
    tags: ["Next.js", "Python", "TensorFlow", "AI/ML"], // Technologies used
    demoUrl: "#", // Demo link (placeholder)
    highlights: ["85% accuracy", "Real-time sensor integration", "CNN-based ML"], // Key achievements/features
  },
  {
    id: 2,
    title: "TrafficFlowX - Smart Traffic System",
    description: "ML-driven traffic visualization, reducing manual monitoring by 60% with OpenCV.",
    image: "/assets/trafficflowX.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Python", "OpenCV"],
    demoUrl: "#",
    highlights: ["60% monitoring reduction", "Real-time optimization", "OpenCV vision"],
  },
  {
    id: 3,
    title: "Lernosphere - Gamified Learning",
    description: "Adaptive gamified platform for kids, boosting engagement by 40% with interactive paths.",
    image: "/assets/lernosphere.jpeg",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "#",
    highlights: ["40% engagement increase", "1000+ concurrent users", "Adaptive algorithms"],
  },
];

// Duplicate projects array to enable a seamless infinite loop in the carousel
const duplicatedProjects = [...projects, ...projects];

// Define the ProjectsSection component
export const ProjectsSection = () => {
  // Create a stable ref for the Autoplay plugin instance
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }));

  // Initialize Embla Carousel with loop and autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  // Callback function to scroll to the previous slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]); // Dependency on emblaApi

  // Callback function to scroll to the next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]); // Dependency on emblaApi

  return (
    // Section container for projects
    <section id="projects" className="py-24 px-4 relative">
      {/* Centered content container */}
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        {/* Section description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Innovative AI, ML, and full-stack solutions with proven real-world impact.
        </p>

        {/* Embla Carousel main wrapper */}
        <div className="embla relative">
          {/* Carousel viewport, where 'emblaRef' is attached */}
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            {/* Carousel container holding all slides */}
            <div className="embla__container flex">
              {/* Map through duplicated projects to create individual slides */}
              {duplicatedProjects.map((project, index) => (
                // Each slide item
                <div className="embla__slide p-2" key={`${project.id}-${index}`}>
                  {/* Project card structure */}
                  <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col">
                    {/* Project image area */}
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Image styling with hover effect
                      />
                      {/* Overlay for image hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Project details area */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Project tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
                            {tag} {/* Individual tag */}
                          </span>
                        ))}
                      </div>
                      {/* Project title */}
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      {/* Project description */}
                      <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                        {project.description}
                      </p>
                      {/* Project highlights */}
                      <div className="mb-4">
                        <div className="space-y-1">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-primary"></div> {/* Small decorative dot */}
                              <span>{highlight}</span> {/* Individual highlight */}
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Live Demo Link */}
                      <div className="mt-auto">
                        <a
                          href={project.demoUrl}
                          target="_blank" // Opens link in a new tab
                          rel="noopener noreferrer" // Security best practice
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-300 group/link"
                        >
                          View Project
                          <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" /> {/* External link icon with hover effect */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Button for Carousel Navigation */}
          <button
            className="embla__prev absolute top-1/2 -translate-y-1/2 left-[-1rem] md:left-[-2rem] p-2 rounded-full bg-card/80 hover:bg-card border text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            onClick={scrollPrev} // Calls scrollPrev function
            aria-label="Previous project" // Accessibility label
          >
            <ArrowLeft /> {/* Left arrow icon */}
          </button>
          {/* Next Button for Carousel Navigation */}
          <button
            className="embla__next absolute top-1/2 -translate-y-1/2 right-[-1rem] md:right-[-2rem] p-2 rounded-full bg-card/80 hover:bg-card border text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            onClick={scrollNext} // Calls scrollNext function
            aria-label="Next project" // Accessibility label
          >
            <ArrowRight /> {/* Right arrow icon */}
          </button>
        </div>
        
        {/* Link to GitHub Profile */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 group"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/VishalVaibhav22"
          >
            Check My GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" /> {/* Arrow icon with hover effect */}
          </a>
        </div>
      </div>
    </section>
  );
};