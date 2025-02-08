import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SocialLink from "../commons/SocialLink";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { MAIN_EMAIL } from '../../constants';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [copySuccess, setCopySuccess] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(MAIN_EMAIL);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset copy success after 2 seconds
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  return (
    <>
      <h2>{t("header.contact")}</h2>
      <p>{t("contact.message")}</p>
      <p>Contact us at: {MAIN_EMAIL}</p>
      
      {/* Email logo with copy functionality */}
      <div className="email-logo" onClick={copyEmailToClipboard}>
        <FaEnvelope size={30} style={{ cursor: 'pointer' }} />
        {copySuccess && <span style={{ color: 'green', marginLeft: '10px' }}>Copied!</span>}
      </div>

      <div className="social-links">
        <SocialLink href="https://www.linkedin.com/in/xesco-merce-0b266610b" icon={<FaLinkedin />} label="LinkedIn" />
        <SocialLink href="https://www.instagram.com/xescomerce/" icon={<FaInstagram />} label="Instagram" />
        <SocialLink href="https://www.facebook.com/xesco.merce/" icon={<FaFacebook />} label="Facebook" />
      </div>
    </>
  );
};

export default Contact;
