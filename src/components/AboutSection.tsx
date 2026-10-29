import React from 'react';
import { MonitorCheck, Target, Users, BookOpen, Award, CheckCircle, MapPin } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coursesData';

interface AboutSectionProps {
  onOpenAdmission: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAdmission }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white text-slate-800 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B0632]/10 text-[#2B0632] text-xs font-bold tracking-wider uppercase mb-3">
            <span>About Our Institute</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B0632] tracking-tight">
            The Future Track Computer Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Empowering students and job aspirants in Dhanbad with genuine practical computer expertise.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual feature card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-[#2B0632] text-white p-6 sm:p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#2B0632] flex items-center justify-center font-bold">
                    <Award className="w-6 h-6 text-[#2B0632]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Our Institute Mission</h3>
                    <p className="text-xs text-white/80">Skill India • Practical IT Education</p>
                  </div>
                </div>

                <p className="text-sm text-white/90 leading-relaxed">
                  Located in the heart of <strong>City Centre, Dhanbad</strong>, The Future Track Computer Education was founded with a singular commitment: to make quality computer training affordable, hands-on, and directly aligned with modern job roles.
                </p>

                <div className="space-y-3 pt-2 border-t border-white/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm text-white/95">
                      <strong>100% Practical Orientation:</strong> Every concept taught on the whiteboard is immediately implemented on the computer lab.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm text-white/95">
                      <strong>Beginner Friendly:</strong> No prior tech skills required. Instructors explain in both Hindi and English.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm text-white/95">
                      <strong>Job & Exam Preparation:</strong> Specialized training for SSC, High Court, Bank, and private office clerical roles.
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenAdmission}
                    className="w-full py-3 rounded-xl bg-white text-[#2B0632] font-bold text-sm hover:bg-slate-100 transition-colors cursor-pointer text-center"
                  >
                    Enroll / Book a Free Demo Class
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Introduction Text & 3 Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2B0632] leading-snug">
              Building Confidence Through Hands-On Computer Training
            </h3>
            
            <p className="text-slate-600 text-base leading-relaxed">
              At <strong>The Future Track Computer Education</strong>, we believe real computer literacy comes from sitting in front of a system and solving practical exercises. Our institute provides an encouraging and disciplined atmosphere where every learner gets personalized attention from dedicated mentors.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Whether you are a school or college student aiming for competitive exam typing tests, a commerce graduate wanting mastery in <strong>Tally Prime & GST</strong>, a creative mind stepping into <strong>Graphic Design or Video Editing</strong>, or a tech aspirant building modern websites and data analytics dashboards, we have structured courses designed for your career success.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl border-2 border-[#2B0632]/10 bg-white hover:border-[#2B0632] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#2B0632] text-white flex items-center justify-center mb-3">
                  <MonitorCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#2B0632] text-sm">Practical Lab</h4>
                <p className="text-xs text-slate-600 mt-1">
                  1:1 PC allocation with live assignments and daily software practice.
                </p>
              </div>

              <div className="p-4 rounded-xl border-2 border-[#2B0632]/10 bg-white hover:border-[#2B0632] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#2B0632] text-white flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#2B0632] text-sm">Expert Faculty</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Dedicated trainers who resolve every doubt patiently at your pace.
                </p>
              </div>

              <div className="p-4 rounded-xl border-2 border-[#2B0632]/10 bg-white hover:border-[#2B0632] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#2B0632] text-white flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#2B0632] text-sm">Career Focus</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Resume guidance, interview preparation, and ISO course certificates.
                </p>
              </div>
            </div>

            {/* Location callout */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
              <MapPin className="w-5 h-5 text-[#2B0632] shrink-0" />
              <span>
                <strong>Convenient City Centre Location:</strong> Centrally situated in Dhanbad with easy auto/bus connectivity from Bank More, Hirapur, Steel Gate, and Katras.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
