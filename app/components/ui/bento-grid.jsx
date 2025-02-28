import { cn } from "@/app/lib/utils";
import "../../globals.css";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description }) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700",
        className
      )}
    >
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};
