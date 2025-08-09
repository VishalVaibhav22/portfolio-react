import { Navbar } from "../components/Navbar"; // Imports the Navbar component
import { HeroSection } from "../components/HeroSection"; // Imports the HeroSection component
import { AboutSection } from "../components/AboutSection"; // Imports the AboutSection component
import { SkillsSection } from "../components/SkillsSection"; // Imports the SkillsSection component
import { ProjectsSection } from "../components/ProjectsSection"; // Imports the ProjectsSection component
import { ContactSection } from "../components/ContactSection"; // Imports the ContactSection component
import { Footer } from "../components/Footer"; // Imports the Footer component
import {Background} from "../components/Background" // Imports the Background component for animated background

// Define the Home component
export const Home = () => {
  return (
    // Main container div for the entire application, sets min-height, background, text color, and hides horizontal overflow
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects: Renders the starry background animation */}
      <Background />

      {/* Navbar: Displays the navigation bar at the top */}
      <Navbar />

      {/* Main Content Area: Contains all the primary sections of the portfolio */}
      <main>
        <HeroSection />    {/* Hero section with introduction and typing animation */}
        <AboutSection />   {/* About section with personal bio and photo */}
        <SkillsSection />  {/* Skills section showcasing tech stack with floating icons */}
        <ProjectsSection /> {/* Projects section featuring a carousel of projects */}
        <ContactSection /> {/* Contact section with contact info, social links, and a form */}
      </main>

      {/* Footer: Displays copyright and social media links at the bottom */}
      <Footer />
    </div>
  );
};