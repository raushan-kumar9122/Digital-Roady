import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AdmissionSection } from './components/AdmissionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseForForm, setSelectedCourseForForm] = useState<string>('');

  const handleOpenAdmissionModal = (courseName?: string) => {
    if (courseName) {
      setSelectedCourseForForm(courseName);
    }
    setIsModalOpen(true);
  };

  const handleCloseAdmissionModal = () => {
    setIsModalOpen(false);
  };

  const handleExploreCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourseForAdmission = (courseName: string) => {
    setSelectedCourseForForm(courseName);
    // Scroll smoothly to the on-page admission form or open modal
    const el = document.getElementById('admission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans pb-14 sm:pb-0">
      {/* 1. Header */}
      <Header onOpenAdmission={handleOpenAdmissionModal} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreCourses={handleExploreCourses}
          onContactClick={handleContactClick}
          onOpenAdmission={() => handleOpenAdmissionModal()}
        />

        {/* 3. About Us */}
        <AboutSection onOpenAdmission={() => handleOpenAdmissionModal()} />

        {/* 4. Our Courses */}
        <CoursesSection
          onSelectCourseForAdmission={handleSelectCourseForAdmission}
        />

        {/* 5. Why Choose Us? & Institute Facilities */}
        <WhyChooseUs onOpenAdmission={() => handleOpenAdmissionModal()} />

        {/* Admission Enquiry Form Section */}
        <AdmissionSection selectedCourse={selectedCourseForForm} />

        {/* 6. Contact Section with Google Maps & WhatsApp */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer onOpenAdmission={handleOpenAdmissionModal} />

      {/* Quick Action Floating Controls for Mobile & Desktop */}
      <FloatingActions onOpenAdmission={() => handleOpenAdmissionModal()} />

      {/* Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={handleCloseAdmissionModal}
        selectedCourse={selectedCourseForForm}
      />
    </div>
  );
}
