import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { hero, company } from '@/data/content';
import Button from '@/components/common/Button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-light to-green-50 pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80')] bg-cover bg-center opacity-10" />
      <div className="container-padding relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-tight mb-4"
          >
            {hero.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl font-hindi text-primary font-semibold mb-2"
          >
            {company.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-dark/70 mb-8 max-w-xl"
          >
            {company.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button size="lg" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              View Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Phone className="mr-2 h-5 w-5" /> Contact Us
            </Button>
          </motion.div>

          {/* Floating stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md">
            {hero.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-dark/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}