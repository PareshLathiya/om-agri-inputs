import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { products } from '@/data/content';
import PlaceholderImage from '@/components/common/PlaceholderImage';
import { Leaf } from 'lucide-react';

export default function Products() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="products" className="py-20 bg-light">
      <div className="container-padding">
        <SectionHeading title="Our Premium Products" subtitle="Science-backed fertilizers for every crop stage" />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow"
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center relative">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <PlaceholderImage className="w-full h-full border-0" alt={product.name} />
                )}
                <div className="absolute top-3 right-3 bg-gold text-dark text-xs font-bold px-2 py-1 rounded-full">
                  PREMIUM
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
                <p className="text-dark/70 mb-3">{product.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {product.specs.split('|').map(spec => (
                    <span key={spec} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {spec.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}