import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { benefits } from '@/data/content';
import * as Icons from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconComponents: Record<string, React.ComponentType<any>> = {
  Sprout: Icons.Sprout,
  Flower2: Icons.Flower2,
  TrendingUp: Icons.TrendingUp,
  Scissors: Icons.Scissors,
  Globe: Icons.Globe,
  Heart: Icons.Heart,
};

export default function ProductBenefits() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 bg-white">
      <div className="container-padding">
        <SectionHeading title="Product Benefits" subtitle="How our fertilizers transform your farm" />
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = iconComponents[benefit.icon] || Icons.Star;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{benefit.title}</h3>
                <p className="text-xs text-dark/60 mt-1">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}