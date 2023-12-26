import React, { useState } from 'react';


const Finance= () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    finance_name: '',
    contact_name: '',
    email: '',
    phone: '',
    region: '',
    location: '',
    certificate: null,
    license: null,
    logo: null,
    photo: null,
    video: null,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const nextStep = () => {
    if (step === 1 && (!validatePhoneNumber(formData.phone) || !validateEmail(formData.email))) {
      alert('Please enter a valid email and phone number.');
      return;
    }
  
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const validatePhoneNumber = (phone) => {
    const isValid = /^\d{10}$/.test(phone);
    setIsValidPhone(isValid);
    return isValid;
  };

  const validateEmail = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setIsValidEmail(isValid);
    return isValid;
  };

  const submitForm = () => {
    if (step === 1 && (!validatePhoneNumber(formData.phone) || !validateEmail(formData.email))) {
      alert('Please enter a valid email and phone number.');
      return;
    }
    
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add Financier Details</h1>
      <div style={styles.formContainer}>
        {formSubmitted ? (
          <div style={styles.successMessage}>
            Form submitted successfully! <br />
          </div>
        ) : (
          <>
            {step === 1 && (
              <>
              <h2>Personal Details</h2>
                <div style={styles.formGroup}>
                  <label>Finance Name:</label>
                  <input type="text" name="finance_name" value={formData.finance_name} onChange={handleChange} maxLength={50} />
                </div>

                <div style={styles.formGroup}>
                  <label>Contact Name:</label>
                  <input type="text" name="contact_name" value={formData.contact_name} onChange={handleChange} maxLength={50} />
                </div>

                <div style={styles.formGroup}>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={!isValidEmail ? 'invalid-input' : ''}
                    required
                  />
                  {!isValidEmail && <span style={styles.errorText}>Invalid email format</span>}
                </div>

                <div style={styles.formGroup}>
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={!isValidPhone ? 'invalid-input' : ''}
                    required
                  />
                  {!isValidPhone && <span style={styles.errorText}>Invalid phone number format</span>}
                </div>

                <button style={styles.button} onClick={nextStep}>
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Region and Location</h2>
                <div style={styles.formGroup}>
                  <label>Region:</label>
                  <input type="text" name="region" value={formData.region} onChange={handleChange} maxLength={50} />
                </div>

                <div style={styles.formGroup}>
                  <label>Location:</label>
                  <select name="location" value={formData.location} onChange={handleChange} required>
                    <option value="">Select a choice</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Bangalore">Bangalore</option>
                  </select>
                </div>

                <button style={styles.button} onClick={previousStep}>
                  Previous
                </button>
                <button style={styles.button} onClick={nextStep}>
                  Next
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <h2>Upload Documents</h2>
                <div style={styles.formGroup}>
                  <label>Upload Certificate:</label>
                  <input type="file" name="certificate" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                </div>

                <div style={styles.formGroup}>
                  <label>Upload License (Optional):</label>
                  <input type="file" name="license" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                </div>

                <button style={styles.button} onClick={previousStep}>
                  Previous
                </button>
                <button style={styles.button} onClick={nextStep}>
                  Next
                </button>
              </>
            )}

            {step === 4 && (
              <>
                <h2>Images and Video Upload</h2>
                <div style={styles.formGroup}>
                  <label>Upload Logo:</label>
                  <input type="file" name="logo" onChange={handleFileChange} accept=".jpg,.jpeg,.png" required />
                </div>

                <div style={styles.formGroup}>
                  <label>Upload Photo (Optional):</label>
                  <input type="file" name="photo" onChange={handleFileChange} accept=".jpg,.jpeg,.png" />
                </div>

                <div style={styles.formGroup}>
                  <label>Upload Video (Optional):</label>
                  <input type="file" name="video" onChange={handleFileChange} accept=".mp4,.mov,.avi" />
                </div>

                <button style={styles.button} onClick={previousStep}>
                  Previous
                </button>
                <button style={styles.button} onClick={submitForm}>
                  Submit
                </button>
              </>
            )}
          </>
         
        )}
      </div>
    
    </div>
    
    
  );

};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    color: '#343a40',
  },
  formContainer: {
    marginTop: '20px',
  },
  formGroup: {
    marginBottom: '20px',
    maxLength:"5"
  },
  button: {
    backgroundColor: '#343a40',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  successMessage: {
    textAlign: 'center',
    color: 'green',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
  },
};

export default Finance;
