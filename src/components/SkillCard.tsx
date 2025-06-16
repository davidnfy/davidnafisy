
interface SkillCardProps {
  name: string;
  logo: string;
  color: string;
}

const SkillCard = ({ name, logo, color }: SkillCardProps) => {
  return (
    <div className="group animate-fade-in bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: color + '20' }}>
          <img src={logo} alt={`${name} logo`} className="w-10 h-10 object-contain" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default SkillCard;
