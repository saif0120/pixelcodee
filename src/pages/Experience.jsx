import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import { experience } from '../data/experience';

export default function Experience() {
  const items = experience.map((e) => ({
    title: e.role,
    subtitle: e.company,
    meta: e.location,
    period: e.period,
    points: e.points,
    tech: e.tech,
  }));

  return (
    <div className="page container">
      <SectionTitle
        eyebrow="Experience"
        title="Where I've worked."
        lead="Three roles, one throughline: shipping frontend that's fast, accessible, and pleasant to use."
      />
      <Timeline items={items} />
    </div>
  );
}
