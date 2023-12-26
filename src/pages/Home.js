
import React from 'react';
import equipment from '../assets/equipment.png'
import Footer from '../component/Footer'

const styles = {
  container: {
    width: '100%',
    height: '627px',
    backgroundImage: `url(${equipment})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 0 20px rgba(255, 165, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
    color: 'white',
  },
};

const HomePage = () => {
  return (
    <>
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>ONE INDUSTRY | ONE APP</h1>
        <p>OPERATORS | RENTALS | MECHANICS AND JOIN THE HEAVY EQUIPMENT REVOLUTION TODAY</p>
      </div>
    </div>
    <Footer/>
    </>
   
  );
  
};


export default HomePage;
