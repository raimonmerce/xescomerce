import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import SocialLink from "./SocialLink";
import './Footer.css'; 

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Xesco Mercé. {t('footer.rights', 'Tots els drets reservats.')}
        </p>
        <div className="social-links">
          <SocialLink href="https://www.linkedin.com/in/xesco-merce-0b266610b" icon={<FaLinkedin />} label="LinkedIn" />
          <SocialLink href="https://www.instagram.com/xescomerce/" icon={<FaInstagram />} label="Instagram" />
          <SocialLink href="https://www.facebook.com/xesco.merce/" icon={<FaFacebook />} label="Facebook" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
