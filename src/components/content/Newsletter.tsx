import React from "react";
import { useTranslation } from "react-i18next";

const Newsletter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("header.newsletter")}</h2>
      <p>{t("newsletter.description")}</p>
      <form>
        <input type="email" placeholder="Your Email" className="p-2" />
        <button type="submit" className="btn-submit">Subscribe</button>
      </form>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
    </>
  );
};

export default Newsletter;
