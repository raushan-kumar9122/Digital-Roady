import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { INSTITUTE_INFO, getWhatsAppGeneralLink } from '../data/coursesData';

interface FloatingActionsProps {
  onOpenAdmission: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAdmission }) => {
  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop & Mobile) */}
      <aside aria-label="Quick contact shortcuts" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <a
          href={getWhatsAppGeneralLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#2B0632] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl border-2 border-white hover:bg-[#3D0A46] transition-all hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp with The Future Track Dhanbad"
        >
          <MessageSquare className="w-6 h-6 fill-white text-[#2B0632]" />
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            Enquire on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Fast-Bar (Only on small mobile screens < 640px) */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2B0632] border-t border-[#3D0A46] px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${INSTITUTE_INFO.phone}`}
          className="flex-1 py-2.5 px-3 rounded-lg bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:bg-white/20"
        >
          <Phone className="w-4 h-4" />
          <span>Call 9835247741</span>
        </a>

        <a
          href={getWhatsAppGeneralLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-lg bg-white text-[#2B0632] font-bold text-xs flex items-center justify-center gap-1.5 shadow active:bg-slate-100"
        >
          <MessageSquare className="w-4 h-4 fill-[#2B0632]" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => onOpenAdmission()}
          className="py-2.5 px-3 rounded-lg bg-[#3D0A46] text-white font-bold text-xs border border-white/30 shrink-0 cursor-pointer active:bg-white/10"
        >
          Apply
        </button>
      </nav>
    </>
  );
};
