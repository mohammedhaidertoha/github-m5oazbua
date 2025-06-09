import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send, Star, Info, Upload, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ApplyTutor = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualifications: '',
    subjects: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = (file: File | null) => {
    if (file) {
      if (!file.type.includes('pdf')) {
        setFormMessage({ type: 'error', message: 'Please upload a PDF file' });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setFormMessage({ type: 'error', message: 'File size must be less than 5MB' });
        return;
      }
      setCvFile(file);
      setFormMessage(null);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);

    // Validate all fields
    if (!formData.fullName || !formData.email || !formData.phone || 
        !formData.qualifications || !formData.subjects || !cvFile) {
      setFormMessage({ type: 'error', message: 'All fields are required' });
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. Upload CV to Supabase Storage
      const fileExt = cvFile.name.split('.').pop();
      const fileName = `${Date.now()}-${formData.fullName.replace(/\s+/g, '-')}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('tutor-cvs')
        .upload(fileName, cvFile);

      if (uploadError) {
        console.error('Upload Error:', uploadError);
        throw new Error('Failed to upload CV');
      }

      // 2. Save application to database
      const { error: insertError } = await supabase
        .from('tutor_applications')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone_number: formData.phone,
          qualifications: formData.qualifications,
          subjects: formData.subjects,
          cv_url: uploadData.path
        });

      if (insertError) {
        console.error('Insert Error:', insertError);
        throw new Error(`Failed to submit application: ${insertError.message}`);
      }

      // Clear form on success
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        qualifications: '',
        subjects: '',
      });
      setCvFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setFormMessage({ type: 'success', message: 'Application submitted successfully!' });

    } catch (error) {
      setFormMessage({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Failed to submit application' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 lg:py-24 bg-pa-dark text-center">
        <div className="container mx-auto px-4">
          <Star className="h-16 w-16 text-pa-text-secondary mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text mb-6">
            Apply to Become a Tutor
          </h1>
          <p className="text-lg lg:text-xl text-pa-text-secondary max-w-3xl mx-auto leading-relaxed">
            Join our elite team of tutors. Share your expertise and contribute to academic success.
          </p>
        </div>
      </section>

      <section id="application-form" className="py-16 bg-pa-dark">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-pa-card border-pa-card-light shadow-xl">
            <CardHeader className="text-center border-b border-pa-card-light pb-6">
              <CardTitle className="font-heading text-3xl text-pa-text">Tutor Application Form</CardTitle>
              <CardDescription className="text-pa-text-secondary pt-2">All fields are mandatory.</CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-pa-text-muted block mb-2">Full Name *</Label>
                    <Input 
                      required
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange} 
                      className="bg-pa-dark border-pa-card-light text-pa-text" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-pa-text-muted block mb-2">Email Address *</Label>
                    <Input 
                      required
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="bg-pa-dark border-pa-card-light text-pa-text" 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-pa-text-muted block mb-2">Phone Number *</Label>
                  <Input 
                    required
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="bg-pa-dark border-pa-card-light text-pa-text" 
                  />
                </div>

                <div>
                  <Label htmlFor="qualifications" className="text-pa-text-muted block mb-2">Your Qualifications *</Label>
                  <Textarea 
                    required
                    id="qualifications" 
                    name="qualifications" 
                    placeholder="e.g., A-Levels in Maths (A*), Physics (A)..." 
                    value={formData.qualifications} 
                    onChange={handleChange} 
                    className="bg-pa-dark border-pa-card-light text-pa-text" 
                  />
                </div>

                <div>
                  <Label htmlFor="subjects" className="text-pa-text-muted block mb-2">Subjects You Can Teach *</Label>
                  <Textarea 
                    required
                    id="subjects" 
                    name="subjects" 
                    placeholder="e.g., GCSE Maths, A-Level Physics..." 
                    value={formData.subjects} 
                    onChange={handleChange} 
                    className="bg-pa-dark border-pa-card-light text-pa-text" 
                  />
                </div>

                <div>
                  <Label htmlFor="cv" className="text-pa-text-muted block mb-2">Upload CV (PDF only) *</Label>
                  <div
                    onClick={openFileDialog}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    className={`
                      relative flex flex-col items-center justify-center p-6 mt-1 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200
                      ${isDragging ? 'border-pa-accent bg-pa-card-light' : 'border-pa-card-light hover:border-pa-text-muted'}
                    `}
                  >
                    <Input
                      ref={fileInputRef}
                      id="cv"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {cvFile ? (
                      <div className="text-center">
                        <Upload className="h-8 w-8 mx-auto text-green-500 mb-2" />
                        <p className="text-sm font-medium text-pa-text">{cvFile.name}</p>
                        <p className="text-xs text-pa-text-muted mt-1">{Math.round(cvFile.size / 1024)} KB</p>
                        <Button
                          type="button"
                          variant="link"
                          className="text-red-500 text-xs h-auto p-1 mt-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCvFile(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = '';
                            }
                          }}
                        >
                          Remove file
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="h-8 w-8 mx-auto text-pa-text-muted mb-2" />
                        <p className="text-sm font-medium text-pa-text">
                          <span className="text-pa-accent">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-pa-text-muted mt-1">PDF only, max 5MB</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {formMessage && (
                  <div className={`p-3 rounded-md text-sm flex items-start space-x-2 ${
                    formMessage.type === 'success' ? 'bg-green-900/20 text-green-400' :
                    formMessage.type === 'error' ? 'bg-red-900/20 text-red-400' :
                    'bg-blue-900/20 text-blue-400'
                  }`}>
                    <Info className="h-5 w-5 flex-shrink-0" />
                    <p>{formMessage.message}</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-pa-text text-pa-black hover:bg-pa-text-secondary group flex items-center justify-center"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyTutor; 