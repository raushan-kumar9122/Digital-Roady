import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import { INSTITUTE_INFO, getWhatsAppGeneralLink } from '../data/coursesData';

interface HeaderProps {
  onOpenAdmission: (courseName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmission }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#2B0632] text-white shadow-md border-b border-[#3D0A46]">
      {/* Top micro bar for quick location & contact info */}
      <div className="hidden sm:block border-b border-[#3D0A46]/60 bg-[#1E0423] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white/90">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Admissions Open for New Batches 2026 | City Centre, Dhanbad
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {INSTITUTE_INFO.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white text-[#2B0632] px-2.5 py-0.5 rounded font-semibold hover:bg-slate-100 transition-colors"
            >
              <MessageSquare className="w-3 h-3 fill-[#2B0632]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Institute Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-xl bg-white text-[#2B0632] flex items-center justify-center font-bold text-xl shadow-inner border border-white/30 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-7 h-7 text-[#2B0632]" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-white leading-tight">
                The Future Track
              </span>
              <span className="block text-xs sm:text-sm font-medium text-white/80 tracking-wide">
                Computer Education • Dhanbad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-white/90 hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="px-3.5 py-2 rounded-lg border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
              title="Call Dhanbad Centre"
            >
              <Phone className="w-4 h-4" />
              <span>{INSTITUTE_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenAdmission()}
              className="px-5 py-2.5 rounded-lg bg-white text-[#2B0632] hover:bg-slate-100 font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu & Quick Phone Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="p-2.5 rounded-lg bg-white/15 text-white hover:bg-white/20 transition-colors"
              aria-label="Call Institute"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E0423] border-t border-[#3D0A46] px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-white hover:bg-[#2B0632] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#3D0A46] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmission();
                }}
                className="w-full py-3 rounded-lg bg-white text-[#2B0632] font-bold text-center shadow-md hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                <span>Apply Now for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={getWhatsAppGeneralLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg border border-white text-white font-bold text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
