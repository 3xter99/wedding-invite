import { wedding } from '../data/content';

export default function UnlockScreen({ unlocked, onUnlock }) {
  return (
    <div className={`unlock ${unlocked ? 'unlock--hidden' : ''}`}>
      <button type="button" className="unlock__inner" onClick={onUnlock} aria-label="Разблокировать приглашение">
        <div className="unlock__photo">
          <img src="/images/couple.jpg" alt="" />
        </div>

        <div className="unlock__lock">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
            <rect x="8" y="11" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
            <path d="M9 11V8a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <p className="unlock__text">
          Разблокируйте
          <br />
          приглашение
        </p>
      </button>
    </div>
  );
}

export function BackgroundMusic({ audioRef }) {
  return (
    <audio ref={audioRef} loop preload="auto">
      <source src={wedding.music.src} type="audio/mpeg" />
    </audio>
  );
}

export function MusicToggle({ onToggle }) {
  return (
    <button type="button" className="music-btn" onClick={onToggle} aria-label="Музыка">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 18V6l12-2v14" stroke="currentColor" strokeWidth="1" />
        <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="1" />
        <circle cx="18" cy="16" r="2.5" stroke="currentColor" strokeWidth="1" />
      </svg>
    </button>
  );
}
