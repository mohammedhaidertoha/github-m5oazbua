import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, User, BookOpen } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'World-Class Tutors',
      description: 'Learn from experts educated at globally renowned institutions like Imperial College.'
    },
    {
      icon: Target,
      title: 'Top Grades & University Entry Focus',
      description: 'Our goal is your academic success and admission to your dream university.'
    },
    {
      icon: User,
      title: 'Personalised Learning',
      description: 'Tailored tutoring sessions designed to meet your individual needs and learning style.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Exam Board Coverage',
      description: 'Expertise across all major UK exam boards for GCSE and A-Levels.'
    }
  ];

  return (
    <section className="section-padding bg-pa-dark">
      <div className="container mx-auto container-padding">
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h2 className="heading-lg text-pa-text text-balance">
            Why Choose Provost Academics?
          </h2>
          <p className="body-lg text-pa-text-secondary max-w-2xl mx-auto text-balance">
            Discover what sets us apart in delivering exceptional academic results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`glass-card hover-lift hover-glow group text-center animate-fade-in-up animate-delay-${index * 100}`}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pa-accent/20 to-pa-accent/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-pa-accent" />
                  </div>
                </div>
                <h3 className="heading-md text-pa-text">
                  {feature.title}
                </h3>
                <p className="text-pa-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;