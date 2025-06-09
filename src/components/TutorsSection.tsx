import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TutorsSection = () => {
  const tutors = [
    {
      name: 'Dr. Sarah Matthews',
      subject: 'Mathematics & Physics',
      experience: '8 years',
      education: 'PhD Mathematics, Cambridge University',
      rating: 4.9,
      image: '/placeholder.svg',
      specialties: ['A-Level Maths', 'Further Maths', 'Physics', 'University Prep']
    },
    {
      name: 'James Wilson',
      subject: 'English Literature & Language',
      experience: '6 years',
      education: 'MA English Literature, Oxford University',
      rating: 4.8,
      image: '/placeholder.svg',
      specialties: ['GCSE English', 'A-Level Literature', 'Creative Writing', 'Essay Skills']
    },
    {
      name: 'Dr. Rachel Chen',
      subject: 'Chemistry & Biology',
      experience: '10 years',
      education: 'PhD Biochemistry, Imperial College London',
      rating: 5.0,
      image: '/placeholder.svg',
      specialties: ['A-Level Chemistry', 'Biology', 'Medical School Prep', 'Lab Techniques']
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h2 className="heading-lg text-pa-text text-balance">
            Meet Our Expert Tutors
          </h2>
          <p className="body-lg text-pa-text-secondary max-w-3xl mx-auto text-balance">
            Learn from qualified educators with proven track records in helping students achieve academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <Card 
              key={index} 
              className={`glass-card hover-lift group overflow-hidden animate-fade-in-up animate-delay-${index * 100}`}
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-pa-card-light to-pa-card flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 bg-gradient-to-br from-pa-accent/20 to-pa-accent/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-pa-text text-3xl font-bold">
                      {tutor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-pa-card/50 to-transparent"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="heading-md text-pa-text">
                      {tutor.name}
                    </h3>
                    <p className="text-pa-text-secondary text-sm font-medium">
                      {tutor.subject}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(tutor.rating) ? 'text-yellow-400 fill-current' : 'text-pa-text-muted'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-pa-text-secondary text-sm font-medium">
                        {tutor.rating} • {tutor.experience}
                      </span>
                    </div>
                    <p className="text-pa-text-muted text-sm">
                      {tutor.education}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-pa-text text-sm font-medium">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {tutor.specialties.map((specialty, specialtyIndex) => (
                        <span 
                          key={specialtyIndex}
                          className="px-3 py-1 bg-pa-card-light/60 text-pa-text-muted text-xs rounded-full border border-pa-border font-medium"
                        >
                          {specialty}
                        </span>
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

export default TutorsSection;