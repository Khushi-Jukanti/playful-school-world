
import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { Video } from '@/data/educationData';

type Props = {
  video: Video;
};

const VideoPlayer: React.FC<Props> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      // Initialize Plyr
      playerRef.current = new Plyr(videoRef.current, {
        controls: [
          'play-large', // The large play button in the center
          'play', // Play/pause playback
          'progress', // The progress bar and scrubber for playback and buffering
          'current-time', // The current time of playback
          'duration', // The full duration of the media
          'mute', // Toggle mute
          'volume', // Volume control
          'captions', // Toggle captions
          'settings', // Settings menu
          'pip', // Picture-in-picture
          'fullscreen', // Toggle fullscreen
        ],
        keyboard: { focused: true, global: true },
        tooltips: { controls: true, seek: true },
        captions: { active: true, language: 'en', update: true },
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoRef]);

  useEffect(() => {
    // If video source changes, update the player source
    if (playerRef.current && videoRef.current) {
      videoRef.current.src = video.src;
      playerRef.current.source = {
        type: 'video',
        sources: [
          {
            src: video.src,
            type: 'video/mp4',
          },
        ],
      };
    }
  }, [video.src]);

  return (
    <div className="video-player-container rounded-lg overflow-hidden shadow-xl">
      <video
        ref={videoRef}
        className="plyr-react plyr"
        poster={video.thumbnail}
        controls
        crossOrigin="anonymous"
      >
        <source src={video.src} type="video/mp4" />
        <p>Your browser doesn't support HTML5 video. Here is a <a href={video.src}>link to the video</a> instead.</p>
      </video>
      <h2 className="text-2xl font-bold mt-4 mb-2">{video.title}</h2>
      <p className="text-gray-600">{video.description}</p>
      <div className="mt-2 text-sm text-gray-500">Duration: {video.duration}</div>
    </div>
  );
};

export default VideoPlayer;
