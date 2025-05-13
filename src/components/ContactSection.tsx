
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverState, setHoverState] = useState({
    name: false,
    email: false,
    message: false,
    submit: false,
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill all fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-codefier-blue/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Get in <span className="text-codefier-blue">Touch</span>
          </h2>
          <p className={cn(
            "text-gray-400 max-w-2xl mx-auto opacity-0",
            isVisible && "animate-fade-in delay-100"
          )}>
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
        
        <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className={cn(
            "space-y-6 opacity-0",
            isVisible && "animate-scale-in delay-200"
          )}>
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <div
                className={cn(
                  "relative border rounded-md transition-all duration-300",
                  hoverState.name || formState.name 
                    ? "border-codefier-blue" 
                    : "border-gray-600"
                )}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setHoverState((prev) => ({ ...prev, name: true }))}
                  onBlur={() => setHoverState((prev) => ({ ...prev, name: false }))}
                  className="w-full px-4 py-3 bg-transparent rounded-md focus:outline-none text-white"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <div
                className={cn(
                  "relative border rounded-md transition-all duration-300",
                  hoverState.email || formState.email 
                    ? "border-codefier-blue" 
                    : "border-gray-600"
                )}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setHoverState((prev) => ({ ...prev, email: true }))}
                  onBlur={() => setHoverState((prev) => ({ ...prev, email: false }))}
                  className="w-full px-4 py-3 bg-transparent rounded-md focus:outline-none text-white"
                  placeholder="Your email"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <div
                className={cn(
                  "relative border rounded-md transition-all duration-300",
                  hoverState.message || formState.message 
                    ? "border-codefier-blue" 
                    : "border-gray-600"
                )}
              >
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setHoverState((prev) => ({ ...prev, message: true }))}
                  onBlur={() => setHoverState((prev) => ({ ...prev, message: false }))}
                  className="w-full px-4 py-3 bg-transparent rounded-md focus:outline-none text-white min-h-[120px]"
                  placeholder="Your message"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-3 px-6 rounded-full font-medium transition-all duration-300 border-glow",
                hoverState.submit ? "bg-gradient-blue" : "bg-codefier-blue"
              )}
              onMouseEnter={() => setHoverState((prev) => ({ ...prev, submit: true }))}
              onMouseLeave={() => setHoverState((prev) => ({ ...prev, submit: false }))}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
          
          <div className={cn(
            "mt-10 pt-8 border-t border-codefier-blue/20 flex flex-col md:flex-row justify-between gap-6 opacity-0",
            isVisible && "animate-fade-in delay-300"
          )}>
            <div>
              <h4 className="text-white font-medium mb-1">Email</h4>
              <a href="mailto:hello@codefier.com" className="text-codefier-blue hover:underline">
                hello@codefier.com
              </a>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-1">Phone</h4>
              <a href="tel:+921234567890" className="text-codefier-blue hover:underline">
                +92 123 456 7890
              </a>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-1">Address</h4>
              <p className="text-gray-400">
                F-7, Blue Area, Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
