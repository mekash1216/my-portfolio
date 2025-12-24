import { IconType } from "react-icons";

type SkillProps = {
  name: string;
  level: string;
  icon: IconType;
};

export default function SkillCard({ name, level, icon: Icon }: SkillProps) {
  return (
    <div className="group bg-white border rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Icon className="text-5xl text-blue-600 mx-auto mb-6" />

      <h3 className="text-lg font-semibold mb-2">{name}</h3>

      <p className="text-sm text-gray-500">{level}</p>

      <div className="mt-6 h-1 w-0 bg-blue-600 mx-auto transition-all duration-300 group-hover:w-12"></div>
    </div>
  );
}
