
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.15; // Low volume for pleasant shopping experience
      audio.loop = true;
      
      // Auto-play with user interaction
      const playAudio = () => {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          console.log('Audio autoplay prevented by browser');
        });
      };

      // Try to play after a small delay
      const timer = setTimeout(playAudio, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          console.log('Could not play audio');
        });
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex gap-2">
      <audio
        ref={audioRef}
        src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
        preload="auto"
      />
      
      <Button
        variant="outline"
        size="sm"
        onClick={togglePlay}
        className="bg-black/80 border-white/20 text-white hover:bg-white hover:text-black"
      >
        {isPlaying ? '⏸️' : '▶️'}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={toggleMute}
        className="bg-black/80 border-white/20 text-white hover:bg-white hover:text-black"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </Button>
    </div>
  );
};

export default BackgroundMusic;
