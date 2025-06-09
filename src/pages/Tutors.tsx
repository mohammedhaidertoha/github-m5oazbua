import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Star } from 'lucide-react'; // Example icons

// Placeholder data for tutors - you can expand this or fetch from an API
const placeholderTutors = [
  {
    id: 1,
    name: 'Dr. Eleanor Vance',
    imageUrl: '/placeholder-tutor-1.jpg', // Add to /public
    university: 'Imperial College London, PhD Astrophysics',
    degree: 'MEng Mechanical Engineering (First Class Honours)', // Example, adjust per tutor
    subjects: ['Physics', 'Mathematics', 'Astronomy'],
    levels: ['A-Level', 'University Entrance (e.g., PAT)', 'Undergraduate'],
    bio: 'Eleanor is passionate about making complex scientific concepts accessible and exciting. With 5+ years of tutoring experience, she has a knack for helping students build confidence and achieve top grades. Her research background brings a unique depth to her teaching.'
  },
  {
    id: 2,
    name: 'Mr. Samuel Green',
    imageUrl: '/placeholder-tutor-2.jpg', // Add to /public
    university: 'University of Oxford, MChem Chemistry',
    degree: 'MChem Chemistry (First Class Honours)',
    subjects: ['Chemistry', 'Biology'],
    levels: ['GCSE', 'A-Level', 'University Entrance (e.g., BMAT)'],
    bio: 'Samuel believes in a student-centered approach, tailoring his methods to each individual\'s learning style. He excels at breaking down challenging topics and fostering a deep understanding of the subject matter. Many of his students have gone on to study medicine and related fields.'
  },
  {
    id: 3,
    name: 'Ms. Aisha Khan',
    imageUrl: '/placeholder-tutor-3.jpg', // Add to /public
    university: 'University of Cambridge, BA English Literature',
    degree: 'BA English Literature (First Class Honours)',
    subjects: ['English Literature', 'English Language', 'History'],
    levels: ['GCSE', 'A-Level', 'University Entrance (e.g., ELAT)'],
    bio: 'Aisha fosters a love for the humanities by encouraging critical thinking and analytical skills. Her sessions are engaging and discussion-based, helping students develop clarity in their writing and a nuanced appreciation for texts. She has a strong record of helping students improve essay writing.'
  },
];

const Tutors = () => {
  return (
    <Layout>
      {/* Hero/Introductory Statement */}
      <section className="py-20 lg:py-24 bg-pa-dark text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text mb-6">
            Meet Our Exceptional Tutors
          </h1>
          <p className="text-lg lg:text-xl text-pa-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our team consists of high-achievers from globally renowned institutions like Imperial College London, 
            dedicated to helping you succeed. We pride ourselves on the quality and dedication of our academic mentors.
          </p>
        </div>
      </section>

      {/* Tutor Selection Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text mb-4">
              Our Rigorous Tutor Selection Process
            </h2>
            <p className="text-lg text-pa-text-secondary leading-relaxed">
              We handpick our tutors to ensure they meet the highest standards of academic excellence and teaching ability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Star, title: 'Academic Excellence', description: 'Verified top-tier academic records from leading universities.' },
              { icon: Users, title: 'Teaching Aptitude', description: 'Assessed for communication skills and ability to explain complex topics.' },
              { icon: CheckCircle, title: 'Thorough Interviews', description: 'Comprehensive interviews to evaluate passion and suitability.' },
              { icon: CheckCircle, title: 'DBS Checks', description: 'Mandatory background checks for safety and peace of mind.' },
            ].map((item, index) => (
              <div key={index} className="space-y-3 p-6 bg-pa-card border border-pa-card-light rounded-lg">
                <div className="flex justify-center mb-3">
                  <item.icon className="h-10 w-10 text-pa-text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-pa-text">{item.title}</h3>
                <p className="text-pa-text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutor Profiles Section */}
      <section className="py-20 bg-pa-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text mb-4">
              Our Tutors
            </h2>
            <p className="text-lg text-pa-text-secondary max-w-2xl mx-auto">
              Get to know some of our talented tutors ready to support your academic journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderTutors.map((tutor) => (
              <Card key={tutor.id} className="bg-pa-card border-pa-card-light overflow-hidden flex flex-col">
                <img 
                  src={tutor.imageUrl} 
                  alt={tutor.name} 
                  className="w-full h-64 object-cover" // Fixed height for consistency
                />
                <CardContent className="p-6 flex flex-col flex-grow space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-pa-text">{tutor.name}</h3>
                  <p className="text-sm text-pa-text-muted font-medium">
                    {tutor.university} <br/> ({tutor.degree})
                  </p>
                  <div>
                    <h4 className="font-semibold text-pa-text mb-1">Subjects Tutored:</h4>
                    <p className="text-sm text-pa-text-secondary">{tutor.subjects.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pa-text mb-1">Levels of Expertise:</h4>
                    <p className="text-sm text-pa-text-secondary">{tutor.levels.join(', ')}</p>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-pa-text mb-1">Bio:</h4>
                    <p className="text-sm text-pa-text-secondary leading-relaxed">{tutor.bio}</p>
                  </div>
                  <Button variant="outline" className="mt-auto w-full bg-transparent border-pa-text text-pa-text hover:bg-pa-text hover:text-pa-black transition-all duration-300">
                    Enquire About {tutor.name.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text mb-6">
            Ready to Find Your Perfect Tutor?
          </h2>
          <p className="text-lg text-pa-text-secondary max-w-xl mx-auto mb-8">
            Let us match you with an expert tutor who can help you achieve your academic goals.
          </p>
          <Button size="lg" className="bg-pa-text text-pa-black hover:bg-pa-text-secondary transition-all duration-300 px-8 py-6 text-lg font-semibold group">
            Find The Right Tutor For You
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Tutors; 