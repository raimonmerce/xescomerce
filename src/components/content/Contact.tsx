import React from "react";
import { useTranslation } from "react-i18next";
import SocialLink from "../commons/SocialLink";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MAIN_EMAIL, LOCATION_1, LOCATION_2 } from "../../constants";
import styles from "./Contact.module.css";
import heartImage from "../../assets/heart.png";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(MAIN_EMAIL);
      alert("Email copied")
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  const goToEsplugues = () => {
    const mapsUrl = `https://www.google.com/maps/place/Esplugues+de+Llobregat,+Barcelona/@41.3780025,2.0686802,14z/data=!3m1!4b1!4m6!3m5!1s0x12a4990a4d195373:0xe037282523fefd6d!8m2!3d41.3766912!4d2.0858115!16s%2Fg%2F11cn61c919?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D`;
    window.open(mapsUrl, "_blank");
  }

  const goToIvars = () => {
    const mapsUrl = `https://www.google.com/maps/place/25260+Ivars+d'Urgell,+Lleida/@41.6789734,0.9773378,15z/data=!3m1!4b1!4m6!3m5!1s0x12a6915376cfbc8f:0xe049a658b8578a59!8m2!3d41.6804785!4d0.9880419!16s%2Fm%2F0h53qpn?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D`;
    window.open(mapsUrl, "_blank");
  }

  return (
    <>
      <div className="flex items-center w-full px-4 pb-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="text-[25px] md:text-[30px] px-4 text-center whitespace-nowrap">{t("header.contact")}</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactItem} onClick={copyEmailToClipboard}>
            <FaEnvelope size={20} />
          <span>{MAIN_EMAIL}</span>
        </div>

        <div className={styles.contactItem}>
          <FaMapMarkerAlt size={20} />
          <span className={styles.contactLocation} onClick={goToIvars}>{LOCATION_2}</span>
          <span className={styles.contactSpace}>{"   |   "}</span>
          <span className={styles.contactLocation} onClick={goToEsplugues}>{LOCATION_1} </span>
        </div>

        <div
          className="relative  h-[40vh] bg-cover bg-center overflow-hidden flex justify-center items-center"
        >
          <img
            src={heartImage}
            alt="Floating Center Image"
            className={`object-contain animate-pulseheart`}
          />
        </div>

        <div className={styles.socialLinks}>
          <SocialLink href="https://www.linkedin.com/in/xesco-merce-0b266610b" icon={<FaLinkedin size={30} />} label="LinkedIn" />
          <SocialLink href="https://www.instagram.com/xescomerce/" icon={<FaInstagram size={30} />} label="Instagram" />
          <SocialLink href="https://www.facebook.com/xesco.merce/" icon={<FaFacebook size={30} />} label="Facebook" />
        </div>


      </div>
      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} Xesco Mercé. {t("footer.rights")}
      </div>
    </>
  );
};

export default Contact;
