import { wedding } from '../data/content';
import { Animate } from './Animate';
import { SectionDivider } from './Icons';

export default function Location() {
  return (
    <section className="location section">
      <Animate>
        <SectionDivider heartPosition="right" />
      </Animate>

      <Animate delay={100}>
        <h2 className="section-heading">МЕСТО ТОРЖЕСТВА</h2>
      </Animate>

      <Animate delay={200}>
        <p className="location__name">{wedding.venue.name}</p>
        <p className="location__address">{wedding.venue.address}</p>
      </Animate>

      <Animate delay={320} variant="scale">
        <a
          className="btn-map"
          href={wedding.venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          КАРТА
        </a>
      </Animate>
    </section>
  );
}
