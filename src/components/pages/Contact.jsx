import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact Page</h1>
      <div style={styles.contentContainer}>
        <div style={styles.linksContainer}>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" style={styles.link}>
            <FaLinkedin size={60} /> {/* Doubled the size */}
            <span style={styles.linkText}>LinkedIn</span>
          </a>
          <a href="https://github.com/Jbyrd126" style={styles.link}>
            <FaGithub size={60} /> {/* Doubled the size */}
            <span style={styles.linkText}>GitHub</span>
          </a>
          <a href="mailto:jbyrd126@gmail.com" style={styles.link}>
            <FaEnvelope size={60} /> {/* Doubled the size */}
            <span style={styles.linkText}>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  contentContainer: {
    width: '80%', // 80% of the viewport width
    margin: '0 auto', // Center the container
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Display icons in a row
    marginTop: '20px',
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 15px',
    textDecoration: 'none',
    color: '#333',
  },
  linkText: {
    marginTop: '10px',
    fontSize: '14px',
  },
};