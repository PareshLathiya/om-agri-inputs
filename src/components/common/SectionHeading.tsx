import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-dark/70 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
    </motion.div>
  );
}