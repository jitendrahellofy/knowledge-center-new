'use client';

import Image from "next/image";

type DefaultVectorProps = {
  height?: number;
  width?: number;
};

const DefaultVector: React.FC<DefaultVectorProps> = ({ height = 364, width = 768 }) => {
  return (
    <div className="w-full">
      <Image src="/defaultVecor.svg" width={width} height={height} alt="DummyImg" />
    </div>
  );
};

export default DefaultVector;
