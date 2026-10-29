import React from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ArrowUp,
  ExternalLink,
  Heart
} from 'lucide-react';
import { INSTITUTE_INFO, COURSES, getWhatsAppCourseLink, getWhatsAppGeneralLink } from '../data/coursesData';

interface FooterProps {
  onOpenAdmission: (courseName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmission }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Courses', href: '#courses' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admission' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1E0423] text-white border-t border-[#3D0A46]">
      {/* Upper Footer: Brand, Quick Links, Courses, Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Institute Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white text-[#2B0632] flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6 text-[#2B0632]" />
              </div>
              <div>
                <span className="block text-lg font-black text-white leading-tight">
                  {INSTITUTE_INFO.name}
                </span>
                <span className="block text-xs text-white/80">
                  City Centre, Dhanbad, Jharkhand
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              Premier computer training institute in Dhanbad dedicated to imparting 100% practical, lab-based IT education, computer accounting, and modern digital career skills.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppGeneralLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white text-[#2B0632] font-bold text-xs hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#2B0632]" />
                <span>WhatsApp Us</span>
              </a>
              <button
                onClick={() => onOpenAdmission()}
                className="px-4 py-2 rounded-lg border border-white text-white font-bold text-xs hover:bg-white/10 transition-colors cursor-pointer"
              >
                Apply Online
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-[#3D0A46] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs text-white/50">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Courses Offered (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-[#3D0A46] pb-2">
              Our Courses
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <a
                    href={getWhatsAppCourseLink(course.shortName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                    title={`Enquire on WhatsApp about ${course.name}`}
                  >
                    <span className="truncate">{course.shortName}</span>
                    <span className="text-[10px] text-white/60 group-hover:text-white uppercase font-bold shrink-0 ml-1">
                      Enquire ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-[#3D0A46] pb-2">
              Contact Info
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong> {INSTITUTE_INFO.address}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${INSTITUTE_INFO.phone}`} className="hover:text-white underline">
                    {INSTITUTE_INFO.phoneDisplay}
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong>Hours:</strong> {INSTITUTE_INFO.hours}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-lg bg-[#2B0632] border border-[#3D0A46] text-xs text-white/90">
                <span className="font-bold text-white block mb-0.5">Walk-in Counseling:</span>
                Free demo session and syllabus guide available at our City Centre Dhanbad branch daily.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-[#3D0A46] bg-[#17031b] py-5 px-4 text-xs text-white/70">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong>{INSTITUTE_INFO.name}</strong>. All Rights Reserved. City Centre, Dhanbad, Jharkhand.
          </p>

          <div className="flex items-center gap-4">
            <span>Practical Computer Education</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white hover:underline cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
