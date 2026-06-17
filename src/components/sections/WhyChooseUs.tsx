import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { whyChooseUs } from '@/data/content';
import * as Icons from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck: Icons.ShieldCheck,
  Lightbulb: Icons.Lightbulb,
  LeafyGreen: Icons.LeafyGreen,
  Users: Icons.Users,
  TrendingUp: Icons.TrendingUp,
  Smile: Icons.Smile,
};

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 bg-light">
      <div className="container-padding">
        <SectionHeading title="Why Farmers Choose Us" subtitle="Trusted partner for modern agriculture" />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-dark/70">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}