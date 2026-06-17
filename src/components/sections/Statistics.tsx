import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { value: 5000, suffix: '+', label: 'Farmers Served' },
  { value: 100, suffix: '+', label: 'Dealers' },
  { value: 7, suffix: '+', label: 'Premium Products' },
  { value: 100, suffix: '%', label: 'Genuine Products' },
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    intervalRef.current = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end && intervalRef.current) clearInterval(intervalRef.current);
    }, stepTime);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isVisible, value]);

  return <span>{count}{suffix}</span>;
}

export default function Statistics() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-padding">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-green-200 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}