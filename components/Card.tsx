import React from 'react';

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="w-full border-lightgray border-2 rounded-lg p-6 hover:">
      <div className="bg-aliceblue h-[40px] w-[40px] flex items-center justify-center rounded">{icon}</div>
        <h3 className="text-base font-semibold text-primary mt-2 mb-1">{title}</h3>
        <p className="text-secondary text-sm font-normal mb-0">{description}</p>
    </div>
  );
};

export default Card;
