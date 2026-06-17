import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { company } from '@/data/content';
import Logo from '@/assets/logo.svg';
import Button from '@/components/common/Button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container-padding flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="OM AGRI INPUTS" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark/80 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${company.phone}`}
            className="inline-flex items-center rounded-full"
          >
            <Button size="sm">
              <Phone className="h-4 w-4 mr-2" /> Call Now
            </Button>
          </a>


        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container-padding py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-dark/80 hover:text-primary font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href={`tel:${company.phone}`} className="inline-flex items-center rounded-full">
                <Button size="sm">
                  <Phone className="h-4 w-4 mr-2" /> Call Now
                </Button>
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}