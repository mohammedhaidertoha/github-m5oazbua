import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users, Trophy } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'A-Level & GCSE Tutoring',
      description: 'Expert guidance in core subjects with personalized study plans tailored to your learning style and exam requirements.',
      features: ['Mathematics', 'Sciences', 'English', 'Humanities']
    },
    {
      icon: GraduationCap,
      title: 'University Admissions',
      description: 'Comprehensive support for university applications, including personal statements, interview preparation, course selection, and specialised entrance exam coaching (e.g., BMAT, UCAT, LNAT).',
      features: ['Personal Statements', 'Interview Prep', 'Course Selection', 'UCAS Support', 'Entrance Exam Coaching']
    },
    {
      icon: Users,
      title: 'Group Sessions',
      description: 'Interactive group learning sessions that foster collaboration while maintaining focused academic improvement.',
      features: ['Small Groups', 'Peer Learning', 'Cost Effective', 'Social Learning']
    },
    {
      icon: Trophy,
      title: 'Exam Preparation',
      description: 'Intensive exam preparation with proven strategies, practice tests, and targeted revision techniques.',
      features: ['Mock Exams', 'Revision Plans', 'Exam Techniques', 'Grade Improvement']
    }
  ];

  return (
    <section className="section-padding bg-pa-dark">
      <div className="container mx-auto container-padding">
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h2 className="heading-lg text-pa-text text-balance">
            Our Services
          </h2>
          <p className="body-lg text-pa-text-secondary max-w-3xl mx-auto text-balance">
            Comprehensive academic support designed to help you excel in your studies and achieve your educational goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`glass-card hover-lift group animate-fade-in-up animate-delay-${index * 100}`}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-pa-accent/20 to-pa-accent/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-pa-accent" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="heading-md text-pa-text">
                      {service.title}
                    </h3>
                    <p className="text-pa-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pa-accent rounded-full"></div>
                          <span className="text-sm text-pa-text-muted font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;