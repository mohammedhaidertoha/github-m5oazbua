import Layout from '@/components/Layout';
import { FileText } from 'lucide-react';

const TermsConditions = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-pa-black">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-pa-text-secondary mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg lg:text-xl text-pa-text-secondary max-w-2xl mx-auto">
            Last updated: [Date]
          </p>
        </div>
      </section>

      <section className="py-16 bg-pa-dark">
        <div className="container mx-auto px-4 max-w-3xl prose prose-invert lg:prose-xl 
                        prose-headings:font-heading prose-headings:text-pa-text 
                        prose-p:text-pa-text-secondary prose-strong:text-pa-text-muted 
                        prose-a:text-pa-text-secondary hover:prose-a:text-pa-text prose-a:underline">

          <div className="bg-yellow-900/30 border border-yellow-700 text-yellow-300 p-6 rounded-lg shadow-lg my-8">
            <h2 className="text-2xl font-bold text-yellow-200 mt-0">Important: Placeholder Content</h2>
            <p className="text-yellow-300">
              The content below is a generic template and <strong className="text-yellow-200">MUST be reviewed, edited, and approved by a legal professional</strong> 
              to ensure it is appropriate for your services and complies with all applicable laws.
              Provost Academics is not responsible for any legal issues arising from the use of this placeholder content.
            </p>
          </div>

          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) 
            and Provost Academics ("we," "us," or “our”), concerning your access to and use of the [Your Website URL] website as well as any other media form, 
            media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site” and "Services").
          </p>
          <p>
            You agree that by accessing the Site and/or Services, you have read, understood, and agree to be bound by all of these Terms and Conditions. 
            If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and Services and you must discontinue use immediately.
          </p>

          <h2>2. Services Offered</h2>
          <p>
            Provost Academics provides tutoring services, university admissions guidance, and related academic support as detailed on our Site. 
            Specific details of services, including pricing, duration, and scheduling, will be agreed upon prior to commencement.
          </p>
          {/* Detail your services more specifically */} 

          <h2>3. User Representations</h2>
          <p>
            By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; 
            (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity 
            and you agree to comply with these Terms and Conditions; (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have 
            received parental permission to use the Site and Services; (5) you will not access the Services through automated or non-human means, whether through 
            a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not 
            violate any applicable law or regulation.
          </p>

          <h2>4. Fees and Payment</h2>
          <p>
            We accept the following forms of payment: [List payment methods, e.g., Credit/Debit Card, Bank Transfer]. You may be required to pay a deposit or 
            pay in advance for services. All payments are due as specified at the time of booking or as per the agreed payment schedule.
          </p>
          <p>
            Prices for our services are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
          </p>
          {/* Detail your payment terms, refund policy, cancellation policy */} 

          <h2>5. Cancellation and Refund Policy</h2>
          <p>
            Cancellations made [e.g., less than 24 hours] before a scheduled session may be subject to a cancellation fee or forfeiture of the session fee. 
            Details of our cancellation and refund policy specific to different services will be provided at the time of booking and are available on request.
          </p>
          {/* Be very specific here */} 

          <h2>6. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site and the Services are our proprietary property and all source code, databases, functionality, software, website designs, 
            audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein 
            (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>

          <h2>7. Term and Termination</h2>
          <p>
            These Terms and Conditions shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS AND CONDITIONS, 
            WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE AND THE SERVICES (INCLUDING BLOCKING 
            CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms and Conditions and your use of the Site and Services are governed by and construed in accordance with the laws of [Your Jurisdiction, e.g., England and Wales] 
            applicable to agreements made and to be entirely performed within [Your Jurisdiction, e.g., England and Wales], without regard to its conflict of law principles.
          </p>

          <h2>9. Dispute Resolution</h2>
          <p>
            Any legal action of whatever nature brought by either you or us (collectively, the “Parties” and individually, a “Party”) shall be commenced or prosecuted in the 
            state and federal courts located in [Your Jurisdiction, e.g., London, England], and the Parties hereby consent to, and waive all defenses of lack of personal 
            jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts.
          </p>
          {/* Consider an arbitration clause */} 

          <h2>10. Disclaimer</h2>
          <p>
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, 
            WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF 
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME 
            NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE 
            WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, ... [etc. - consult legal advice for full disclaimer]
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, 
            OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE 
            POSSIBILITY OF SUCH DAMAGES.
          </p>
          {/* Check if liability cap is needed/allowed */} 

          <h2>12. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
          </p>
          <p>
            Provost Academics<br />
            [Your Contact Email, e.g., legal@provostacademics.co.uk]<br />
            [Your Address, if applicable for legal notices]
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions; 