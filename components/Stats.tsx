import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
  value: number;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div className="text-center">
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        {count}+
      </span>
      <p className="text-sm md:text-base text-gray-400 mt-2 tracking-widest uppercase">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { value: 12, label: 'Years of Experience' },
    { value: 200, label: 'Projects Finished' },
    { value: 500, label: 'Happy Customers' },
  ];

  return (
    <section id="stats" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatItem value={stat.value} label={stat.label} />
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-px h-16 bg-gray-700 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;