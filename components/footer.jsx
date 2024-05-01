import React from "react";

const Footer = () => {
  return (
    <div id="main-footer" className="bg-white">
      <div className="container flex">
        <div style={{ width: "20%" }} className="pr-10">
          <p className="footer-section-title">Quick Links</p>
          <ul className="list-none m-0">
            <li>
              <a href="/faq/" aria-label="FAQ">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://jobs.dubaicareers.ae/careersection/dubaicareers/jobsearch.ftl"
                aria-label="Careers"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Careers
              </a>
            </li>
            <li>
              <a href="/site-map/" aria-label="Sitemap">
                Sitemap
              </a>
            </li>
            <li>
              <a href="/contact/service-centers/" aria-label="Contact Us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div style={{ width: "20%" }} className="pr-10">
          <p className="footer-section-title">Website T&amp;Cs</p>
          <ul className="list-none m-0">
            <li>
              <a
                href="/website-policies/accessibility-information/"
                aria-label="Accessibility"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="/website-policies/terms-and-conditions/"
                aria-label="Terms &amp; Conditions"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a
                href="/website-policies/security-privacy/"
                aria-label="Security &amp; Privacy"
              >
                Security &amp; Privacy
              </a>
            </li>
          </ul>
        </div>
        <div style={{ width: "30%" }}>{/* This is an empty column */}</div>
        <div style={{ width: "20%" }} className="pr-10">
          <p className="footer-section-title">Download App</p>
          <ul className="flex gap-3">
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=ae.gov.dm.uma"
                aria-label="Android App"
                target="_blank"
                title="Download our Android App"
                rel="noopener noreferrer nofollow"
              >
                <img
                  src="https://d2ysif0spfh53o.cloudfront.net/wp-content/themes/dubaimunicipality/assets/images/icon-android.svg"
                  alt="Android App"
                />
              </a>
            </li>
            <li>
              <a
                href="https://apps.apple.com/ae/app/id1504636184"
                aria-label="iOS App"
                target="_blank"
                title="Download our iOS App"
                rel="noopener noreferrer nofollow"
              >
                <img
                  src="https://d2ysif0spfh53o.cloudfront.net/wp-content/themes/dubaimunicipality/assets/images/icon-ios.svg"
                  alt="iOS App"
                />
              </a>
            </li>
          </ul>
        </div>
        <div style={{ width: "20%" }}>
          <p className="footer-section-title">Social Media</p>
          <ul className="flex gap-3">
            <li>
              <a
                href="https://www.facebook.com/DubaiMunicipality"
                aria-label="Facebook"
                title="Go to our Facebook page"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  src="https://d2ysif0spfh53o.cloudfront.net/wp-content/themes/dubaimunicipality/assets/images/icon-facebook.svg"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/DMunicipality"
                aria-label="Twitter"
                title="Go to our Twitter"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  src="https://d2ysif0spfh53o.cloudfront.net/wp-content/themes/dubaimunicipality/assets/images/icon-twitter.svg"
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/DubaiMunicipalityUAE"
                aria-label="Youtube"
                title="Go to our Youtube channel"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  src="https://d2ysif0spfh53o.cloudfront.net/wp-content/themes/dubaimunicipality/assets/images/icon-youtube.svg"
                  alt="Youtube"
                />
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/dubaimunicipality"
                aria-label="Instagram"
                target="_blank"
                title="Go to our Instagram page"
                rel="noopener noreferrer nofollow"
              >
                <img
                  src="https://d2ysif0spfh53o.cloudfront.net/wp-content/themes/dubaimunicipality/assets/images/icon-instagam.svg"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
