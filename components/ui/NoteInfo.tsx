'use client';

import React from 'react';
type NoteInfoProps = {
  description: React.ReactNode;
};

const NoteInfo: React.FC<NoteInfoProps> = ({ description}) => {


  return (
    <div className={`w-full px-3.5 py-2.5 rounded bg-warning-100 `}>
      {description}
    </div>
  );
};

export default NoteInfo;