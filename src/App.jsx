import React, { useRef } from 'react';
import './Utils/customeStyles.css';
import NavBar from './Components/NavBar';
import { Toaster } from 'react-hot-toast';
import {
    HomeContainer,
    SkillsComponent,
    PortfolioContainer,
    // ContactContainer,
} from './Components/pageComponent';

function App() {
    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const handleScrollToView = (sectionId) => {
        if (sectionId === 'Home') {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'Skills') {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'Portfolio') {
            portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'Portfolio') {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="body">
            <NavBar handleScrollToView={handleScrollToView}/>
            <HomeContainer ref={homeRef} />
            <SkillsComponent ref={skillsRef} />
            <PortfolioContainer ref={portfolioRef} />
            {/* <ContactContainer ref={contactRef} /> */}
            <Toaster position="top-center" />
        </div>
        
    );
}

export default App;