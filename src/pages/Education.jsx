import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import { education } from '../data/education';

export default function Education() {
  const items = education.map((e) => ({
    title: e.degree,
    subtitle: e.institute,
    period: e.period,
    points: e.achievements,
  }));

  return (
    <div className="page container">
      <SectionTitle
        eyebrow="Education"
        title="How I got here."
        lead="The formal groundwork — though most of what I use daily came from building and breaking things."
      />
      <Timeline items={items} />
    </div>
  );
}
