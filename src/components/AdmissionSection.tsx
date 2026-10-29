import React from 'react';
import { AdmissionForm } from './AdmissionForm';
import { CheckCircle2, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface AdmissionSectionProps {
  selectedCourse?: string;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ selectedCourse }) => {
  return (
    <section id="admission" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B0632]/10 text-[#2B0632] text-xs font-bold tracking-wider uppercase">
              <span>Student Admissions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B0632] tracking-tight leading-tight">
              Apply for Admission / Free Demo Class
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Take the first step toward high-paying tech and accounting careers. Fill this simple form to reserve your seat or attend a free computer demo class in our lab at City Centre, Dhanbad.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B0632] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Zero Registration Charge:</strong> Inquire and try a free lab demo class before confirming your admission.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B0632] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Installment Fee Payment:</strong> Student-friendly monthly and installment options available.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B0632] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Flexible Batch Choice:</strong> Switch morning or evening slots anytime during college exam periods.
                </span>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2B0632]">
                <MapPin className="w-4 h-4" />
                <span>Offline Spot Admissions</span>
              </div>
              <p className="text-xs text-slate-600">
                You can also visit our office directly: <strong>City Centre, Dhanbad</strong> (Near Bus & Auto Stand).
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2B0632] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Admission Counselor: {INSTITUTE_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-xl relative">
              <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-xl text-[#2B0632]">Admission Enquiry Form</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Please provide accurate contact details for batch scheduling</p>
                </div>
                <ShieldCheck className="w-6 h-6 text-[#2B0632]" />
              </div>

              <AdmissionForm initialCourse={selectedCourse} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
