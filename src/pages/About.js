import React from 'react';
import Footer from '../component/Footer';

const About = () => {
  const containerStyle = {
   
  };

  const contentStyle = {
    width: '100%',
    height: '1045px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f2f2f2',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const videoSectionStyle = {
    display: 'flex',
  };

  const videoContainerStyle = {
    flex: 1,
    marginRight: '20px',
  };

  const missionSectionStyle = {
    flex: 1,
  };

  return (
    <>
    <div className="about-container" style={containerStyle}>
      <div className="about-content" style={contentStyle}>
        <div className="header" style={headerStyle}>
          <h2>What We Do</h2>
          <p>EQUIP9 TM delivers more to heavy equipment business so that customers just don't do business, they do optimized and futuristic business.</p>
        </div>

        <div className="video-section" style={videoSectionStyle}>
          <div className="video-container" style={videoContainerStyle}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/g37zmCLtPzo?si=jhpwUY3B3dmXL8uh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>

          <div className="mission-section" style={missionSectionStyle}>
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide a 360-degree connection for all participants in the heavy equipment industry. We envision being a one-stop shop for everything related to heavy equipment, from buying and selling to renting and financing. By bringing the industry together on one platform, we aim to reduce the barriers to entry, increase efficiency, and facilitate growth for all stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
