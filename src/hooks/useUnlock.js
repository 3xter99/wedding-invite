import { useCallback, useEffect, useRef, useState } from 'react';
import { wedding } from '../data/content';

export function useUnlock() {
  const [unlocked, setUnlocked] = useState(false);
  const audioRef = useRef(null);
  const wasPlayingRef = useRef(true);

  const unlock = useCallback(() => {
    setUnlocked(true);
  }, []);

  useEffect(() => {
    if (!unlocked) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = wedding.music.volume;
    audio.play()
      .then(() => {
        wasPlayingRef.current = true;
      })
      .catch(() => {
        // Browser blocked autoplay — user can tap the music button later
      });
  }, [unlocked]);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        wasPlayingRef.current = true;
      } catch {
        // ignore
      }
    } else {
      audio.pause();
      wasPlayingRef.current = false;
    }
  }, []);

  // Если вкладка свернута — ставим музыку на паузу
  useEffect(() => {
    if (!unlocked) return;

    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        wasPlayingRef.current = !audio.paused;
        audio.pause();
        return;
      }

      if (wasPlayingRef.current) {
        audio.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [unlocked]);

  return { unlocked, unlock, audioRef, toggleMusic };
}
