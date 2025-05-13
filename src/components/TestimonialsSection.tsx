
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechGrowth Inc",
      testimonial: "CodeFier transformed our outdated website into a lead-generating powerhouse. Their attention to detail and innovative approach exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Alex Chen",
      role: "CEO",
      company: "StartupLabs",
      testimonial: "Working with CodeFier was a game-changer for our business. Their mobile app development made our vision a reality and helped us secure additional funding.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "InnovateSoft",
      testimonial: "The UI/UX design that CodeFier delivered has significantly improved our user engagement metrics. Our customers love the intuitive and modern interface.",
      rating: 4,
    },
    {
      name: "Zara Khan",
      role: "E-commerce Director",
      company: "FashionTrends",
      testimonial: "Their SEO services have dramatically improved our search rankings and online visibility. We've seen a 200% increase in organic traffic since working with them.",
      rating: 5,
    },
    {
      name: "David Wilson",
      role: "Operations Manager",
      company: "LogisticsPlus",
      testimonial: "CodeFier's digital marketing strategies have delivered measurable results for our business. Their team is responsive, professional, and truly dedicated.",
      rating: 4,
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("testimonials");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  useEffect(() => {
    // Auto scroll every 5 seconds
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  useEffect(() => {
    // Scroll to active testimonial
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const cardWidth = scrollContainer.querySelector('div')?.clientWidth || 0;
      const padding = 16; // Approximation of the padding/margin
      scrollContainer.scrollTo({
        left: activeIndex * (cardWidth + padding),
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-codefier-black via-codefier-darkGray/30 to-codefier-black -z-10"></div>
      <div className="absolute top-1/4 right-0 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-codefier-blue/5 blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Client <span className="text-codefier-blue">Testimonials</span>
          </h2>
          <p className={cn(
            "text-gray-400 max-w-2xl mx-auto opacity-0",
            isVisible && "animate-fade-in delay-100"
          )}>
            Don't just take our word for it. Here's what our clients have to say about their experience working with CodeFier.
          </p>
        </div>
        
        <div className={cn(
          "opacity-0",
          isVisible && "animate-fade-in delay-200"
        )}>
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-start">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                  active={index === activeIndex}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "w-8 bg-codefier-blue" 
                    : "w-2 bg-gray-600 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
