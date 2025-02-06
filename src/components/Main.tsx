import { useEffect } from "react";
import About from "./content/About";
import Contact from "./content/Contact";
import Books from "./content/Books";
import Home from "./content/Home";
import Gallery from "./content/Gallery";
import Newsletter from "./content/Newsletter";

interface MainProps {
  activeTab: string;
  setOpenPeace: React.Dispatch<React.SetStateAction<string>>;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  goToTab: string;
}

const Main: React.FC<MainProps> = ({ activeTab, setOpenPeace, setActiveTab, goToTab }) => {
  const sections = [
    { id: "about", component: <About /> },
    { id: "newsletter", component: <Newsletter /> },
    { id: "gallery", component: <Gallery/> },
    { id: "books", component: <Books /> },
    { id: "contact", component: <Contact /> },
  ];

  useEffect(() => {
    const section = document.getElementById(goToTab);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [goToTab]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, { threshold: 1.0 });

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [setActiveTab]);

    return (
      <div>
        {sections.map(({ id, component }) => (
          <div 
            id={id} 
            key={id}
            style={{
              paddingTop: "15vh", // Adjust this value based on your sticky header height
              marginTop: "-15vh", // Negative margin to offset the padding
            }}
          >
            {component}
          </div>
        ))}
      </div>
    );
};

export default Main;