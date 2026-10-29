import React from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  Navigation,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { INSTITUTE_INFO, getWhatsAppGeneralLink } from '../data/coursesData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B0632]/10 text-[#2B0632] text-xs font-bold tracking-wider uppercase mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B0632] tracking-tight">
            Contact Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Have questions about courses, fees, or class timings? Visit or contact us directly.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Institute Details & Quick Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Institute Identity Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#2B0632] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-[#2B0632] uppercase tracking-wider">
                  Computer Education Center
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#2B0632] mt-1">
                  {INSTITUTE_INFO.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Practical IT Training • Govt. Recognized Certification
                </p>
              </div>

              {/* Contact Item: Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2B0632] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Address</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {INSTITUTE_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Landmark: Near City Centre Auto & Bus Stand, Main Road, Dhanbad
                  </p>
                </div>
              </div>

              {/* Contact Item: Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2B0632] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Phone</h4>
                  <a
                    href={`tel:${INSTITUTE_INFO.phone}`}
                    className="text-base font-extrabold text-[#2B0632] hover:underline block mt-0.5"
                  >
                    {INSTITUTE_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500">Tap to call on mobile for instant inquiry</p>
                </div>
              </div>

              {/* Contact Item: Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2B0632] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Institute Hours</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    Monday to Saturday: 7:00 AM – 7:30 PM
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sunday: Special batches & practice lab
                  </p>
                </div>
              </div>

              {/* Buttons: WhatsApp Enquiry & Call */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a
                  href={getWhatsAppGeneralLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#2B0632] text-white hover:bg-[#3D0A46] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp ({INSTITUTE_INFO.phone})</span>
                </a>

                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="w-full py-3 px-4 rounded-xl border-2 border-[#2B0632] text-[#2B0632] hover:bg-slate-100 font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us Now ({INSTITUTE_INFO.phone})</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Location Placeholder */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm flex flex-col h-full">
              
              {/* Map header */}
              <div className="p-4 bg-[#2B0632] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="font-bold text-sm">
                    Location: City Centre, Dhanbad, Jharkhand
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=City+Centre+Dhanbad+Jharkhand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white underline"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Google Maps View for City Centre, Dhanbad */}
              <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-100">
                <iframe
                  title="The Future Track Computer Education Location - City Centre Dhanbad"
                  src="https://maps.google.com/maps?q=City%20Centre,%20Dhanbad,%20Jharkhand&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Map bottom info strip */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                <span>
                  <strong>Transit:</strong> Frequent autos & buses available from Dhanbad Railway Station (10 mins) and Bank More.
                </span>
                <span className="font-semibold text-[#2B0632]">
                  Pin Code: 826001
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
