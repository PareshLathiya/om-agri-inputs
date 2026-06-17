import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { galleryImages } from '@/data/content';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-20 bg-light">
      <div className="container-padding">
        <SectionHeading title="Agriculture Gallery" subtitle="Glimpses of our products, farms, and farmer engagements" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
              onClick={() => setSelected(img.src)}
            >
              <img src={img.src} alt={img.category} loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-sm font-medium">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 text-white" aria-label="Close"><X size={30} /></button>
          <img src={selected} alt="Gallery" className="max-h-[80vh] max-w-full rounded-lg" />
        </div>
      )}
    </section>
  );
}