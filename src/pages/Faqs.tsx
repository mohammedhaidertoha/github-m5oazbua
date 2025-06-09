import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqCategories = [
  {
    category: `About our Tutors`,
    questions: [
      {
        q: `What qualifications do your tutors have?`,
        a: `Our tutors are typically current students or graduates from world-class universities like Imperial College London, Oxbridge, and other Russell Group institutions. They possess strong academic records and deep subject matter expertise.`
      },
      {
        q: `How are tutors selected?`,
        a: `We have a rigorous selection process that includes a review of academic credentials, subject knowledge assessments (where applicable), interviews to assess teaching aptitude and communication skills, and mandatory DBS checks.`
      },
      {
        q: `Can I request a specific tutor?`,
        a: `While we always try to match you with the best possible tutor for your needs, you can let us know if you have a preference, and we will do our best to accommodate subject to their availability.`
      }
    ]
  },
  {
    category: `About our Services`,
    questions: [
      {
        q: `Which exam boards do you cover?`,
        a: `Our tutors have experience with all major UK exam boards, including AQA, Edexcel, OCR, WJEC, and others. Please specify your exam board during the consultation.`
      },
      {
        q: `How are lessons structured?`,
        a: `Lessons are tailored to the individual student's needs. They typically involve a mix of concept explanation, problem-solving, past paper practice, and exam technique coaching. The structure is flexible and adapts to your learning style and goals.`
      },
      {
        q: `Do you offer online or in-person tutoring?`,
        a: `Currently, most of our tutoring is conducted online via platforms like Zoom or Google Meet, offering flexibility and access to a wider range of tutors. Limited in-person tutoring may be available in specific locations; please inquire.`
      },
      {
        q: `What subjects do you offer tutoring for?`,
        a: `We offer tutoring across a wide range of subjects for GCSE, A-Level, and university entrance exams, including Maths, Sciences (Physics, Chemistry, Biology), English, Humanities, and more. Please see our Services page or contact us for specific subject availability.`
      }
    ]
  },
  {
    category: `Pricing & Payments`,
    questions: [
      {
        q: `What are your hourly rates?`,
        a: `Our hourly rates vary depending on the level of study (e.g., GCSE, A-Level, university entrance), subject complexity, and tutor experience. Please contact us for a detailed quote after your free consultation.`
      },
      {
        q: `Do you offer packages?`,
        a: `Yes, we offer discounted rates for block bookings or packages of lessons. Details can be discussed during your consultation.`
      },
      {
        q: `What is your cancellation policy?`,
        a: `We typically require at least 24-48 hours notice for cancellations or rescheduling of lessons to avoid a charge. Full details are provided in our Terms & Conditions.`
      }
    ]
  },
  {
    category: `Getting Started`,
    questions: [
      {
        q: `How do I book a tutor?`,
        a: `You can start by booking a free consultation through our website. During the consultation, we will discuss your needs, and then match you with a suitable tutor. You can then schedule lessons directly.`
      },
      {
        q: `What happens in the initial consultation?`,
        a: `The initial consultation is a free, no-obligation chat (usually 15-30 minutes) to understand your academic goals, current challenges, learning style, and specific subjects or exams you need help with. This helps us match you with the perfect tutor.`
      },
      {
        q: `How quickly can I start lessons?`,
        a: `We aim to match you with a tutor and schedule your first lesson within a few days of your initial consultation, subject to tutor availability.`
      }
    ]
  }
];

const FaqsPage = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-pa-black">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="h-16 w-16 text-pa-text-secondary mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg lg:text-xl text-pa-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our tutors, services, and how to get started.
          </p>
        </div>
      </section>

      <section className="py-16 bg-pa-dark">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqCategories.map((categoryItem) => (
              <div key={categoryItem.category}>
                <h2 className="font-heading text-2xl text-pa-text mb-4">{categoryItem.category}</h2>
                {categoryItem.questions.map((faq, index) => (
                  <AccordionItem value={`${categoryItem.category}-${index}`} key={index} className="bg-pa-card border-pa-card-light rounded-md mb-3 shadow-sm hover:shadow-md transition-shadow">
                    <AccordionTrigger className="p-4 font-semibold text-pa-text text-left hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pt-0 text-pa-text-secondary">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FaqsPage; 