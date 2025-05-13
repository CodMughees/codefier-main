
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  active: boolean;
}

const TestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  rating,
  active = false,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 mx-3 min-w-[280px] md:min-w-[350px] transition-all duration-300 border-codefier-blue/10",
        active ? "border-codefier-blue/50 scale-[1.02] blue-glow" : "border-codefier-blue/10 scale-100"
      )}
    >
      <div className="mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? "text-codefier-blue" : "text-gray-600"}>★</span>
        ))}
      </div>
      <p className="text-gray-300 italic mb-6">&ldquo;{testimonial}&rdquo;</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-blue flex items-center justify-center mr-3 text-white font-medium">
          {name[0]}
        </div>
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-gray-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
