import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import rehypeRaw from "rehype-raw"; 

interface TextProps {
    id: string;
}

const Text: React.FC<TextProps> = ({id}) => {
  const { t, i18n } = useTranslation();
  const [description, setDescription] = useState(t(id));

  useEffect(() => {
    setDescription(t(id));
  }, [t, i18n.language]);

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
  );
};

export default Text;