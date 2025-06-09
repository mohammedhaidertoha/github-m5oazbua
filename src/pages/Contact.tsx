import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, Info, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage(null);

    const { error } = await supabase.from('contacts').insert({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });

    if (error) {
      setFormMessage({ type: 'error', message: `Error: ${error.message}` });
    } else {
      setFormMessage({ type: 'success', message: 'Your message has been sent successfully!' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@provostacademics.co.uk', 'admissions@provostacademics.co.uk'],
      hrefs: ['mailto:info@provostacademics.co.uk', 'mailto:admissions@provostacademics.co.uk']
    },
    {
      icon: Phone,
      title: 'Call Us (Optional)',
      details: ['+44 20 XXXX XXXX (General)', '+44 20 YYYY YYYY (Admissions)'], // Placeholder numbers
      hrefs: ['tel:+4420XXXXXXXX', 'tel:+4420YYYYYYYY']
    },
    {
      icon: Clock,
      title: 'Our Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM', 'Sun & Bank Holidays: Closed']
    },
    {
        icon: MapPin,
        title: 'Main Office (By Appointment)',
        details: ['Provost Academics', 'London - General Area (Online First)'] // Keep address general if primarily online
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' }, // Replace # with actual links
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-pa-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Mail className="h-16 w-16 text-pa-text-secondary mx-auto mb-4" />
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text">
              Get in Touch
            </h1>
            <p className="text-lg lg:text-xl text-pa-text-secondary leading-relaxed">
              We're here to help you achieve your academic goals. Reach out for a free consultation or any enquiries you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 lg:py-24 bg-pa-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-pa-card border-pa-card-light p-8 rounded-lg shadow-xl">
              <h2 className="font-heading font-bold text-3xl text-pa-text mb-2">
                Send Us a Message
              </h2>
              <p className="text-pa-text-secondary mb-6">
                Fill out the form below. We aim to respond to all enquiries within 24 business hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-pa-text-muted block mb-1">First Name <span className="text-red-500">*</span></Label>
                    <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="bg-pa-dark border-pa-card-light text-pa-text" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-pa-text-muted block mb-1">Last Name <span className="text-red-500">*</span></Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="bg-pa-dark border-pa-card-light text-pa-text" placeholder="Your last name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-pa-text-muted block mb-1">Email Address <span className="text-red-500">*</span></Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-pa-dark border-pa-card-light text-pa-text" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-pa-text-muted block mb-1">Phone Number <span className="text-red-500">*</span></Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="bg-pa-dark border-pa-card-light text-pa-text" placeholder="+44 123 456 7890" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-pa-text-muted block mb-1">Primary Subject/Service of Interest <span className="text-red-500">*</span></Label>
                  <Select name="subject" onValueChange={handleSelectChange} value={formData.subject} required>
                    <SelectTrigger className="bg-pa-dark border-pa-card-light text-pa-text w-full">
                      <SelectValue placeholder="Select a primary service or subject area" />
                    </SelectTrigger>
                    <SelectContent className="bg-pa-card border-pa-card-light text-pa-text">
                      <SelectItem value="gcse-tutoring">GCSE Tutoring</SelectItem>
                      <SelectItem value="alevel-tutoring">A-Level Tutoring</SelectItem>
                      <SelectItem value="university-admissions">University Admissions Support</SelectItem>
                      <SelectItem value="entrance-exam-prep">University Entrance Exam Prep</SelectItem>
                      <SelectItem value="academic-skills">Academic Skills Development</SelectItem>
                      <SelectItem value="general-enquiry">General Enquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-pa-text-muted block mb-1">Your Message <span className="text-red-500">*</span></Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="bg-pa-dark border-pa-card-light text-pa-text min-h-[120px]" placeholder="Tell us how we can help you..." />
                </div>
                {formMessage && (
                  <div className={`p-3 rounded-md text-sm flex items-start space-x-2 ${
                    formMessage.type === 'error' ? 'bg-red-900/20 text-red-400' :
                    formMessage.type === 'success' ? 'bg-green-900/20 text-green-400' :
                    'bg-blue-900/20 text-blue-400'
                  }`}>
                    <Info className="h-5 w-5 flex-shrink-0" />
                    <p>{formMessage.message}</p>
                  </div>
                )}
                <Button type="submit" size="lg" className="w-full bg-pa-text text-pa-black hover:bg-pa-text-secondary group flex items-center justify-center">
                  Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Info & Socials */}
            <div className="lg:col-span-5 space-y-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-pa-card border-pa-card-light shadow-lg">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pa-text/10 rounded-lg flex items-center justify-center mt-1">
                      <info.icon className="h-5 w-5 text-pa-text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-pa-text mb-1">
                        {info.title}
                      </h3>
                      <div className="space-y-0.5">
                        {info.details.map((detail, detailIndex) => (
                          info.hrefs && info.hrefs[detailIndex] ? (
                            <a key={detailIndex} href={info.hrefs[detailIndex]} className="block text-pa-text-secondary text-sm hover:text-pa-text hover:underline">
                              {detail}
                            </a>
                          ) : (
                            <p key={detailIndex} className="text-pa-text-secondary text-sm">
                              {detail}
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="bg-pa-card border-pa-card-light shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-pa-text mb-3">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map(social => (
                      <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                         className="text-pa-text-secondary hover:text-pa-text transition-colors">
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
