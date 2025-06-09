import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pa-black via-pa-dark to-pa-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pa-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pa-text/5 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </div>

      <div className="relative container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-pa-text-secondary">
              <Sparkles className="h-4 w-4 text-pa-accent" />
              <span>Start Your Journey Today</span>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <h2 className="heading-lg text-pa-text text-balance">
              Ready to Excel in Your Studies?
            </h2>
            <p className="body-lg text-pa-text-secondary text-balance">
              Join hundreds of successful students who have achieved their academic goals with Provost Academics. 
              Book your free consultation today and take the first step towards academic excellence.
            </p>
          </div>

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
              className="btn-secondary px-8 py-6 text-lg hover-lift"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>

          <div className="pt-8 space-y-2 animate-fade-in-up animate-delay-300">
            <p className="text-pa-text-muted text-sm">
              Free 30-minute consultation • No obligation • Expert advice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;