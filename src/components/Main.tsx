import { useEffect } from "react";
import About from "./content/About";
import Contact from "./content/Contact";
import Books from "./content/Books";
import Gallery from "./content/Gallery";
import Newsletter from "./content/Newsletter";

interface MainProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  goToTab: string;
  setOpenPopup: React.Dispatch<React.SetStateAction<string|null>>;
}

const Main: React.FC<MainProps> = ({ setActiveTab, goToTab, setOpenPopup }) => { 
  const sections = [
    { id: "about", component: <About /> },
    { id: "newsletter", component: <Newsletter /> },
    { id: "gallery", component: <Gallery setOpenPopup={setOpenPopup}/> },
    { id: "books", component: <Books setOpenPopup={setOpenPopup}/> },
    { id: "contact", component: <Contact/> },
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
      <>
        <div className="main">
          {sections.map(({ id, component }) => (
            <div 
              id={id} 
              key={id}
              className="section"
            >
              {component}
            </div>
          ))}
        </div>
      </>
    );
};

export default Main;