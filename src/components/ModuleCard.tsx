
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  className?: string;
  highlighted?: boolean;
}

const ModuleCard = ({ 
  title, 
  description, 
  icon, 
  features, 
  className,
  highlighted = false
}: ModuleCardProps) => {
  return (
    <div 
      className={cn(
        "group relative p-6 rounded-xl transition-all duration-300 h-full",
        highlighted 
          ? "bg-gradient-to-br from-solides-blue to-solides-teal text-white shadow-lg" 
          : "bg-white border border-gray-200 hover:border-solides-teal/50 hover:shadow-md",
        className
      )}
    >
      {highlighted && (
        <Badge className="absolute -top-2 -right-2 bg-solides-accent text-white">
          Popular
        </Badge>
      )}
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-full mb-4",
        highlighted 
          ? "bg-white/20 text-white" 
          : "bg-solides-light text-solides-blue"
      )}>
        {icon}
      </div>
      <h3 className={cn(
        "text-xl font-semibold mb-3",
        !highlighted && "text-solides-dark"
      )}>
        {title}
      </h3>
      <p className={cn(
        "mb-5",
        !highlighted && "text-gray-600"
      )}>
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li 
            key={index}
            className={cn(
              "flex items-start",
              !highlighted && "text-gray-700"
            )}
          >
            <svg
              className={cn(
                "h-5 w-5 mr-2 shrink-0",
                highlighted ? "text-white" : "text-solides-teal"
              )}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleCard;
