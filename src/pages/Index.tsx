import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ServicesSection from '@/components/ServicesSection';
import ProvostMethodSection from '@/components/ProvostMethodSection';
import TutorsSection from '@/components/TutorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseSection />
      <div id="services-section">
        <ServicesSection />
      </div>
      <TutorsSection />
      <TestimonialsSection />
      <CTASection />
      <ProvostMethodSection />
    </Layout>
  );
};

export default Index;
