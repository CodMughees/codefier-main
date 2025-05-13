
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

const StatItem = ({ value, label, delay = 0 }: StatItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={cn(
      "text-center opacity-0",
      isVisible && "animate-fade-in"
    )} style={{ animationDelay: `${delay}ms` }}>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

const AboutUsSection = () => {
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
    
    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute left-0 right-0 h-full bg-gradient-to-b from-codefier-black via-codefier-darkGray/20 to-codefier-black -z-10"></div>
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-codefier-blue/5 blur-3xl -z-5"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )}>
              About <span className="text-codefier-blue">CodeFier</span>
            </h2>
            
            <div className={cn(
              "space-y-6 opacity-0",
              isVisible && "animate-fade-in delay-100"
            )}>
              <p className="text-gray-300">
                Founded in 2020, CodeFier has rapidly emerged as a leading digital services agency in Pakistan. We combine innovative technology with creative solutions to help businesses transform their digital presence.
              </p>
              
              <p className="text-gray-300">
                Based in Islamabad, our team of experts brings together diverse skills and perspectives to create cutting-edge digital products that stand out in the market.
              </p>
              
              <div className="my-8 py-6 border-t border-b border-codefier-blue/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <StatItem value="300+" label="Projects Completed" delay={200} />
                  <StatItem value="98%" label="Client Satisfaction" delay={300} />
                  <StatItem value="50+" label="Team Members" delay={400} />
                  <StatItem value="12+" label="Industry Awards" delay={500} />
                </div>
              </div>
              
              <p className="text-gray-300">
                Our mission is to deliver exceptional digital experiences that help our clients achieve their business goals. We're committed to staying at the forefront of technology and design trends to provide innovative solutions.
              </p>
            </div>

            <div className={cn(
              "mt-8 opacity-0",
              isVisible && "animate-fade-in delay-200"
            )}>
              <a
                href="#contact"
                className="py-3 px-8 bg-gradient-blue rounded-full text-white font-medium hover:shadow-lg hover:shadow-codefier-blue/20 transition-all duration-300 inline-block"
              >
                Work With Us
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className={cn(
              "relative h-[400px] w-full max-w-[500px] rounded-2xl overflow-hidden opacity-0",
              isVisible && "animate-scale-in delay-300"
            )}>
              {/* 3D Code Experience Visual */}
              <div className="absolute inset-0 bg-codefier-darkGray rounded-2xl border border-codefier-blue/30 overflow-hidden">
                {/* Digital grid lines animation */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,209,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,209,255,0.07)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Code-like elements */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-codefier-black/50 border-b border-codefier-blue/20 flex items-center px-4 gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 text-sm text-gray-400 font-mono">codefier_digital_experience.js</span>
                </div>
                
                <div className="pt-16 px-6 font-mono text-sm">
                  <div className="text-gray-400">
                    <span className="text-codefier-blue">class</span> <span className="text-green-400">DigitalExperience</span> {"{"}
                  </div>
                  <div className="pl-4 text-gray-400 mt-2">
                    <span className="text-codefier-blue">constructor</span>() {"{"}
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-purple-400">this</span>.innovation = <span className="text-yellow-300">"cutting-edge"</span>;
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-purple-400">this</span>.technology = [<span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Node"</span>, <span className="text-yellow-300">"AI"</span>];
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-purple-400">this</span>.creativity = <span className="text-orange-400">Infinity</span>;
                  </div>
                  <div className="pl-4 text-gray-400">
                    {"}"}
                  </div>
                  
                  <div className="mt-4 text-gray-400">
                    <span className="text-purple-400">createSolution</span>(<span className="text-orange-400">client</span>) {"{"}
                  </div>
                  <div className="pl-4 text-gray-400">
                    <span className="text-codefier-blue">return</span> <span className="text-purple-400">new</span> <span className="text-green-400">DigitalTransformation</span>({"{"}
                  </div>
                  <div className="pl-8 text-gray-400">
                    client: client,
                  </div>
                  <div className="pl-8 text-gray-400">
                    quality: <span className="text-yellow-300">"premium"</span>,
                  </div>
                  <div className="pl-8 text-gray-400">
                    impact: <span className="text-yellow-300">"transformational"</span>
                  </div>
                  <div className="pl-4 text-gray-400">
                    {"});"} 
                  </div>
                  <div className="text-gray-400">
                    {"}"}
                  </div>
                  <div className="text-gray-400">
                    {"}"}
                  </div>
                </div>
                
                {/* Animated cursor */}
                <div className="absolute h-4 w-2 bg-codefier-blue animate-pulse-glow" style={{ top: "288px", left: "178px" }}></div>
                
                {/* Flying particles */}
                <div className="absolute h-1 w-1 rounded-full bg-codefier-blue animate-float opacity-70" style={{ top: "30%", left: "20%", animationDelay: "0s" }}></div>
                <div className="absolute h-1 w-1 rounded-full bg-codefier-blue animate-float opacity-70" style={{ top: "60%", left: "80%", animationDelay: "1s" }}></div>
                <div className="absolute h-1 w-1 rounded-full bg-codefier-blue animate-float opacity-70" style={{ top: "80%", left: "30%", animationDelay: "2s" }}></div>
                <div className="absolute h-1 w-1 rounded-full bg-codefier-blue animate-float opacity-70" style={{ top: "20%", left: "70%", animationDelay: "3s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
