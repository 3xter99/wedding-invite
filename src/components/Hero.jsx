import { wedding } from '../data/content';
import { useCountdown } from '../hooks/useCountdown';

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(wedding.dateISO);

  return (
    <section className="hero">
      <div className="hero__bg hero__bg--animated" aria-hidden="true">
        <img src="/images/couple.jpg" alt="" />
      </div>

      <div className="hero__content">
        <div className="hero__monogram hero__enter hero__enter--1">
          <span className="hero__initial hero__initial--left">{wedding.groomInitial}</span>
          <div className="hero__names-vertical">
            <span>{wedding.groom.toUpperCase()}</span>
            <span className="hero__names-amp">&</span>
            <span>{wedding.bride.toUpperCase()}</span>
          </div>
          <span className="hero__initial hero__initial--right">{wedding.brideInitial}</span>
        </div>

        <div className="countdown hero__enter hero__enter--2">
          {[
            { value: days, label: 'дней' },
            { value: hours, label: 'часов' },
            { value: minutes, label: 'минут' },
            { value: seconds, label: 'секунд' },
          ].map((item, index) => (
            <div
              key={item.label}
              className="countdown__item"
              style={{ '--i': index }}
            >
              <div className="countdown__circle">
                <span className="countdown__value">{item.value}</span>
              </div>
              <span className="countdown__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
