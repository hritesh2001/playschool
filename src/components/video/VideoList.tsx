
import React from 'react';
import { Video } from '@/data/educationData';

type Props = {
  videos: Video[];
  currentVideo: Video;
  onVideoSelect: (video: Video) => void;
};

const VideoList: React.FC<Props> = ({ videos, currentVideo, onVideoSelect }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">Video Lessons</h3>
      <div className="space-y-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
              currentVideo.id === video.id 
                ? 'bg-edu-blue text-white shadow-md' 
                : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => onVideoSelect(video)}
          >
            <div className="flex-shrink-0 w-16 h-12 mr-3 relative rounded-md overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-white fill-current"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className={`font-medium truncate ${currentVideo.id === video.id ? 'text-white' : 'text-gray-800'}`}>
                {video.title}
              </h4>
              <p className={`text-xs truncate ${currentVideo.id === video.id ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                {video.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
