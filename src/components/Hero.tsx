import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, Phone, Sparkles, Monitor, Users, Award } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface HeroProps {
  onExploreCourses: () => void;
  onContactClick: () => void;
  onOpenAdmission: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCourses,
  onContactClick,
  onOpenAdmission,
}) => {
  return (
    <section id="hero" className="relative bg-[#2B0632] text-white pt-10 pb-16 lg:py-20 overflow-hidden">
      {/* Subtle geometric background shapes strictly using purple/white tones */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-8 border-white"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full border-4 border-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location & Accreditation Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-medium backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-white" />
              <span>City Centre, Dhanbad, Jharkhand</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline text-white/90">Govt. Registered Institute</span>
            </div>

            {/* Exact Required Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Learn Computer Skills <br className="hidden sm:inline" />
              <span className="underline decoration-white/30 decoration-wavy underline-offset-8">for Your Future</span>
            </h1>

            {/* Exact Required Subheading */}
            <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Upgrade Your Skills with Practical Computer Training
            </p>

            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto lg:mx-0">
              Welcome to <strong>The Future Track Computer Education</strong> in City Centre, Dhanbad.
              Get hands-on lab training with a dedicated computer for every student, experienced mentors, and job-oriented certificates.
            </p>

            {/* Exact Required Buttons: Explore Courses and Contact Us + Apply Now */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#2B0632] hover:bg-slate-100 font-extrabold text-base shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 text-[#2B0632]" />
              </button>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-white text-white hover:bg-white hover:text-[#2B0632] font-bold text-base transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>1:1 Dedicated PC</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Hindi & English Medium</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Govt. Valid Certificate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Computer Education Image & Institute Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="rounded-2xl p-2 sm:p-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                    alt="Students practical computer education lab training at The Future Track Computer Education Dhanbad"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B0632] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white text-[#2B0632] rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#2B0632]/80">
                        Live Practical Batches
                      </span>
                      <span className="text-sm font-extrabold text-[#2B0632]">
                        100% Lab-Based Training
                      </span>
                    </div>
                    <button
                      onClick={onOpenAdmission}
                      className="px-3 py-1.5 rounded-lg bg-[#2B0632] text-white text-xs font-bold hover:bg-[#3D0A46] transition-colors cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                {/* Micro stat bar below image */}
                <div className="grid grid-cols-3 gap-2 mt-3 text-center text-white">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="block text-lg font-black">8+</span>
                    <span className="block text-[11px] text-white/80">Career Courses</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="block text-lg font-black">100%</span>
                    <span className="block text-[11px] text-white/80">Practical Lab</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="block text-lg font-black">10+</span>
                    <span className="block text-[11px] text-white/80">Years Faculty</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
