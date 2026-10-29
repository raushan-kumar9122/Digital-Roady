export interface Course {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  duration: string;
  category: 'diploma' | 'accounting' | 'design' | 'tech' | 'basics';
  highlights: string[];
  careerOpportunities: string[];
  eligibility: string;
  softwareCovered: string[];
  badge?: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  course: string;
  timing: string;
  message?: string;
}
