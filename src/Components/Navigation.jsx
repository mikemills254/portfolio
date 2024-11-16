import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useScrollBackground = () => {
    const [background, setBackground] = useState('transparent');
    
    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            setBackground('rgba(0, 0, 0, 0.3)');
        } else {
            setBackground('transparent');
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return background;
};

export default function Navigation({ handleNavigation }) {
  const background = useScrollBackground();
    
    return (
        <nav 
            className="h-14 w-full md:w-3/4 rounded-full my-5 fixed flex items-center justify-between px-8 z-50 backdrop-blur-sm"
            style={{ 
                background,
                transition: 'background-color 0.3s ease-in-out',
            }}
        >
            <div className="text-white text-lg sm:text-xl font-bold tracking-widest">
                Mike Mills
            </div>
                    
            <div className="block md:hidden">
                <button className="text-white focus:outline-none">
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
                    
            <ul className="hidden md:flex space-x-6 text-lg">
                <li className="cursor-pointer">
                    <button 
                        onClick={() => handleNavigation("home")} 
                        className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => handleNavigation("about")} 
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                        About
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => handleNavigation("projects")} 
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                        Projects
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => handleNavigation("contact")} 
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
}

Navigation.propTypes = {
    handleNavigation: PropTypes.func.isRequired,
};