export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: React.ReactNode; // For React Icons
  faqs: FAQQuestion[];
} 