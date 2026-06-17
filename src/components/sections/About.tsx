import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { about } from '@/data/content';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-padding">
        <SectionHeading title={about.title} subtitle="Dedicated to farmer prosperity since 1993" />
        <div ref={ref} className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {about.content.map((para, i) => (
              <p key={i} className="text-dark/80 text-lg leading-relaxed">{para}</p>
            ))}
            <p className="text-primary font-semibold text-lg">— Paresh Lathiya, Founder</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/Founder_img.jpeg"
              alt="Founder_img"
              className="w-full aspect-[4/3] rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold">7+</p>
              <p className="text-sm">Years of Trust</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}