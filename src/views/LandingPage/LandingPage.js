import React from 'react';
import Button from '@material-ui/core/Button';
import Remove from '@material-ui/icons/Remove';
import FormatQuoteRounded from '@material-ui/icons/FormatQuoteRounded';
import CustomCard from '../../components/CustomCard/CustomCard';
import Footer from '../Footer/Footer';

const LandingPage = () => (
  <div className="container">
    <div className="image">
      <div className="description-wrapper">
        <div className="description-text">
          We make company global travel and accommodation easy and convinient
        </div>
        <div className="description-bar">
          <Remove color="inherit" size={24} />
        </div>
        <div>
          <Button className="cta-btn" href="/signup">
            Get started
          </Button>
        </div>
      </div>
    </div>
    <div className="testimonials">
      <div className="testimony-title">What Companies Say</div>
      <div className="testimony-bar mb24">
        <Remove color="primary" size={48} />
      </div>
      <div className="testimony-card mb24">
        <div className="testimony-item">
          <div className="testimony-reviewer" />
          <div className="testimony-content">
            <div className="testimony-text mb24">
              <span><FormatQuoteRounded color="primary" size={128} /></span>
              <span className="highlight">Barefoot Nomad</span>
              has helped my company&apos;s staff travels &amp;
              find the best accommodations there is.
            </div>
            <div className="testimony-author">Elon Musk - CEO of Tesla Inc.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="cta-section">
      <div className="cta-section-frame">
        <div className="description-text mb24">
          Ready to travel?
        </div>
        <div className="cta-section-btn-wrapper">
          <Button className="cta-btn" href="/signup">
            Get started
          </Button>
        </div>
      </div>
    </div>
    <div className="services">
      <div className="services-content">
        <CustomCard title="Our Company" items={['Careers', 'About', 'Vision']} />
        <CustomCard title="Travel &amp; Accommodation" items={['Get started', 'Airlines', 'Accommodations']} />
        <CustomCard title="Support" items={['Help', 'Contact']} />
      </div>
    </div>
    <Footer />
  </div>
);

export default LandingPage;
