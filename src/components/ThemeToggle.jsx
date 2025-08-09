import { Moon, Sun } from "lucide-react"; // Import Moon and Sun icons
import { useEffect, useState } from "react"; // React hooks for side effects and state management
import { cn } from "@/lib/utils"; // Utility for conditionally applying Tailwind CSS classes

// Define the ThemeToggle component
export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track current theme (dark or light)

  // Effect hook to set initial theme on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme"); // Get theme preference from local storage
    // Check if the user's system prefers dark mode
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set theme based on stored preference or system preference
    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      setIsDarkMode(true); // Set state to dark mode
      document.documentElement.classList.add("dark"); // Add 'dark' class to the <html> element
    } else {
      localStorage.setItem("theme", "light"); // Default to light mode if no preference found
      setIsDarkMode(false); // Set state to light mode
      document.documentElement.classList.remove("dark"); // Remove 'dark' class from <html> element
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newIsDarkMode = !prev; // Toggle the theme state
      if (newIsDarkMode) {
        document.documentElement.classList.add("dark"); // Apply dark theme classes
        localStorage.setItem("theme", "dark"); // Save dark theme preference
      } else {
        document.documentElement.classList.remove("dark"); // Remove dark theme classes (apply light)
        localStorage.setItem("theme", "light"); // Save light theme preference
      }
      return newIsDarkMode; // Return the new theme state
    });
  };

  return (
    // Button to toggle the theme
    <button
      onClick={toggleTheme} // Call toggleTheme function on click
      className={cn(
        "p-2 rounded-full transition-colors duration-300", // Base styling
        "hover:bg-secondary focus:outline-none" // Hover and focus styling
      )}
      aria-label="Toggle theme" // Accessibility label for the button
    >
      {/* Conditionally render Sun or Moon icon based on current theme */}
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" /> // Sun icon for dark mode
      ) : (
        <Moon className="h-5 w-5 text-blue-900" /> // Moon icon for light mode
      )}
    </button>
  );
};