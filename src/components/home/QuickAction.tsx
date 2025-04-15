
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface QuickActionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  to: string;
}

const QuickAction = ({ title, description, icon, color, to }: QuickActionProps) => (
  <Link 
    to={to} 
    className="group relative overflow-hidden rounded-xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-white/10"
  >
    <div className={`absolute top-0 right-0 w-20 h-20 ${color} opacity-10 rounded-bl-full transform scale-100 group-hover:scale-150 transition-transform duration-300`}></div>
    <div className="flex flex-col h-full relative z-10">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
      <div className="mt-auto pt-4 flex items-center text-sm text-game-primary group-hover:text-game-accent transition-colors">
        <span>Get started</span>
        <ArrowRight size={16} className="ml-1 transform transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </div>
  </Link>
);

export default QuickAction;
