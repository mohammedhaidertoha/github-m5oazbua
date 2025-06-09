import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, GraduationCap, Phone, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Students Taught' },
    { icon: GraduationCap, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '10+', label: 'Years Experience' },
  ];

  return (
    <section 
      className="relative section-padding overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/hero-background.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pa-black/90 via-pa-dark/80 to-pa-black/90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pa-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pa-text/5 rounded-full blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-pa-accent/10 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto container-padding">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pa-card/50 backdrop-blur-sm border border-pa-border rounded-full text-sm text-pa-text-secondary">
              <Sparkles className="h-4 w-4 text-pa-accent" />
              <span>Elite Academic Excellence</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="heading-xl text-pa-text text-balance">
              Unlock Your
              <span className="block gradient-text-subtle">Academic Potential</span>
            </h1>
            <p className="body-lg text-pa-text-secondary max-w-3xl mx-auto text-balance">
              Achieve your academic goals with professional tutoring and university admissions guidance from experienced educators. 
              Book your free consultation today and transform your learning journey.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200">
            <Button 
              size="lg" 
              className="btn-primary px-8 py-6 text-lg font-semibold group hover-lift shadow-elegant"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="btn-secondary px-8 py-6 text-lg hover-lift"
            >
              <a href="#services-section">Learn More</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 animate-fade-in-up animate-delay-300">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center space-y-3 group hover-lift animate-delay-${index * 100}`}
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-pa-card/50 backdrop-blur-sm border border-pa-border rounded-2xl flex items-center justify-center group-hover:bg-pa-card-light/60 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-pa-accent" />
                  </div>
                </div>
                <div className="heading-md text-pa-text">
                  {stat.value}
                </div>
                <div className="text-pa-text-muted text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;