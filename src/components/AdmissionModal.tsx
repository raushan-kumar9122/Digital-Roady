import React from 'react';
import { X, GraduationCap } from 'lucide-react';
import { AdmissionForm } from './AdmissionForm';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  selectedCourse,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E0423]/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-[#2B0632] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#2B0632] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white text-[#2B0632] flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5 text-[#2B0632]" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Student Admission Form</h3>
              <p className="text-xs text-white/80">The Future Track • City Centre, Dhanbad</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          <AdmissionForm initialCourse={selectedCourse} isModal={true} />
        </div>
      </div>
    </div>
  );
};
