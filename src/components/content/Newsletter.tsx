import React from "react";
import { useTranslation } from "react-i18next";

const Newsletter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-[20px] md:text-[30px]">{t("header.newsletter")}</p>
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
