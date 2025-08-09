import {
  Instagram, // Instagram icon
  Linkedin,  // LinkedIn icon
  Mail,      // Mail icon
  MapPin,    // Map pin icon
  Send,      // Send icon
  Github,    // GitHub icon
} from "lucide-react"; // Import icons from Lucide
import { cn } from "@/lib/utils"; // Utility for combining Tailwind CSS classes
import { useToast } from "@/hooks/use-toast"; // Hook for displaying toast notifications
import { useState, useRef } from "react"; // React hooks for state and references
import emailjs from '@emailjs/browser'; // Library for sending emails via EmailJS

// Define the ContactSection component
export const ContactSection = () => {
  const { toast } = useToast(); // Initialize toast notification hook
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission status
  const form = useRef(); // Ref to access the form DOM element

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true); // Set submitting state to true

    // Retrieve EmailJS service, template, and public keys from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Send email using EmailJS
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          // Show success toast on successful email send
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          e.target.reset(); // Clear form fields
        },
        (error) => {
          // Show error toast on failure
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again.",
            variant: "destructive", // Style for destructive toast
          });
          console.log('FAILED...', error.text); // Log error for debugging
        },
      )
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state after completion
      });
  };

  return (
    // Section container for contact details and form
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {/* Centered content container */}
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's <span className="text-primary"> Talk</span>
        </h2>
        {/* Section description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm passionate about building innovative solutions and always excited to connect with like-minded people. Whether you have a project idea or just want to talk tech, my inbox is always open!
        </p>
        {/* Grid for contact info and form, responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Column */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              {/* Email contact card */}
              <div className="group bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4">
                {/* Icon container */}
                <div className="p-3 rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                {/* Email text and link */}
                <div className="text-left min-w-0 flex-1">
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a
                    href="mailto:vishal2212.vaibhav@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all text-sm sm:text-base"
                  >
                    vishal2212.vaibhav@gmail.com
                  </a>
                </div>
              </div>
              {/* Location contact card */}
              <div className="group bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4">
                {/* Icon container */}
                <div className="p-3 rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                {/* Location text */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground">India</p>
                </div>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="pt-8 text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
              <div className="flex space-x-6 justify-center md:justify-start">
                {/* GitHub link */}
                <a href="https://github.com/VishalVaibhav22" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"><Github size={28} /></a>
                {/* LinkedIn link */}
                <a href="https://www.linkedin.com/in/vishal-vaibhav-735041291/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"><Linkedin size={28} /></a>
                {/* Instagram link */}
                <a href="https://www.instagram.com/vishal22_v/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"><Instagram size={28} /></a>
              </div>
            </div>
          </div>
          {/* Contact Form Column */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-left">Send a Message</h3>
            {/* Form element with ref and submit handler */}
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              {/* Name input field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">Your Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Vishal Vaibhav" />
              </div>
              {/* Email input field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">Your Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="vishal2212.vaibhav@gmail.com" />
              </div>
              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">Your Message</label>
                <textarea id="message" name="message" required rows="4" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Hi Vishal, I'd like to discuss..."></textarea>
              </div>
              {/* Submit button with loading state */}
              <button
                type="submit"
                disabled={isSubmitting} // Disable button during submission
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  { "opacity-50 cursor-not-allowed": isSubmitting } // Styling for disabled state
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"} {/* Button text changes during submission */}
                <Send size={16} /> {/* Send icon */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};