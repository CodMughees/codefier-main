
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 flex flex-col h-full transition-all duration-300 opacity-0 hover:translate-y-[-5px] hover:border-codefier-blue/50 group",
        isVisible && "animate-scale-in"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 p-3 bg-codefier-blue/10 w-fit rounded-xl">
        <div
          className="text-3xl text-codefier-blue group-hover:scale-110 transition-transform duration-300"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-codefier-blue transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 flex-1">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-codefier-blue text-sm">Learn more</span>
        <svg
          className="w-5 h-5 text-codefier-blue transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("services");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      icon: '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><path d="M11 11l-4 4"></path></svg>',
      title: "Web Development",
      description: "Custom-built websites and web applications that are blazing fast, secure, and optimized for all devices.",
    },
    {
      icon: '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    },
    {
      icon: '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>',
      title: "UI/UX Design",
      description: "User-centered design solutions that optimize the user journey and create meaningful digital experiences.",
    },
    {
      icon: '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
      title: "SEO",
      description: "Search engine optimization services to boost organic traffic and improve visibility in search results.",
    },
    {
      icon: '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><path d="M21 16 v5 h-5"></path><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>',
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to build brand awareness and drive conversions across digital channels.",
    },
    {
      icon: '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets from threats and vulnerabilities.",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Our <span className="text-codefier-blue">Services</span>
          </h2>
          <p className={cn(
            "text-gray-400 max-w-2xl mx-auto opacity-0",
            isVisible && "animate-fade-in delay-100"
          )}>
            We deliver cutting-edge digital solutions tailored to help your business thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 right-0 h-64 w-64 rounded-full bg-codefier-blue/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default ServicesSection;
