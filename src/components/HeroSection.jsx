import { ArrowDown } from "lucide-react"; // Import the arrow down icon
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation component for typing effect

// Define the HeroSection component
export const HeroSection = () => {
  return (
    // Section container for the hero area, covering the full screen height
    <section
      id="hero" // Unique ID for navigation
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Centered content container with max-width and z-index to be above background effects */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Main heading with animated typing effect */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span>Hi, I'm </span>
            <span className="text-primary">
              <TypeAnimation
                sequence={[
                  "Vishal Vaibhav", // First text to type
                  2000, // Pause for 2 seconds
                  "a Full-Stack Developer", // Second text
                  2000, // Pause
                  "an AI Enthusiast", // Third text
                  2000, // Pause
                ]}
                wrapper="span" // Render as a span element
                speed={50} // Typing speed
                repeat={Infinity} // Loop the animation indefinitely
                cursor={true} // Show typing cursor
              />
            </span>
          </h1>

          {/* Sub-headline/description with a fade-in animation */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            As a full-stack developer, I build intelligent web applications and seamless digital experiences with a strong focus on integrating AI solutions.
          </p>

          {/* Call-to-action button with a fade-in animation */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Have a Look {/* Button text */}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator with bounce animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Cosmic Scroll </span> {/* Text hint */}
        <ArrowDown className="h-5 w-5 text-primary" /> {/* Down arrow icon */}
      </div>
    </section>
  );
};