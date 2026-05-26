import { useCallback, useEffect, useRef, useState } from 'react';
import { wedding } from '../data/content';

export function useUnlock() {
  const [unlocked, setUnlocked] = useState(false);
  const audioRef = useRef(null);
  const wasPlayingRef = useRef(true);

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    audio.volume = wedding.music.volume;

    if (audio.error) {
      audio.load();
    }

    try {
      await audio.play();
      wasPlayingRef.current = true;
      return true;
    } catch {
      return false;
    }
  }, []);

  const unlock = useCallback(() => {
    // iOS/Safari требуют play() прямо в обработчике клика, не в useEffect
    void startMusic();
    setUnlocked(true);
  }, [startMusic]);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await startMusic();
    } else {
      audio.pause();
      wasPlayingRef.current = false;
    }
  }, [startMusic]);

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
