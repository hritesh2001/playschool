import React, { useEffect, useRef, useState } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import Hls from 'hls.js';

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  src: string; // Changed from manifestUrl to src for consistency
};

type Props = {
  video: Video;
};

const VideoPlayer: React.FC<Props> = ({ video }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Plyr | null>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  // Cleanup function to destroy player and HLS instance
  const cleanupPlayer = () => {
    if (hlsRef.current) {
      hlsRef.current.detachMedia();
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (playerRef.current) {
      try {
        playerRef.current.destroy();
      } catch (err) {
        console.warn('Error during Plyr cleanup:', err);
      }
      playerRef.current = null;
    }

    if (containerRef.current) {
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
    }

    videoRef.current = null;
  };

  // Initialize player function
  const initializePlayer = async () => {
    if (!videoRef.current || !containerRef.current) {
      setError('Video element or container not found.');
      return;
    }

    const plyrOptions: Plyr.Options = {
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'duration',
        'mute',
        'volume',
        'fullscreen',
      ],
      keyboard: { focused: true, global: true },
      tooltips: { controls: true, seek: true },
    };

    try {
      if (video.src.endsWith('.m3u8')) {
        if (Hls.isSupported()) {
          const hls = new Hls({
            enableWorker: false,
          });

          hls.on(Hls.Events.ERROR, (event, data) => {
            let errorMessage = 'Failed to load video stream.';
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  errorMessage = 'Network error loading video stream.';
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  errorMessage = 'Media error occurred.';
                  break;
                default:
                  errorMessage = 'Video playback error.';
                  break;
              }
            }
            setError(errorMessage);
          });

          hls.loadSource(video.src);
          hls.attachMedia(videoRef.current);
          hlsRef.current = hls;

          playerRef.current = new Plyr(videoRef.current, plyrOptions);
        } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
          videoRef.current.src = video.src;
          playerRef.current = new Plyr(videoRef.current, plyrOptions);
        } else {
          setError('HLS video playback is not supported in this browser.');
        }
      } else {
        videoRef.current.src = video.src;
        playerRef.current = new Plyr(videoRef.current, plyrOptions);
      }
    } catch (err) {
      setError('Failed to initialize video player.');
    }
  };

  useEffect(() => {
    isMounted.current = true;

    // Clean up previous player
    cleanupPlayer();

    // Create a new video element
    if (containerRef.current) {
      const newVideo = document.createElement('video');
      newVideo.className = 'plyr-react plyr w-full aspect-video';
      newVideo.setAttribute('playsinline', '');
      newVideo.setAttribute('controls', '');
      newVideo.setAttribute('poster', video.thumbnail);
      newVideo.addEventListener('error', () => {
        setError('Failed to load video or thumbnail.');
      });
      containerRef.current.appendChild(newVideo);
      videoRef.current = newVideo;
    }

    // Initialize the new player
    initializePlayer();

    return () => {
      isMounted.current = false;
      cleanupPlayer();
    };
  }, [video.id]);

  return (
    <div className="video-player-container rounded-lg overflow-hidden shadow-xl bg-gray-50">
      {error ? (
        <div className="p-4 text-red-500 text-center">
          <p>{error}</p>
          <button
            onClick={() => {
              setError(null);
              cleanupPlayer();
              initializePlayer();
            }}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      ) : (
        <>
          <div ref={containerRef} />
          <div className="ml-10">
            <h2 className="text-2xl font-bold mt-3 mb-2">{video.title}</h2>
            <p className="text-gray-600">{video.description}</p>
            <div className="mt-2 text-sm text-gray-700 pb-5">
              Duration: {video.duration}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;