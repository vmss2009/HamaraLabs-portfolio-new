import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './Privacy.css';

function Privacy() {
  return (
    <>
      <Header />
      <main className="privacy-page">
        <div className="privacy-container">
          <h1>Privacy Policy</h1>
          
          <div className="privacy-content">
            <p>
              Hamara Labs PVT LTD. ("We") are committed to protecting and respecting your privacy.
            </p>
            <p>
              Hamara Labs PVT LTD. provides online contents through mobile applications like KettleMind ("Apps") and websites like www.kettlemind.com (the "Websites")
            </p>
            <p>
              By using the Websites and/or using any of our Apps, you consent to us processing your personal information in accordance with this Privacy and Cookie Policy (the "Policy"). This is the legal basis upon which we process your personal information as well. It is necessary for the performance of our obligations under the terms of use/terms and conditions you accept to use our Apps or the Websites. You may withdraw such consent at any time by letting us know at <a href="mailto:raja@hamaralabs.com">raja@hamaralabs.com</a>. At that time, you may also want to remove any cookies which have been placed on any device used to access the Websites. Your withdrawal of consent will not affect the lawfulness of any processing carried out by us prior to such withdrawal.
            </p>

            <h2>THIS IS THE INFORMATION WE MAY COLLECT ABOUT YOU</h2>
            
            <h3>1. Information you provide if you decide to contact us</h3>
            <p>
              If you contact us (by phone or email or through an App), we may keep a record of that. If you report a problem with a Website or an App, we may keep that information. The information which you provide and we keep may include your name, address, telephone number and/or email address.
            </p>

            <h3>2. Information we collect about you when you use a Website</h3>
            <p>
              When you use a Website, we use technology such as that provided by Google Analytics to collect information about your visit to that Website. This includes the pages you visit and how long you spend on the Website. You can find more information about Google Analytics here: <a href="https://www.google.com/analytics" target="_blank" rel="noopener noreferrer">www.google.com/analytics</a>.
            </p>

            <h3>3. Information we collect about you when you download an App</h3>
            <p>
              We sometimes may ask you for information after you have downloaded an App, but before you start using it. This may include contact details such as your email address, personal details such as your Facebook Id or name, or demographic details such as your gender, date of birth or profession. Some of this information is required (eg email address) and some are optional (eg profession). What we collect is slightly different depending upon whether you choose to login using Facebook or not.
            </p>

            <h3>4. Information we may collect when you use an App</h3>
            <p>
              We collect information when you use our Apps on how you use those Apps and how you play the games in them. For example, we will note how you interact with our games, how you perform and what scores you achieve. We also take note of when you choose to share your achievements with friends on Facebook and if you choose to pay for versions of our Apps such as KettleMind Pro.
            </p>

            <h3>5. Information we may collect about the device you use to access and use an App</h3>
            <p>
              When you use our Apps we collect information about your device such as its IP address, what model it is and a device ID.
            </p>

            <h2>THIS IS WHO WE SHARE YOUR INFORMATION WITH</h2>
            <p>
              We will only share information with other organisations where we have your permission to do so in accordance with this Policy, where we believe it is necessary for a legitimate reason connected with an App or a Website, or where it is necessary for us to comply with the terms and conditions of that App or Website. We will only share information with a third party if we are satisfied that such third party will keep that information secure.
            </p>
            <p>
              We work with analytics providers such as Google Analytics which may involve information about your use of a Website and/or an App been processed by Google.
            </p>
            <p>
              We work with Facebook to allow you to sign in for Apps using the credentials that you have with that company. We also enable you to share your performances when using our Apps with your Facebook friends. This involves Facebook processing some of your information. It also results in some of your information becoming public, so do read Facebook's privacy policy and be careful with what you share.
            </p>
            <p>
              Finally, we may disclose your personal information to third parties:
            </p>
            <ul>
              <li>if we are under a duty to disclose or share your personal information in order to comply with any legal or regulatory obligation or request;</li>
              <li>to enforce or apply our terms of use/terms and conditions and other agreements or to investigate potential breaches; or</li>
              <li>to protect the rights, property or safety of a Website and/or App, or of our users.</li>
            </ul>

            <h2>OUR USE OF COOKIES AND OTHER IDENTIFIERS</h2>
            <p>
              Cookies are small pieces of data that are stored on your computer, mobile phone or other device. They do lots of different jobs, like letting you navigate between pages efficiently, storing your preferences, and generally improving your experience of a Website. Cookies make the interaction between you and a Website faster and easier. The only cookies we use are from Google Analytics which distinguish you from other users of the Website. The cookie distinguishing you in this way lasts for two years. This helps us to provide you with a good experience when you use the Website and also allows us to improve the Website. We do not use them on Apps.
            </p>
            <p>
              In some cases, we use device identifiers called 'IDFA's' which operate like cookies. We provide Facebook with an 'IDFA' to improve our targeting of ads on Facebook when we are trying to acquire customers for our products.
            </p>
            <p>
              Please refer to your device's help material to learn what controls you can use to remove cookies, block cookies, or disable IDFA tracking. If you do this, it may affect your use of a Website or an App.
            </p>

            <h2>KEEPING INFORMATION SECURE</h2>
            <p>
              We make reasonable efforts to protect your Personal Information, but no company, including Hamara Labs PVT LTD., can fully eliminate security risks connected to handling information on the internet. Moreover, we can't be in charge of any of your Personal Information that you discharge with anyone else, or that you ask for or approve us to discharge.
            </p>

            <h2>THIRD PARTY PROPERTIES ACCESSED FROM A WEBSITE AND/OR APP</h2>
            <p>
              Our Websites and Apps may contain links to and from the online properties of third parties. If you follow a link to any of these online properties, please note that these online properties have their own privacy policies which will govern use of any personal data that they process. Please check these policies carefully before you click on any links and/or submit any personal data to these online properties.
            </p>

            <h2>HOW TO CONTACT US</h2>
            <p>
              We truly do welcome any enquiries, remarks, and demands you may have with respect to this Policy. You can get in touch with us by messaging us at <a href="mailto:raja@hamaralabs.com">raja@hamaralabs.com</a>
            </p>

            <div className="privacy-footer">
              <p>© {new Date().getFullYear()} Hamara Labs PVT LTD. Privacy Policy Terms of Services</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Privacy;
