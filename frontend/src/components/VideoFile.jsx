import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative h-screen">
      {/* Video container */}
      <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="images/pizzaVideo.mp4"
        ></video>
      </div>

      {/* Content overlay */}
      <div className="absolute  backdrop-blur-sm top-0 left-0 z-10 w-full h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Your Content Here</h1>
          <p className="text-lg">Any additional text or components can be placed here.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
