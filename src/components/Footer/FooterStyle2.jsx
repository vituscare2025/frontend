import React from 'react';
import MenuWidget from '../Widget/MenuWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import TextWidget from '../Widget/TextWidget';
import SocialWidget from '../Widget/SocialWidget';
import NewsletterStyle2 from '../Widget/NewsletterStyle2';
const menuDataOne = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Blogs', href: '/blogs' },
  { title: 'Career', href: '/career' },
  { title: 'FeedBack', href: '/feedback' },

];

const menuDataTwo = [
  { title: 'Testimonials', href: '/' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact Us', href: '/' },
  { title: 'FAQs', href: '/' },
];
const menuDataThree = [
  { title: 'Privacy Policy', href: '/privacy-policy' },
];

export default function FooterStyle2() {
  return (
    <footer className="cs_footer cs_style_2 cs_accent_bg cs_white_color">
      <div className="container">
        <div className="cs_footer_in">
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <TextWidget
                logoUrl="/images/vc-logo.png"
                text="VitusCare Medife Pvt. Ltd."
              />
              <ContactInfoWidget />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataOne} />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataThree} />
              <SocialWidget />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom">
        <div className="container">
          <div className="cs_copyright">
            Copyright © 2025 VitusCare. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
