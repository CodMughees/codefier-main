
import { useState } from "react";
import { cn } from "@/lib/utils";
import NewsletterSignup from "./NewsletterSignup";

const SocialIcon = ({ href, icon, label }: { href: string; icon: string; label: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300",
        isHovered ? "bg-codefier-blue text-black scale-110" : "bg-codefier-darkGray text-white"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div dangerouslySetInnerHTML={{ __html: icon }} />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="text-2xl font-bold text-white flex items-center">
              <span className="text-codefier-blue animate-text-glow mr-1">&lt;</span>
              Code
              <span className="text-codefier-blue">Fier</span>
              <span className="text-codefier-blue animate-text-glow">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-4">
              Premium digital services agency based in Islamabad, Pakistan. Delivering cutting-edge solutions for modern businesses.
            </p>
            <div className="mt-6 flex space-x-3">
              <SocialIcon 
                href="https://facebook.com" 
                icon='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>' 
                label="Facebook"
              />
              <SocialIcon 
                href="https://twitter.com" 
                icon='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>' 
                label="Twitter"
              />
              <SocialIcon 
                href="https://instagram.com" 
                icon='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>' 
                label="Instagram"
              />
              <SocialIcon 
                href="https://linkedin.com" 
                icon='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>' 
                label="LinkedIn"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  SEO
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-codefier-blue transition-colors">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <NewsletterSignup />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-codefier-blue/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CodeFier. All rights reserved.
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-codefier-blue text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-codefier-blue text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
