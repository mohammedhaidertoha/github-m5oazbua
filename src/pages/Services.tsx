import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, BookOpen, BarChart3, Edit, ShieldCheck, Brain, Target } from 'lucide-react';

const Services = () => {
  // Data for service categories - to be filled in by the user
  const serviceCategories = [
    {
      icon: BookOpen,
      title: 'GCSE Tutoring',
      intro: 'Building strong foundational knowledge and mastering exam techniques for GCSE success across all major exam boards.',
      points: [
        'Subjects Offered: [List core subjects like Maths, English, Sciences, Humanities, etc.]',
        'Approach: Focus on core concept understanding, syllabus coverage, past paper practice, and confidence building.',
        'Exam Boards: Comprehensive coverage including AQA, Edexcel, OCR, WJEC, and others.'
      ],
      link: '/services/gcse' // Example link for a potential future sub-page
    },
    {
      icon: BarChart3, // Icon for A-Level, suggesting progression/higher level
      title: 'A-Level Tutoring',
      intro: 'Developing in-depth understanding, critical thinking, and the analytical skills required to achieve A/A* grades.',
      points: [
        'Subjects Offered: [List key A-Level subjects like Maths, Further Maths, Physics, Chemistry, Biology, Economics, History, etc.]',
        'Approach: Emphasis on advanced topics, application of knowledge, essay writing (for relevant subjects), and rigorous exam preparation.',
        'Exam Boards: Full coverage of AQA, Edexcel, OCR, and other relevant boards.'
      ],
      link: '/services/a-level' // Example link
    },
    {
      icon: Target, // Icon for focused preparation
      title: 'University Entrance Exam Preparation',
      intro: 'Specialised coaching to excel in competitive university entrance examinations, focusing on skills, strategy, and timed practice.',
      points: [
        'Exams Covered: [e.g., UCAT, BMAT, LNAT, TSA, PAT, MAT, STEP, and others relevant to your services]',
        'Focus: Test-specific strategies, time management techniques, mock tests under exam conditions, and detailed feedback.'
      ],
      link: '/admissions#entrance-exams' // Link to relevant section on admissions page or a dedicated page
    }
  ];

  const optionalServices = [
    {
      icon: Edit, // Icon for essay writing/skills
      title: 'Academic Skills Development',
      description: 'Enhance crucial academic skills such as essay writing, critical analysis, research methodologies, and effective study techniques to excel across all subjects.',
      link: '/services/academic-skills'
    },
    // You can add a placeholder for "Subject-Specific Tutoring" here if desired, perhaps linking to a general contact or a future hub page for subjects.
  ];

  return (
    <Layout>
      {/* Hero Section / Overall Introduction */}
      <section className="py-20 lg:py-24 bg-pa-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text">
              Our Tutoring Services
            </h1>
            <p className="text-lg lg:text-xl text-pa-text-secondary leading-relaxed">
              Provost Academics offers bespoke tutoring services tailored to your specific academic goals. 
              From foundational GCSEs to advanced A-Levels and competitive university entrance exams, 
              our expert tutors are here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Categorised Services Sections */}
      {serviceCategories.map((category, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-pa-black' : 'bg-pa-dark'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <category.icon className="h-12 w-12 text-pa-text-secondary mx-auto mb-4" />
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text">
                  {category.title}
                </h2>
                <p className="text-lg text-pa-text-secondary mt-3 max-w-2xl mx-auto">{category.intro}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {category.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start space-x-3 p-4 bg-pa-card rounded-md border border-pa-card-light">
                    <ShieldCheck className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-pa-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>
              {/* Optional: Add a button here to link to a more detailed page if 'category.link' exists */}
            </div>
          </div>
        </section>
      ))}

      {/* Optional Services Section */}
      {optionalServices.length > 0 && (
        <section className="py-16 bg-pa-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Brain className="h-12 w-12 text-pa-text-secondary mx-auto mb-4" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text">
                Further Academic Support
              </h2>
            </div>
            <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8">
              {optionalServices.map((service, index) => (
                <div key={index} className="p-6 bg-pa-card rounded-lg border border-pa-card-light text-center">
                  <service.icon className="h-10 w-10 text-pa-text-secondary mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-xl text-pa-text mb-2">{service.title}</h3>
                  <p className="text-pa-text-secondary text-sm mb-4">{service.description}</p>
                  {/* <Button variant="outline" size="sm">Learn More</Button> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Retained CTA Section */}
      <section className="py-20 bg-pa-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text">
              Ready to Elevate Your Grades?
            </h2>
            <p className="text-lg text-pa-text-secondary">
              Book your free consultation today and let us tailor a plan for your academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-pa-text text-pa-black hover:bg-pa-text-secondary transition-all duration-300 px-8"
              >
                <Clock className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              {/* Removed Get Custom Quote for simplicity, can be added back */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
