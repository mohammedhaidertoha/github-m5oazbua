import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, BookOpen, User, GraduationCap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality tutoring services and helping every student reach their full potential.'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'We operate with transparency and honesty, building trust with our students and their families.'
    },
    {
      icon: User,
      title: 'Personalisation',
      description: 'Every student is unique, and we tailor our teaching methods to match individual learning styles and needs.'
    },
    {
      icon: Target,
      title: 'Dedication',
      description: 'Our tutors are passionately dedicated to the success and well-being of each student.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-pa-text">
              About Provost Academics
            </h1>
            <p className="text-lg lg:text-xl text-pa-text-secondary leading-relaxed">
              Founded on the principle that every student deserves access to exceptional education, 
              Provost Academics has been transforming academic journeys for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-pa-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text">
              Our Mission
            </h2>
            <p className="text-pa-text-secondary leading-relaxed text-lg">
              To empower ambitious students to achieve their full academic potential and gain entry 
              to the world's leading universities through exceptional, personalised tutoring.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section - NEW */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text">
              Our Vision
            </h2>
            <p className="text-pa-text-secondary leading-relaxed text-lg">
              To be the UK's most trusted provider of elite academic tutoring, renowned for our 
              quality of tutors and student success.
            </p>
          </div>
        </div>
      </section>
      
      {/* The Provost Academics Difference Section - NEW */}
      <section className="py-20 bg-pa-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text">
                The Provost Academics Difference
              </h2>
              <p className="text-lg text-pa-text-secondary max-w-2xl mx-auto">
                Discover what sets us apart and why families trust us with their academic aspirations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-pa-card border-pa-card-light">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-heading font-semibold text-xl text-pa-text">World-Class Tutors</h3>
                  <p className="text-pa-text-secondary">
                    Our tutors are not just subject matter experts; many hail from prestigious institutions like 
                    Imperial College London, bringing unparalleled insight and experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-pa-card border-pa-card-light">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-heading font-semibold text-xl text-pa-text">Rigorous Tutor Selection</h3>
                  <p className="text-pa-text-secondary">
                    We employ a meticulous selection process to ensure every tutor meets our high standards for 
                    academic excellence, teaching ability, and dedication.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-pa-card border-pa-card-light">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-heading font-semibold text-xl text-pa-text">Commitment to Top-Tier Results</h3>
                  <p className="text-pa-text-secondary">
                    Our focus is always on helping students achieve outstanding grades and secure places at 
                    leading universities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-pa-card border-pa-card-light">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-heading font-semibold text-xl text-pa-text">Personalised Learning Plans</h3>
                  <p className="text-pa-text-secondary">
                    We develop tailored learning strategies for each student, ensuring our approach aligns with their 
                    unique needs and goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - UPDATED */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text">
              Our Values
            </h2>
            <p className="text-lg text-pa-text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do at Provost Academics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-pa-card border-pa-card-light hover:border-pa-text-muted transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pa-card-light rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-pa-text" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-semibold text-lg text-pa-text">
                        {value.title}
                      </h3>
                      <p className="text-pa-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Story Section - NEW */}
      <section className="py-20 bg-pa-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text">
              Our Founder's Story
            </h2>
            <img 
              src="/placeholder-founder.jpg"
              alt="Founder of Provost Academics" 
              className="w-48 h-48 rounded-full mx-auto my-6 object-cover border-4 border-pa-card-light" 
            />
            <p className="text-pa-text-secondary leading-relaxed text-lg">
              [Placeholder for Founder's Story: Briefly share the professional background of who started 
              the business and the inspiration or motivation behind Provost Academics. This adds a personal 
              touch and helps build connection and trust. Explain the 'why' behind the commitment to 
              academic excellence.]
            </p>
            <p className="text-pa-text-secondary leading-relaxed">
              [Example: "Driven by a passion for education and a belief in the transformative power of 
              mentorship, [Founder's Name] established Provost Academics to..."]
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment to Quality Section - NEW */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text">
              Our Commitment to Quality
            </h2>
            <p className="text-pa-text-secondary leading-relaxed text-lg">
              [Placeholder for Commitment to Quality: Detail how Provost Academics ensures high standards. 
              This could include tutor training programs, ongoing professional development, curriculum 
              development processes, regular student progress monitoring, and feedback mechanisms from 
              students and parents.]
            </p>
            <p className="text-pa-text-secondary leading-relaxed">
              [Example: "We maintain our high standards through a rigorous tutor vetting and training process, 
              continuous curriculum review based on the latest educational research, and a dedicated support 
              system for both tutors and students..."]
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;

// test