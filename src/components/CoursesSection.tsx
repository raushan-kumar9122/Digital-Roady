import React, { useState } from 'react';
import { COURSES, getWhatsAppCourseLink } from '../data/coursesData';
import { Course } from '../types';
import {
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourseForAdmission: (courseName: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourseForAdmission,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'diploma', label: 'Diplomas' },
    { id: 'accounting', label: 'Accounting (Tally)' },
    { id: 'tech', label: 'IT & Development' },
    { id: 'design', label: 'Design & Media' },
    { id: 'basics', label: 'Basics & Typing' },
  ];

  const filteredCourses = activeCategory === 'all'
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  const toggleExpand = (courseId: string) => {
    setExpandedCourseId((prev) => (prev === courseId ? null : courseId));
  };

  return (
    <section id="courses" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B0632]/10 text-[#2B0632] text-xs font-bold tracking-wider uppercase mb-3">
            <span>Career Focused Curriculums</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B0632] tracking-tight">
            Our Certified Courses
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Designed for students, job seekers, and working professionals with 100% practical lab exercises.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2B0632] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course: Course) => {
            const isExpanded = expandedCourseId === course.id;
            const whatsAppUrl = getWhatsAppCourseLink(course.shortName);

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#2B0632] shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden group"
              >
                {/* Course Header Banner */}
                <div className="p-5 pb-4 border-b border-slate-100 bg-white">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2B0632] bg-[#2B0632]/10 px-2.5 py-1 rounded-md">
                      {course.category.toUpperCase()}
                    </span>
                    {course.badge && (
                      <span className="text-[11px] font-bold text-white bg-[#2B0632] px-2.5 py-0.5 rounded-full">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Course Name */}
                  <h3 className="text-lg font-black text-[#2B0632] leading-snug group-hover:text-[#2B0632] transition-colors">
                    {course.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-[#2B0632]" />
                    <span>Duration: {course.duration}</span>
                  </div>
                </div>

                {/* Course Short Description */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Eligibility & Software Tags */}
                    <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-2">
                      <div className="text-xs text-slate-500">
                        <strong className="text-slate-800">Eligibility:</strong> {course.eligibility}
                      </div>

                      {/* Key software pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {course.softwareCovered.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Syllabus preview */}
                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-slate-200 space-y-2.5 text-xs text-slate-700 animate-fadeIn">
                        <h4 className="font-bold text-[#2B0632] flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#2B0632]" />
                          <span>Curriculum Highlights:</span>
                        </h4>
                        <ul className="space-y-1.5 pl-1">
                          {course.highlights.map((point, index) => (
                            <li key={index} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2B0632] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-2 pt-2 border-t border-slate-100">
                          <strong className="block text-[#2B0632] font-bold">Career Roles:</strong>
                          <p className="text-slate-600 mt-0.5">
                            {course.careerOpportunities.join(', ')}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions Area */}
                  <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
                    <button
                      type="button"
                      onClick={() => toggleExpand(course.id)}
                      className="w-full text-xs font-bold text-[#2B0632] hover:underline flex items-center justify-center gap-1 py-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Syllabus' : 'View Syllabus Highlights'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {/* Required Enquire Now button (Opens WhatsApp with prefilled message) */}
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#2B0632] text-white hover:bg-[#3D0A46] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Enquire Now (WhatsApp)</span>
                    </a>

                    {/* Secondary button: Apply / Admission Form */}
                    <button
                      type="button"
                      onClick={() => onSelectCourseForAdmission(course.name)}
                      className="w-full py-2 px-4 rounded-xl border border-[#2B0632] text-[#2B0632] hover:bg-[#2B0632]/5 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Online Admission Form</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Counseling Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#2B0632] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">Not sure which course is right for you?</h3>
            <p className="text-sm text-white/90">
              Visit our City Centre Dhanbad branch for a free 1-on-1 career guidance session and computer demo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:9835247741"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#2B0632] font-bold text-sm hover:bg-slate-100 transition-colors text-center"
            >
              Call: 9835247741
            </a>
            <button
              onClick={() => onSelectCourseForAdmission('')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-white text-white font-bold text-sm hover:bg-white/10 transition-colors cursor-pointer text-center"
            >
              Request Call Back
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
