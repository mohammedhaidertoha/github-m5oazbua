import Layout from '@/components/Layout';
import { ShieldAlert } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-pa-black">
        <div className="container mx-auto px-4 text-center">
          <ShieldAlert className="h-16 w-16 text-pa-text-secondary mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text mb-6">
            Privacy Policy
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
              to ensure it accurately reflects your data processing practices and complies with all applicable laws (e.g., GDPR, CCPA).
              Provost Academics is not responsible for any legal issues arising from the use of this placeholder content.
            </p>
          </div>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Provost Academics ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, 
            please contact us at [Your Contact Email for Privacy Inquiries, e.g., privacy@provostacademics.co.uk].
          </p>
          <p>
            This privacy notice describes how we might use your information if you:
          </p>
          <ul>
            <li>Visit our website at [Your Website URL]</li>
            <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
          </ul>
          <p>
            In this privacy notice, if we refer to:
          </p>
          <ul>
            <li>"Website", we are referring to any website of ours that references or links to this policy</li>
            <li>"Services", we are referring to our Website, and other related services, including any sales, marketing, or events</li>
          </ul>
          <p>
            The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, 
            how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not 
            agree with, please discontinue use of our Services immediately.
          </p>

          <h2>2. What Information Do We Collect?</h2>
          <p>
            <strong>Personal information you disclose to us:</strong> We collect personal information that you voluntarily provide to us when you 
            register on the Website, express an interest in obtaining information about us or our products and Services, when you participate 
            in activities on the Website or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make 
            and the products and features you use. The personal information we collect may include the following: names; phone numbers; email addresses; 
            mailing addresses; job titles; contact preferences; billing addresses; debit/credit card numbers; and other similar information.
          </p>
          <p>
            <strong>Information automatically collected:</strong> We automatically collect certain information when you visit, use or navigate the Website. 
            This information does not reveal your specific identity (like your name or contact information) but may include device and usage 
            information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, 
            device name, country, location, information about how and when you use our Website and other technical information. This information 
            is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
          </p>
          <p>
            Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Policy.
          </p>

          <h2>3. How Do We Use Your Information?</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal 
            information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, 
            with your consent, and/or for compliance with our legal obligations.
          </p>
          {/* Add more specific uses here based on your services */} 
          <ul>
            <li>To facilitate account creation and logon process.</li>
            <li>To post testimonials (with consent).</li>
            <li>Request feedback.</li>
            <li>To enable user-to-user communications (with consent).</li>
            <li>To manage user accounts.</li>
            <li>To send administrative information to you.</li>
            <li>To protect our Services.</li>
            <li>To respond to legal requests and prevent harm.</li>
            {/* ... and more ... */} 
          </ul>

          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations.
          </p>
          <p>
            More specifically, we may need to process your data or share your personal information in the following situations: Business Transfers, Affiliates, Business Partners (with consent), etc.
          </p>
          {/* Detail specific sharing practices */} 

          <h2>5. Do We Use Cookies and Other Tracking Technologies?</h2>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about 
            how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
          </p>

          <h2>6. How Long Do We Keep Your Information?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer 
            retention period is required or permitted by law (such as tax, accounting or other legal requirements).
          </p>
          {/* Specify retention periods or criteria */} 

          <h2>7. How Do We Keep Your Information Safe?</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. 
            However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology 
            can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be 
            able to defeat our security, and improperly collect, access, steal, or modify your information.
          </p>

          <h2>8. What Are Your Privacy Rights?</h2>
          <p>
            In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access 
            and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; 
            and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
          </p>
          <p>To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.</p>

          <h2>9. Controls for Do-Not-Track Features</h2>
          <p>
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal 
            your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for 
            recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that 
            automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will 
            inform you about that practice in a revised version of this privacy notice.
          </p>

          <h2>10. Updates to This Notice</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be 
            effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
          </p>

          <h2>11. How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at [Your Contact Email, e.g., privacy@provostacademics.co.uk] or by post to:
          </p>
          <p>
            [Your Company Name, if applicable]<br />
            [Your Company Address, if applicable]
          </p>

          <p className="mt-12 text-sm text-pa-text-muted">
            This is a basic template. Specific clauses related to children's privacy (if applicable), international data transfers, 
            specific third-party services used (e.g., payment processors, analytics), and detailed procedures for exercising rights should be added by a legal professional.
          </p>

        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy; 