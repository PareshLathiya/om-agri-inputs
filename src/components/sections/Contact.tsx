import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { company } from '@/data/content';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '@/components/common/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-padding">
        <SectionHeading title="Get In Touch" subtitle="We're here to help your farm grow" />
        <div ref={ref} className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-light p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">Contact Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><MapPin className="text-primary" /><span>{company.address.line1}, {company.address.city} - {company.address.pincode}{company.address.state ? `, ${company.address.state}` : ''}</span></div>

                <a href={`tel:${company.phone}`} className="flex items-center gap-3 hover:text-primary"><Phone className="text-primary" />{company.phone}</a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-primary"><Mail className="text-primary" />{company.email}</a>
                <div className="flex items-center gap-3"><Clock className="text-primary" /><span>Mon-Sat {company.workingHours.weekdays}, Sun {company.workingHours.sunday}</span></div>
              </div>
            </div>

          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-light p-6 rounded-xl space-y-4"
            action="https://formspree.io/f/maqzzqpd"
            method="POST"
          >
            <h3 className="font-bold text-lg">Send a Message</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" name="name" className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mobile</label>
              <input type="tel" name="mobile" className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary" placeholder="Phone number" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea name="message" rows={4} className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary" placeholder="How can we help?" required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}