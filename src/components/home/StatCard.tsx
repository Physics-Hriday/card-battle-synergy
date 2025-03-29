
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
    <div className="flex items-center mb-2">
      <div className="mr-2">{icon}</div>
      <h3 className="text-sm text-gray-300">{title}</h3>
    </div>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default StatCard;
