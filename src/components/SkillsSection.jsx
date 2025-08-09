import {
  Code,          // Icon for code
  Database,      // Icon for database
  GitBranch,     // Icon for Git/version control
  Wind,          // Icon for Tailwind CSS
  Server,        // Icon for backend server
  BrainCircuit,  // Icon for AI/Machine Learning concepts
  Atom,          // Icon for React/Next.js
  Terminal,      // Icon for VS Code/CLI tools
  Cloud,         // Icon for cloud platforms like Vercel
  FileCode,      // Icon for general code files (e.g., JavaScript, Python)
  FileText,      // Icon for text files (e.g., LaTeX)
  Bot,           // Icon for AI/Bots
  Activity,      // Icon for data/activity (e.g., NumPy)
} from "lucide-react"; // Import icons from Lucide

// Structured array to organize skills into categories with associated icons
const skillCategories = [
  {
    title: "Frontend", // Category title
    skills: [
      { name: "HTML/CSS", icon: <Code size={32} /> },
      { name: "JavaScript", icon: <FileCode size={32} /> },
      { name: "React.js", icon: <Atom size={32} /> },
      { name: "Next.js", icon: <Atom size={32} /> },
      { name: "Tailwind CSS", icon: <Wind size={32} /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <Server size={32} /> },
      { name: "Python", icon: <FileCode size={32} /> },
      { name: "MongoDB", icon: <Database size={32} /> },
      { name: "MySQL", icon: <Database size={32} /> },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", icon: <BrainCircuit size={32} /> },
      { name: "Keras", icon: <Bot size={32} /> },
      { name: "NumPy", icon: <Activity size={32} /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", icon: <GitBranch size={32} /> },
      { name: "VS Code", icon: <Terminal size={32} /> },
      { name: "Vercel", icon: <Cloud size={32} /> },
      { name: "LaTeX", icon: <FileText size={32} /> },
    ],
  },
];

// Define the SkillsSection component
export const SkillsSection = () => {
  return (
    // Section container for skills
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      {/* Centered content container */}
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Tech Stack</span>
        </h2>

        {/* Container for skill categories with vertical spacing */}
        <div className="space-y-12">
          {/* Map through each skill category */}
          {skillCategories.map((category, index) => (
            <div key={index}> {/* Unique key for each category */}
              {/* Category title */}
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary/80">
                {category.title}
              </h3>
              {/* Flex container to display skills within the category, with wrapping and gaps */}
              <div className="flex flex-wrap justify-center gap-4">
                {/* Map through each skill in the current category */}
                {category.skills.map((skill, skillIndex) => (
                  // Individual skill card
                  <div
                    key={skillIndex} // Unique key for each skill
                    className="group bg-card p-4 rounded-lg shadow-xs card-hover flex flex-col items-center gap-3 w-32 h-32 justify-center animate-float" // Styling for skill card with a floating animation
                    style={{
                      // Apply random animation duration and delay for varied floating effect
                      animationDuration: `${Math.random() * 3 + 4}s`, // Duration between 4-7 seconds
                      animationDelay: `${Math.random() * 2}s`,        // Delay up to 2 seconds
                    }}
                  >
                    {/* Skill icon with hover scale effect */}
                    <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    {/* Skill name */}
                    <p className="font-medium text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};