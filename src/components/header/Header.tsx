import TabSelector from "./TabSelector";
import {useState, useEffect} from "react";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    activeTab: string;
    setGoToTab: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({activeTab, setActiveTab, setGoToTab }) => {
    const [brightness, setBrightness] = useState(1);

    useEffect(() => {
    const handleScroll = () => {
        const button = document.getElementById("cat");
        if (button) {
        const rect = button.getBoundingClientRect();
        const normalizedTop = Math.min(Math.max(rect.top / window.innerHeight*1.5, 0), 1);
        const brightnessValue = 1 - normalizedTop;
        setBrightness(brightnessValue);
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div
            id="header"
            style={{
                backgroundColor: 'black',
                position: "sticky",
                top: 0,
                zIndex: 1000,
                paddingBottom: "10px",
            }}
        >
            <div className="title-web">Xesco Mercé</div>
            <LanguageSelector brightness={brightness}/>
            <TabSelector 
                brightness={brightness}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                setGoToTab={setGoToTab}
            />
        </div>
    );
};

export default Header;
