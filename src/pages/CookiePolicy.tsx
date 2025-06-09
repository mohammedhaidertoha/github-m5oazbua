import Layout from '@/components/Layout';
import { Cookie } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-pa-black">
        <div className="container mx-auto px-4 text-center">
          <Cookie className="h-16 w-16 text-pa-text-secondary mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-pa-text mb-6">
            Cookie Policy
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
              to ensure it accurately reflects your use of cookies and complies with all applicable laws (e.g., GDPR, ePrivacy Directive).
              Provost Academics is not responsible for any legal issues arising from the use of this placeholder content.
            </p>
          </div>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
            They allow the website to recognize your device and remember if you have been to the website before.
          </p>
          <p>
            Cookies are widely used to make websites work more efficiently, as well as to provide information to the owners of the site. 
            Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, 
            while session cookies are deleted as soon as you close your web browser.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling 
            cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies 
            if you are not sure whether you need them or not in case they are used to provide a service that you use.
          </p>
          <p>We use the following types of cookies:</p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. 
              They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, 
              logging in or filling in forms.
            </li>
            <li>
              <strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve 
              the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. 
              (e.g., Google Analytics cookies - specify if used).
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalisation. 
              They may be set by us or by third party providers whose services we have added to our pages.
            </li>
            <li>
              <strong>Targeting/Advertising Cookies:</strong> These cookies may be set through our site by our advertising partners. 
              They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. 
              (Specify if used, e.g., Facebook Pixel, LinkedIn Insight Tag).
            </li>
          </ul>
          <p>
            <em>[You will need to list the specific cookies you use here, their purpose, and duration. This often requires a cookie audit of your website.]</em>
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you 
            might encounter through this site.
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on 
              the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things 
              such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. 
              For more information on Google Analytics cookies, see the official Google Analytics page.
            </li>
            {/* List other third-party services that set cookies, e.g., social media buttons, embedded content providers, advertising platforms */} 
          </ul>

          <h2>4. Your Choices Regarding Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate 
            opt-out links provided. Most web browsers allow some control of most cookies through the browser settings.
          </p>
          <p>
            To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit 
            <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> or 
            <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
          </p>
          <p>
            Please note that if you choose to disable cookies, some features of our Services may not operate as intended.
          </p>
          {/* Consider adding a link to your cookie consent management tool if you have one. */} 

          <h2>5. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, 
            legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at [Your Contact Email, e.g., privacy@provostacademics.co.uk].
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy; 