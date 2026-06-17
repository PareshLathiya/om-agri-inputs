import SectionHeading from '@/components/common/SectionHeading';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left font-medium text-dark hover:bg-gray-50"
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-dark/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { ref } = useScrollAnimation();
  return (
    <section id="faq" className="py-20 bg-light">
      <div className="container-padding max-w-3xl mx-auto">
        <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know" />
        <div ref={ref} className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}