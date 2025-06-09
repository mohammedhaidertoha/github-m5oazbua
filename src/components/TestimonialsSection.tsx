import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Emily Rodriguez',
      grade: 'A-Level Student',
      content: 'Thanks to Provost Academics, I improved my Maths grade from a C to an A*. The personalized approach and expert guidance made all the difference.',
      rating: 5,
      subject: 'Mathematics'
    },
    {
      name: 'Thomas Anderson',
      grade: 'University Applicant',
      content: 'The university admissions support was incredible. I got into my first choice university with a scholarship. Could not have done it without their help.',
      rating: 5,
      subject: 'University Admissions'
    },
    {
      name: 'Sophia Chen',
      grade: 'GCSE Student',
      content: 'The tutors are so patient and knowledgeable. They helped me understand complex Chemistry concepts that I was struggling with for months.',
      rating: 5,
      subject: 'Chemistry'
    }
  ];

  return (
    <section className="section-padding bg-pa-dark">
      <div className="container mx-auto container-padding">
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h2 className="heading-lg text-pa-text text-balance">
            Student Success Stories
          </h2>
          <p className="body-lg text-pa-text-secondary max-w-3xl mx-auto text-balance">
            Hear from our students who have achieved their academic goals with our expert guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`glass-card hover-lift group animate-fade-in-up animate-delay-${index * 100}`}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-pa-accent/60" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-pa-text-secondary leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="space-y-2 pt-4 border-t border-pa-border">
                  <p className="heading-md text-pa-text">
                    {testimonial.name}
                  </p>
                  <p className="text-pa-text-muted text-sm font-medium">
                    {testimonial.grade} • {testimonial.subject}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;