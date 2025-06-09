import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Download, Filter, Search, FileSpreadsheet } from 'lucide-react'; 
import { supabase } from '@/integrations/supabase/client';

interface Worksheet {
  id: string;
  title: string;
  description: string;
  level: string;
  subject: string;
  topic: string;
  downloadLink: string;
  // icon: React.ElementType;
}

// Example categories for filtering worksheets
const categories = [
  'All', 
  'GCSE Maths', 'A-Level Maths', 
  'GCSE Physics', 'A-Level Physics', 
  'GCSE Chemistry', 'A-Level Chemistry',
  'GCSE Biology', 'A-Level Biology',
  'All GCSE', 'All A-Level'
];

const Resources = () => {
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);

  useEffect(() => {
    const fetchWorksheets = async () => {
      const { data: files, error } = await supabase.storage.from('worksheets').list();

      if (error) {
        console.error('Error fetching worksheets:', error);
        return;
      }

      if (files) {
        const worksheetData = files.map((file) => {
          const { data: publicURL } = supabase.storage.from('worksheets').getPublicUrl(file.name);
          
          // Basic parsing of file name for metadata. 
          // This is a placeholder and should be replaced with a more robust system, 
          // like storing metadata in a database table.
          const [level, subject, topic] = file.name.split('_');

          return {
            id: file.id,
            title: file.name.replace(/_/g, ' ').replace('.pdf', ''),
            description: `A worksheet on ${topic} for ${level} ${subject}.`, // Placeholder description
            level: level || 'N/A',
            subject: subject || 'N/A',
            topic: topic?.replace('.pdf', '') || 'N/A',
            downloadLink: publicURL.publicUrl,
            // icon: FileSpreadsheet,
          };
        });
        setWorksheets(worksheetData as any); // Temp cast to any to avoid icon issues
      }
    };

    fetchWorksheets();
  }, []);
  // Placeholder for actual filtering logic
  // const [currentCategory, setCurrentCategory] = useState('All');
  // const [searchTerm, setSearchTerm] = useState('');
  // const filteredWorksheets = placeholderWorksheets.filter(ws => /* filter logic */ );

  return (
    <Layout>
      {/* Introduction Section */}
      <section className="py-20 lg:py-24 bg-pa-dark text-center">
        <div className="container mx-auto px-4">
          {/* <Download className="h-16 w-16 text-pa-text-secondary mx-auto mb-6" /> */}
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text mb-6">
            Downloadable Academic Worksheets
          </h1>
          <p className="text-lg lg:text-xl text-pa-text-secondary max-w-3xl mx-auto leading-relaxed">
            Access our library of free, downloadable worksheets for GCSE and A-Level subjects. 
            Perfect for revision, practice, and reinforcing your understanding of key topics.
          </p>
        </div>
      </section>

      {/* Filter and Search Placeholder Section */}
      <section className="py-12 bg-pa-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-1/2 lg:w-1/3">
              {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-pa-text-muted" /> */}
              <input 
                type="text" 
                placeholder="Search worksheets (e.g., A-Level Maths Algebra)" 
                className="w-full pl-10 pr-4 py-2.5 bg-pa-card border border-pa-card-light rounded-md text-pa-text focus:ring-2 focus:ring-pa-text-muted focus:border-pa-text-muted outline-none"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {/* <Filter className="h-5 w-5 text-pa-text-muted flex-shrink-0" /> */}
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant="outline" 
                  size="sm"
                  className="bg-pa-card border-pa-card-light text-pa-text-secondary hover:bg-pa-text-muted/20 hover:text-pa-text whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Worksheets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {worksheets.map((worksheet) => (
              <Card key={worksheet.id} className="bg-pa-card border-pa-card-light hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow space-y-3">
                  <div className="flex items-start space-x-3 mb-2">
                    {/* <worksheet.icon className="h-10 w-10 text-pa-text-secondary flex-shrink-0 mt-1" /> */}
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-pa-text leading-tight">{worksheet.title}</h3>
                      <p className="text-xs text-pa-text-muted">
                        {worksheet.level} - {worksheet.subject} ({worksheet.topic})
                      </p>
                    </div>
                  </div>
                  <p className="text-pa-text-secondary text-sm leading-relaxed flex-grow">{worksheet.description}</p>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="mt-auto w-full bg-transparent border-pa-text text-pa-text hover:bg-pa-text hover:text-pa-black transition-all duration-300 group"
                  >
                    <a href={worksheet.downloadLink} target="_blank" rel="noopener noreferrer">
                      Download Worksheet
                      {/* <Download className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {worksheets.length === 0 && (
            <div className="text-center py-12">
              {/* <Search className="h-12 w-12 text-pa-text-muted mx-auto mb-4" /> */}
              <p className="text-pa-text-secondary text-lg">No worksheets found matching your criteria.</p>
              <p className="text-pa-text-muted text-sm">Try adjusting your search or filters, or check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Remains relevant */}
      <section className="py-20 bg-pa-dark text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-pa-text mb-6">
            Need Personalized Academic Support?
          </h2>
          <p className="text-lg text-pa-text-secondary max-w-xl mx-auto mb-8">
            These worksheets are a great start, but for tailored guidance and in-depth learning, 
            our expert tutors can provide the personalized support you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-pa-text text-pa-black hover:bg-pa-text-secondary transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <a href="/services">Explore Our Services</a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="bg-transparent border-pa-text text-pa-text hover:bg-pa-text hover:text-pa-black transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <a href="/contact">Book Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources; 