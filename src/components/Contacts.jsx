import { wedding } from '../data/content';
import { Animate } from './Animate';
import { TelegramIcon } from './Icons';

export default function Contacts() {
  return (
    <section className="contacts section">
      <Animate>
        <h2 className="section-heading">ОСТАЛИСЬ ВОПРОСЫ?</h2>
      </Animate>

      <div className="contacts__list">
        <Animate delay={150} className="contacts__item">
          <p>
            Жених:{' '}
            <a href={`tel:${wedding.contacts.phoneRaw}`}>{wedding.contacts.phone}</a>
          </p>
          <a
            className="contacts__wa"
            href={wedding.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Телеграм жениха"
          >
            <TelegramIcon />
          </a>
        </Animate>

        <Animate delay={280} className="contacts__item">
          <p>
            Невеста:{' '}
            <a href={`tel:${wedding.contacts.phone2Raw}`}>{wedding.contacts.phone2}</a>
          </p>
          <a
            className="contacts__wa"
            href={wedding.contacts.whatsappUrl2}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Телеграм невесты"
          >
            <TelegramIcon />
          </a>
        </Animate>
      </div>
    </section>
  );
}
