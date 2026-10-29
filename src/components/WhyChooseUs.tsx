import React from 'react';
import {
  Monitor,
  GraduationCap,
  Users,
  TrendingUp,
  HeartHandshake,
  CheckCircle,
  Building,
  Clock,
  Award,
  BookOpen,
  Keyboard,
  MapPin
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, INSTITUTE_FACILITIES } from '../data/coursesData';

interface WhyChooseUsProps {
  onOpenAdmission: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenAdmission }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-white" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-white" />;
      case 'Users':
        return <Users className="w-6 h-6 text-white" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-white" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-white" />;
      default:
        return <CheckCircle className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div id="why-us">
      {/* 5 Core Pillars Section */}
      <section className="py-16 sm:py-20 bg-white text-slate-800 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B0632]/10 text-[#2B0632] text-xs font-bold tracking-wider uppercase mb-3">
              <span>Our Core Strengths</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B0632] tracking-tight">
              Why Choose The Future Track?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
              We focus on building practical computer skills so that every student steps out confident and job-ready.
            </p>
          </div>

          {/* 5 Requested Reasons in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US_POINTS.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#2B0632] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2B0632] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-[#2B0632] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#2B0632]">
                  <CheckCircle className="w-4 h-4 text-[#2B0632]" />
                  <span>Guaranteed Quality Learning</span>
                </div>
              </div>
            ))}

            {/* 6th Card: Direct Admission CTA */}
            <div className="p-6 rounded-2xl bg-[#2B0632] text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 bg-white/10 px-2.5 py-1 rounded">
                  Join The Future Track
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2 text-white">
                  Start Your Learning Journey Today
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Join hundreds of successful alumni working across government offices, corporate firms, and freelance digital agencies.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <button
                  onClick={onOpenAdmission}
                  className="w-full py-3 rounded-xl bg-white text-[#2B0632] hover:bg-slate-100 font-bold text-sm shadow-md transition-all cursor-pointer text-center"
                >
                  Book Your Seat Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Institute Facilities Section */}
      <section id="facilities" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B0632] tracking-tight">
              Institute Facilities & Infrastructure
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Modern computer lab environment engineered for seamless hands-on learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INSTITUTE_FACILITIES.map((facility, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#2B0632] transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2B0632] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#2B0632]">
                      {facility.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
