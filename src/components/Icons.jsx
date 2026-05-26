export function HeartIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SectionDivider({ heartPosition = 'center' }) {
  return (
    <div className={`divider divider--${heartPosition} divider--animated`} aria-hidden="true">
      <span className="divider__line" />
      <HeartIcon className="divider__heart" />
      <span className="divider__line" />
    </div>
  );
}

export function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
      <path
        d="M8.5 16.5l-.5 2 2-.5 6.5-6.5a3 3 0 1 0-4-4L8.5 16.5z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
