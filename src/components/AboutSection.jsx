// Import necessary icons from the lucide-react library
import { Code, Server, Cloud } from "lucide-react";

// Define the AboutSection component
export const AboutSection = () => {
  return (
    // Section container with padding and relative positioning
    <section id="about" className="py-24 px-4 relative">
      {/* Centered content container with a max-width */}
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Grid layout for photo and text, responsive for mobile and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Column for the profile photo */}
          <div className="md:col-span-1 flex justify-center">
            {/* Container for the circular photo with styling */}
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <img
                src="/assets/myphoto.jpg" // Image source for your photo
                alt="Vishal Vaibhav" // Alt text for accessibility
                className="rounded-full w-full h-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
          </div>

          {/* Column for the bio and call-to-action buttons */}
          <div className="md:col-span-2 space-y-6">
            {/* Your main title/role */}
            <h3 className="text-2xl font-semibold text-center md:text-left">
              Full-Stack Developer & AI Enthusiast
            </h3>

            {/* First paragraph of your bio */}
            <p className="text-muted-foreground text-center md:text-left">
              I'm a full-stack developer who loves building robust and intuitive
              web applications. My passion lies in crafting seamless digital
              experiences, from creating smooth and responsive user interfaces
              with <strong>React</strong> to engineering powerful and scalable
              backend services with <strong>Node.js</strong> and{" "}
              <strong>Python</strong>.
            </p>

            {/* Second paragraph of your bio */}
            <p className="text-muted-foreground text-center md:text-left">
              I'm deeply interested in leveraging AI to make applications
              smarter, more data-driven, and genuinely helpful for people. I
              believe technology should not just work well, but create
              meaningful impact in users' lives.
            </p>

            {/* Container for the call-to-action buttons, responsive layout */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              {/* "Let's Talk" button, links to contact section */}
              <a href="#contact" className="cosmic-button">
                Let's Talk
              </a>
              {/* "Download CV" button, opens CV in a new tab */}
              <a
                href="https://drive.google.com/file/d/1_om-xWdBmEpi4GHguxPa2JZ15-ptwO97/view?usp=sharing"
                target="_blank" // Opens link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
