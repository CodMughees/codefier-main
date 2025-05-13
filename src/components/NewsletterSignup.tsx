
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full md:max-w-md">
      <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-codefier-darkGray/70 border border-codefier-blue/30 rounded-full focus:outline-none focus:border-codefier-blue text-white pr-12"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "absolute right-1 top-1 bottom-1 px-4 rounded-full transition-all duration-300",
            isHovered ? "bg-gradient-blue" : "bg-codefier-blue"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <span>→</span>
          )}
        </button>
      </form>
      <p className="text-gray-400 text-sm mt-3">
        Join our newsletter for the latest industry insights and company news.
      </p>
    </div>
  );
};

export default NewsletterSignup;
