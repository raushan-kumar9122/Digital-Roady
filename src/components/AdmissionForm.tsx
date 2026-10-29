import React, { useState, useEffect } from 'react';
import { COURSES, INSTITUTE_INFO } from '../data/coursesData';
import { EnquiryFormData } from '../types';
import {
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Phone,
  Send,
  User,
  BookOpen,
  Clock,
  Sparkles
} from 'lucide-react';

interface AdmissionFormProps {
  initialCourse?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const AdmissionForm: React.FC<AdmissionFormProps> = ({
  initialCourse = '',
  onSuccess,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    course: initialCourse || '',
    timing: 'Morning (7:00 AM - 11:00 AM)',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [refId, setRefId] = useState<string>('');

  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, course: initialCourse }));
    }
  }, [initialCourse]);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters long';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your 10-digit mobile number';
    } else if (cleanPhone.length !== 10) {
      newErrors.phone = 'Mobile number must be exactly 10 digits (e.g., 9835247741)';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedRef = `FT-${Math.floor(1000 + Math.random() * 9000)}`;
      setRefId(generatedRef);
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      course: '',
      timing: 'Morning (7:00 AM - 11:00 AM)',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // WhatsApp transfer with filled data
  const handleSendToWhatsApp = () => {
    const message = `Hello The Future Track Computer Education, I have submitted an admission enquiry:
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Course: ${formData.course}
- Preferred Batch: ${formData.timing}
- Reference ID: ${refId}
${formData.message ? `- Note: ${formData.message}` : ''}
Please confirm seat availability and admission fees.`;

    const url = `https://wa.me/919835247741?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (isSubmitted) {
    return (
      <div className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#2B0632] text-center space-y-5 animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-[#2B0632] text-white flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2B0632] bg-[#2B0632]/10 px-3 py-1 rounded-full">
            Inquiry Ref: {refId}
          </span>
          <h3 className="text-2xl font-black text-[#2B0632]">
            Enquiry Prepared Successfully!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you, <strong>{formData.fullName}</strong>. Your enquiry for <strong>{formData.course}</strong> has been generated.
          </p>
        </div>

        {/* Verification summary box */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs sm:text-sm text-slate-700 space-y-2 max-w-md mx-auto">
          <div className="flex justify-between border-b border-slate-200 pb-1.5">
            <span className="text-slate-500">Applicant:</span>
            <span className="font-bold text-slate-900">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-1.5">
            <span className="text-slate-500">Mobile:</span>
            <span className="font-bold text-slate-900">{formData.phone}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-1.5">
            <span className="text-slate-500">Selected Course:</span>
            <span className="font-bold text-[#2B0632]">{formData.course}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Preferred Batch:</span>
            <span className="font-semibold text-slate-900">{formData.timing}</span>
          </div>
        </div>

        {/* Instant Action on WhatsApp */}
        <div className="space-y-3 pt-2 max-w-md mx-auto">
          <button
            type="button"
            onClick={handleSendToWhatsApp}
            className="w-full py-3.5 px-6 rounded-xl bg-[#2B0632] text-white hover:bg-[#3D0A46] font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Send Details on WhatsApp for Instant Confirmation</span>
          </button>

          <a
            href={`tel:${INSTITUTE_INFO.phone}`}
            className="w-full py-2.5 px-4 rounded-xl border border-[#2B0632] text-[#2B0632] hover:bg-slate-100 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Or Call Directly: {INSTITUTE_INFO.phoneDisplay}</span>
          </a>

          <p className="text-[11px] text-slate-500 italic">
            You can also walk in directly to our City Centre Dhanbad branch (Mon–Sat: 7:00 AM – 7:30 PM) for offline spot admission.
          </p>

          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-slate-600 hover:text-[#2B0632] underline pt-2 cursor-pointer"
          >
            Submit Another Admission Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {/* Name Input */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-[#2B0632]" />
          <span>Full Name *</span>
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: '' });
          }}
          placeholder="e.g. Rahul Kumar Verma"
          className={`w-full px-4 py-2.5 rounded-xl border ${
            errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#2B0632]'
          } text-sm focus:outline-none focus:ring-2 focus:ring-[#2B0632]/20 transition-all bg-white text-slate-900`}
        />
        {errors.fullName && (
          <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      {/* Phone Number Input */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-[#2B0632]" />
          <span>Mobile Number (10 Digits) *</span>
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-2.5 text-sm font-semibold text-slate-500">
            +91
          </span>
          <input
            type="tel"
            maxLength={10}
            value={formData.phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              setFormData({ ...formData, phone: val });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            placeholder="9835247741"
            className={`w-full pl-13 pr-4 py-2.5 rounded-xl border ${
              errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#2B0632]'
            } text-sm focus:outline-none focus:ring-2 focus:ring-[#2B0632]/20 transition-all bg-white text-slate-900 font-medium`}
          />
        </div>
        {errors.phone && (
          <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.phone}</span>
          </p>
        )}
      </div>

      {/* Course Selection */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#2B0632]" />
          <span>Course Selection *</span>
        </label>
        <select
          value={formData.course}
          onChange={(e) => {
            setFormData({ ...formData, course: e.target.value });
            if (errors.course) setErrors({ ...errors, course: '' });
          }}
          className={`w-full px-4 py-2.5 rounded-xl border ${
            errors.course ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#2B0632]'
          } text-sm focus:outline-none focus:ring-2 focus:ring-[#2B0632]/20 transition-all bg-white text-slate-900`}
        >
          <option value="">-- Choose Course to Enquire --</option>
          {COURSES.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name} ({course.duration})
            </option>
          ))}
        </select>
        {errors.course && (
          <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.course}</span>
          </p>
        )}
      </div>

      {/* Preferred Batch Timing */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#2B0632]" />
          <span>Preferred Batch Timing</span>
        </label>
        <select
          value={formData.timing}
          onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2B0632] text-sm focus:outline-none focus:ring-2 focus:ring-[#2B0632]/20 transition-all bg-white text-slate-900"
        >
          <option value="Early Morning (7:00 AM - 9:00 AM)">Early Morning (7:00 AM - 9:00 AM)</option>
          <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
          <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
          <option value="Evening (3:00 PM - 7:30 PM)">Evening (3:00 PM - 7:30 PM)</option>
          <option value="Weekend Special (Saturday & Sunday)">Weekend Special (Saturday & Sunday)</option>
        </select>
      </div>

      {/* Optional Note */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
          Questions / Any Requirement (Optional)
        </label>
        <textarea
          rows={2}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Ask about fee discount, demo class, or special timing..."
          className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:border-[#2B0632] text-sm focus:outline-none focus:ring-2 focus:ring-[#2B0632]/20 transition-all bg-white text-slate-900 resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-[#2B0632] text-white hover:bg-[#3D0A46] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Submit Admission Enquiry</span>
        </button>
      </div>

      <p className="text-[11px] text-slate-500 text-center pt-1">
        Your phone number is kept confidential and used solely for course counseling at our City Centre Dhanbad branch.
      </p>
    </form>
  );
};
