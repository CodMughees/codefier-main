
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "SEO",
    "Digital Marketing",
  ];
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Service text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-32 w-32 rounded-full bg-codefier-blue/10 blur-3xl -top-10 -right-10"></div>
        <div className="absolute h-64 w-64 rounded-full bg-codefier-blue/5 blur-3xl bottom-20 -left-20"></div>
        <div className="absolute h-48 w-48 rounded-full bg-purple-500/5 blur-3xl top-40 right-1/3"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,209,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,209,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div
            className={cn(
              "w-full lg:w-1/2 space-y-6 opacity-0",
              isVisible && "animate-fade-in"
            )}
          >
            <div className="inline-block bg-gradient-to-r from-codefier-blue to-purple-500 text-black font-medium rounded-full px-4 py-1 text-sm">
              Premium Digital Agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas into
              <span className="text-codefier-blue animate-text-glow ml-2">
                Digital Excellence
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg">
              We deliver cutting-edge solutions for modern businesses focused on
              growth and innovation.
            </p>
            <div className="h-16">
              <div className="flex items-center text-lg md:text-xl">
                <span className="text-gray-300 mr-2">Specializing in:</span>
                <span className="text-codefier-blue font-semibold">
                  {services[currentServiceIndex]}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="py-3 px-8 bg-gradient-blue rounded-full text-white font-medium hover:shadow-lg hover:shadow-codefier-blue/20 transition-all duration-300 text-center border-glow"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="py-3 px-8 bg-transparent border border-codefier-blue/50 hover:border-codefier-blue text-white rounded-full font-medium hover:bg-codefier-blue/10 transition-all duration-300 text-center"
              >
                Our Services
              </a>
            </div>
          </div>
          <div
            className={cn(
              "w-full lg:w-1/2 flex justify-center relative opacity-0",
              isVisible && "animate-fade-in delay-300"
            )}
          >
            {/* Animated cube with glow effect */}
            <div className="relative h-64 w-64 md:h-96 md:w-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-codefier-blue/30 to-purple-600/30 rounded-2xl blur-3xl opacity-30"></div>
              <div className="relative h-full w-full bg-codefier-darkGray rounded-2xl border border-codefier-blue/30 p-6">
                {/* Decorative code elements */}
                <div className="absolute top-6 left-6">
                  <div className="text-codefier-blue text-sm md:text-base font-mono">
                    &lt;div class="future"&gt;
                  </div>
                  <div className="pl-4 mt-2 text-white/80 text-sm md:text-base font-mono">
                    &lt;innovation/&gt;
                    <br />
                    &lt;creativity/&gt;
                    <br />
                    &lt;excellence/&gt;
                  </div>
                  <div className="text-codefier-blue text-sm md:text-base font-mono mt-2">
                    &lt;/div&gt;
                  </div>
                </div>
                {/* Digital grid lines animation */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,209,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,209,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Pulsing dot */}
                <div className="absolute bottom-6 right-6 h-3 w-3 rounded-full bg-codefier-blue animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer animate-bounce">
        <a href="#services" className="flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-2">Scroll Down</span>
          <svg 
            className="w-5 h-5 text-codefier-blue" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
