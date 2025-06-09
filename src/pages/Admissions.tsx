import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Edit3, Users, Award, Lightbulb, MessageSquare, BarChart2 } from 'lucide-react'; // Removed FileText as it's no longer used

// Placeholder data for success stories - expand or fetch from an API
const successStories = [
  {
    id: 1,
    title: 'Secured Offer at Imperial College for Engineering',
    story: 'Student A was struggling to articulate their passion for engineering in their personal statement. With our guidance, they crafted a compelling narrative, aced their interview, and received an offer from Imperial College London.',
    tags: ['Personal Statement', 'Interview Prep', 'Imperial College']
  },
  {
    id: 2,
    title: 'Multiple Medical School Offers Achieved',
    story: 'Student B needed comprehensive support for their BMAT and UCAT exams, alongside interview coaching. Our targeted preparation helped them secure offers from three leading medical schools.',
    tags: ['Entrance Exams', 'Interview Prep', 'Medicine']
  },
  {
    id: 3,
    title: 'From Confused to Confident: Oxbridge Application Success',
    story: 'Student C was unsure about navigating the complex Oxbridge application process. We provided step-by-step guidance, from course selection to admissions test practice, resulting in an offer from the University of Cambridge.',
    tags: ['University Selection', 'Oxbridge Applications', 'Admissions Tests']
  }
];

const Admissions = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'University Selection Guidance',
      description: 'Helping you identify and choose the right courses and institutions that align with your academic strengths, interests, and future aspirations.'
    },
    {
      icon: Edit3,
      title: 'Personal Statement Support',
      description: 'Expert assistance in brainstorming, structuring, writing, and refining your personal statement to create a compelling narrative that showcases your unique qualities.'
    },
    {
      icon: MessageSquare,
      title: 'Interview Preparation',
      description: 'Master interview techniques with guidance on common questions, mock interviews, and constructive feedback, especially for competitive courses like Oxbridge and Medicine.'
    },
    {
      icon: GraduationCap,
      title: 'Entrance Exam Tutoring',
      description: 'Targeted preparation for crucial university entrance exams (e.g., BMAT, UCAT, LNAT, TSA, PAT). We cover content, strategy, and time management. (Also see our main Services for more details)'
    }
  ];

  return (
    <Layout>
      {/* Introduction Section */}
      <section className="py-20 lg:py-24 bg-pa-dark text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text mb-6">
            University Admissions Support
          </h1>
          <p className="text-lg lg:text-xl text-pa-text-secondary max-w-3xl mx-auto leading-relaxed">
            Navigating the competitive landscape of top university admissions requires more than just good grades. 
            Provost Academics provides the expert guidance and strategic support you need to stand out and secure your place.
          </p>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text mb-4">
              How We Help You Succeed
            </h2>
            <p className="text-lg text-pa-text-secondary max-w-2xl mx-auto">
              Our comprehensive admissions support covers every critical step of your application journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-pa-card border-pa-card-light hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="flex justify-center mb-3">
                    <service.icon className="h-10 w-10 text-pa-text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-pa-text text-center">{service.title}</h3>
                  <p className="text-pa-text-secondary text-sm leading-relaxed flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-pa-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-12 w-12 text-pa-text-secondary mx-auto mb-6" />
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text mb-6">
              Benefit From Our Direct Experience
            </h2>
            <p className="text-lg lg:text-xl text-pa-text-secondary leading-relaxed mb-4">
              Many of our tutors are graduates from the very universities you aspire to attend, including Imperial College London, Oxford, and Cambridge. 
              They have successfully navigated the demanding admissions processes themselves and are uniquely positioned to provide 
              insider knowledge, practical advice, and mentorship.
            </p>
            <p className="text-lg lg:text-xl text-pa-text-secondary leading-relaxed">
              We understand what admissions committees are looking for and how to craft an application that truly reflects your potential.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories/Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <BarChart2 className="h-12 w-12 text-pa-text-secondary mx-auto mb-6" />
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text mb-4">
              Proven Success in University Admissions
            </h2>
            <p className="text-lg text-pa-text-secondary max-w-2xl mx-auto">
              We are proud of our students' achievements. Here are a few (anonymised) examples of how we've helped them succeed:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="bg-pa-card border-pa-card-light flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="font-heading font-semibold text-lg text-pa-text">{story.title}</h3>
                  <p className="text-pa-text-secondary text-sm leading-relaxed flex-grow">{story.story}</p>
                  <div className="mt-auto pt-3">
                    {story.tags.map(tag => (
                      <span key={tag} className="inline-block bg-pa-card-light text-pa-text-muted text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-pa-text-muted mt-12">
            These are just a few examples. We tailor our support to each student's unique aspirations and challenges.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pa-dark text-center">
        <div className="container mx-auto px-4">
          <Award className="h-12 w-12 text-pa-text-secondary mx-auto mb-6" />
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text mb-6">
            Ready to Start Your University Application Journey?
          </h2>
          <p className="text-lg text-pa-text-secondary max-w-xl mx-auto mb-8">
            Let our experts guide you through every step, maximizing your chances of securing a place at your dream university.
          </p>
          <Button 
            size="lg" 
            className="bg-pa-text text-pa-black hover:bg-pa-text-secondary transition-all duration-300 px-8 py-6 text-lg font-semibold group"
          >
            Book a University Admissions Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions; 