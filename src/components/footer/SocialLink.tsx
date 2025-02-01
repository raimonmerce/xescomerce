import React from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    {icon}
  </a>
);

export default SocialLink;
