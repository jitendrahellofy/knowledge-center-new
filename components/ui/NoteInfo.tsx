'use client';

import React from 'react';
type NoteInfoProps = {
  description: React.ReactNode;
  bgColor?: string;
};

const NoteInfo: React.FC<NoteInfoProps> = ({ description, bgColor = 'bg-warning-100 dark:!bg-warning-900'}) => {


  return (
    <div className={`w-full px-3.5 py-2.5 rounded ${bgColor}`}>
      {description}
    </div>
  );
};

export default NoteInfo;