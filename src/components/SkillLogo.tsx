
interface SkillLogoProps {
  name: string;
  logo: string;
}

const SkillLogo = ({ name, logo }: SkillLogoProps) => {
  return (
    <div className="group animate-fade-in flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:scale-110">
      <div className="w-16 h-16 flex items-center justify-center">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg" 
        />
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300 text-center">
        {name}
      </span>
    </div>
  );
};

export default SkillLogo;
