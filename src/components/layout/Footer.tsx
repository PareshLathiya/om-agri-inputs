import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, Linkedin, Youtube } from 'lucide-react';
import { company, products } from '@/data/content';


export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-gold mb-4">OM AGRI INPUTS</h3>
          <p className="text-gray-300 mb-4">{company.tagline}</p>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {company.address.line1}, {company.address.city} - {company.address.pincode}</span>
            <a href={`tel:${company.phone}`} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" /> {company.phone}</a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="h-4 w-4" /> {company.email}</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {['About', 'Products', 'Gallery', 'Contact', 'FAQ'].map(link => (
              <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-gold transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2 text-gray-300">
            {products.slice(0, 4).map(p => (
              <li key={p.name}><span className="text-sm">{p.name}</span></li>
            ))}
            <li><Link to="/" className="text-gold text-sm hover:underline">View All →</Link></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-semibold mb-4">Working Hours</h4>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="h-5 w-5 text-gold" />
            <div>
              <p>Mon-Sat: {company.workingHours.weekdays}</p>
              <p>Sun: {company.workingHours.sunday}</p>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            {/* Social icons */}
            <a href="https://www.linkedin.com/in/paresh-lathiya-a17115233/" className="text-gray-400 hover:text-gold" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@pareshlathiya7100" className="text-gray-400 hover:text-gold" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>

      <div className="container-padding mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} OM AGRI INPUTS. All rights reserved.</p>
        <p className="flex items-center gap-1">Designed with <Heart className="h-4 w-4 text-red-500" /> in India</p>
      </div>
    </footer>
  );
}