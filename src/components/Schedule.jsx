import { wedding } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Animate } from './Animate';
import { HeartIcon } from './Icons';

function TimelineRow({ item, index }) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`timeline__row ${visible ? 'timeline__row--visible' : ''}`}
      style={{ '--row-delay': `${index * 180}ms` }}
    >
      <div className="timeline__left">
        {index > 0 && <span className="timeline__dash" aria-hidden="true" />}
        <time className="timeline__time timeline__reveal">{item.time}</time>
        <span className="timeline__event timeline__reveal">{item.title}</span>
      </div>

      <div className="timeline__right">
        <p className="timeline__text timeline__reveal">{item.text}</p>
      </div>
    </div>
  );
}

export default function Schedule() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section className="schedule section">
      <Animate>
        <h2 className="schedule__heading">
          ПРОГРАММА
          <br />
          ДНЯ
        </h2>
      </Animate>

      <div ref={ref} className={`timeline ${visible ? 'timeline--visible' : ''}`}>
        <HeartIcon className="timeline__heart timeline__heart--top timeline__reveal" />

        {wedding.schedule.map((item, index) => (
          <TimelineRow key={item.time} item={item} index={index} />
        ))}

        <HeartIcon className="timeline__heart timeline__heart--bottom timeline__reveal" />
      </div>
    </section>
  );
}
