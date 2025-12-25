import { IconType } from "react-icons";

type SkillProps = {
  name: string;
  level: string;
  icon: IconType;
};

export default function SkillCard({ name, level, icon: Icon }: SkillProps) {
  return (
    <div
      className="group bg-white border rounded-xl p-6 sm:p-8 text-center 
                    transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Icon */}
      <Icon className="text-4xl sm:text-5xl text-blue-600 mx-auto mb-4 sm:mb-6" />

      {/* Skill Name */}
      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
        {name}
      </h3>

      {/* Skill Level */}
      <p className="text-xs sm:text-sm text-gray-500">{level}</p>

      {/* Hover line */}
      <div className="mt-4 sm:mt-6 h-1 w-0 bg-blue-600 mx-auto transition-all duration-300 group-hover:w-12"></div>
    </div>
  );
}
