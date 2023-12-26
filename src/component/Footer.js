import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={mapStyle}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30252.497132417953!2d73.73641983476564!3d18.593768900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9607dde4087%3A0x77c91918829a2aa4!2sEQUIP9%E2%84%A2%EF%B8%8F%20-%20Connecting%20Equipment%20To%20Your%20Business!5e0!3m2!1sen!2sin!4v1703490621218!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={mapFrameStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div style={sectionsStyle}>
        <div style={sectionStyle}>
          <h3>Home</h3>
        </div>
        <div style={sectionStyle}>
          <h3>About</h3>
        </div>
        <div style={sectionStyle}>
          <h3>Finance</h3>
        </div>
        <div style={sectionStyle}>
          <div style={socialMediaStyle}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const mapStyle = {
  width: '100%',
  height: '250px',
  borderRadius: '10px',
  overflow: 'hidden',
};

const mapFrameStyle = {
  border: '0',
  width: '100%',
  height: '100%',
};

const sectionsStyle = {
  display: 'flex',
  gap: '20px',
};

const sectionStyle = {
  textAlign: 'center',
};

const socialMediaStyle = {
  display: 'flex',
  gap: '10px',
  color: 'white',
  fontSize: '20px',
};

export default Footer;
