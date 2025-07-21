'use client';

type VideoLayoutProps = {
  height?: number;
  width?: number;
  url?: string;
};

const VideoLayout: React.FC<VideoLayoutProps> = ({ height = 364, width = 768, url }) => {
  return (
    <div className="w-full">
       <video  
       controls
        preload="none"
        autoPlay
        muted
        playsInline
        aria-label="Video player"
        width={width}
        height={height}>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoLayout;
