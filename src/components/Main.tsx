import { useEffect } from "react";
import About from "./content/About";
import Contact from "./content/Contact";
import Gallery from "./content/Gallery";
import Newsletter from "./content/Newsletter";

interface MainProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  goToTab: string;
  setOpenPopup: React.Dispatch<React.SetStateAction<string|null>>;
  setGoToTab: React.Dispatch<React.SetStateAction<string>>;
}

const Main: React.FC<MainProps> = ({ setActiveTab, goToTab, setOpenPopup, setGoToTab }) => { 
  const sections = [
    { id: "about", component: <About /> },
    { id: "gallery", component: <Gallery setOpenPopup={setOpenPopup} setGoToTab={setGoToTab}/> },
    { id: "newsletter", component: <Newsletter setOpenPopup={setOpenPopup}/> },
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
    }, { threshold: 0.5 });

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
      <div className="px-[25px] md:px-[50px] text-justify text-[#444444] bg-[#FAF9F6]">
        {sections.map(({ id, component }) => (
          <div 
            id={id} 
            key={id}
            className="pt-[15vh] -mt-[10vh]"
          >
            {component}
          </div>
        ))}
      </div>
    );
};

export default Main;