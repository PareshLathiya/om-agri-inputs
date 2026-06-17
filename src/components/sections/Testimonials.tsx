import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/content';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 bg-white">
      <div className="container-padding">
        <SectionHeading title="What Farmers & Dealers Say" subtitle="Real experiences from the field" />
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="bg-light p-6 rounded-xl shadow-sm"
            >
              <div className="flex text-gold mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-dark/80 italic mb-4">"{t.quote}"</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-dark/60">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}