import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { visionMission } from '@/data/content';
import { Eye, Target, Heart } from 'lucide-react';

export default function VisionMission() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 bg-white">
      <div className="container-padding">
        <SectionHeading title="Our Vision & Mission" />
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-light p-8 rounded-2xl shadow-sm text-center"
          >
            <Eye className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-dark/70">{visionMission.vision}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-primary text-white p-8 rounded-2xl shadow-lg text-center scale-105"
          >
            <Target className="h-10 w-10 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-white/90">{visionMission.mission}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-light p-8 rounded-2xl shadow-sm text-center"
          >
            <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Core Values</h3>
            <ul className="text-dark/70 space-y-1">
              {visionMission.values.map(v => (
                <li key={v}>✓ {v}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}