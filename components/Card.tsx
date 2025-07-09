'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
};

const Card: React.FC<CardProps> = ({ title, description, icon, href }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) router.push(href);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full border-2 rounded-lg p-6 hover:border-fd-primary group transition-all duration-300  ${href ? 'cursor-pointer' : ''}`}
    >
      <div className="bg-aliceblue h-[40px] w-[40px] flex items-center justify-center rounded">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-primary mt-2 mb-1 group-hover:text-fd-primary">{title}</h3>
      <p className="text-secondary text-sm font-normal mb-0">{description}</p>
    </div>
  );
};

export default Card;
