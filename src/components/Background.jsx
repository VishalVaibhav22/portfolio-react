import { useEffect, useState } from "react"; // React hooks for side effects and state management

// Define the Background component
export const Background = () => {
  const [stars, setStars] = useState([]); // State to hold an array of star properties
  const [meteors, setMeteors] = useState([]); // State to hold an array of meteor properties

  // Effect hook to generate stars and meteors on component mount and handle window resize
  useEffect(() => {
    generateStars(); // Initial generation of stars
    generateMeteors(); // Initial generation of meteors

    // Event listener for window resize to regenerate stars
    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize); // Add resize listener

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to generate random star properties
  const generateStars = () => {
    // Calculate number of stars based on screen size for density
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i, // Unique ID for each star
        size: Math.random() * 3 + 1, // Random size between 1px and 4px
        x: Math.random() * 100, // Random horizontal position (0-100%)
        y: Math.random() * 100, // Random vertical position (0-100%)
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Random animation duration between 2s and 6s
      });
    }
    setStars(newStars); // Update stars state
  };

  // Function to generate random meteor properties
  const generateMeteors = () => {
    const numberOfMeteors = 4; // Fixed number of meteors
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i, // Unique ID for each meteor
        size: Math.random() * 2 + 1, // Random size (affects length and width via multiplication in style)
        x: Math.random() * 100, // Random horizontal start position
        y: Math.random() * 20, // Random vertical start position (top 20% of screen)
        delay: Math.random() * 15, // Random animation delay up to 15s
        animationDuration: Math.random() * 3 + 3, // Random animation duration between 3s and 6s
      });
    }
    setMeteors(newMeteors); // Update meteors state
  };

  return (
    // Fixed container for stars and meteors, covering the entire viewport
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Render stars */}
      {stars.map((star) => (
        <div
          key={star.id} // Unique key for React list rendering
          className="star animate-float" // Apply 'star' CSS class and 'float' animation
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {/* Render meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id} // Unique key for React list rendering
          className="meteor animate-meteor" // Apply 'meteor' CSS class and 'meteor' animation
          style={{
            width: meteor.size * 50 + "px", // Meteor length based on its size property
            height: meteor.size * 2 + "px", // Meteor thickness based on its size property
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay, // Animation delay
            animationDuration: meteor.animationDuration + "s", // Animation duration
          }}
        />
      ))}
    </div>
  );
};