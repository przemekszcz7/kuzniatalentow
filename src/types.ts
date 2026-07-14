export interface CourseOffer {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  targetGroup: string;
  duration: string;
  benefits: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  image?: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  courseTitle: string;
  message?: string;
  timestamp: string;
  status: 'Oczekujący' | 'Potwierdzony';
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}
