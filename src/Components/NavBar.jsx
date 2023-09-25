import React, { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai';
import { GoDownload } from 'react-icons/go'
import Resume from '../Assets/MIKE MILLS.pdf'

function NavBar({ handleScrollToView }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };
    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'MIKE MILLS.pdf';
        link.style.display = 'none';
    
        document.body.appendChild(link);
        link.click();
    
        document.body.removeChild(link);
    };
    

    return (
        <nav className={`navContainer justify-evenly p-1 w-full flex items-center fixed z-9999 top-0 bg-[black] ${isNavOpen ? 'displayNav' : ''}`}>
            <style>
                {`
                    @media (max-width: 768px) {
                        .ulContainer {
                            display: ${isNavOpen ? 'block' : 'none'};
                            backgroundColor: red;
                        }
                        .MenuIcon, .CloseIcon {
                            display: block;
                            font-size: 20px;
                            margin-left: 15rem;
                            cursor: pointer;
                        }
                        .MenuIcon {
                            display: ${isNavOpen ? 'none' : 'block'};
                        }
                        .CloseIcon {
                            display: ${isNavOpen ? 'block' : 'none'};
                        }
                        .hireBtn {
                            width: 10rem;
                            margin-left: 0;
                        }
                        .navContainer {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            padding: 10px;
                            /* Set the background color to opaque */
                            background-color: #293836;
                        }
                        .displayNav {
                            display: flex;
                            flex-direction: column;
                        }
                        .navList {
                            width: 100%;
                        }
                    }
                `}
            </style>
            <h1 className='logo'>mikeDev</h1>
            <ul className='ulContainer flex flex-row gap-5 overflow-x-auto items-center justify-center ' id='nav'>
                <li
                    onClick={() => { handleScrollToView('Home'); setIsNavOpen(false) }}
                    className='navList'
                >
                    <span>01. </span>Home
                </li>
                <li
                    onClick={() => { handleScrollToView('Skills'); setIsNavOpen(false) }}
                    className='navList'
                >
                    <span>02. </span>Skills
                </li>
                <li
                    onClick={() => { handleScrollToView('Portfolio'); setIsNavOpen(false) }}
                    className='navList'
                >
                    <span>03. </span>Portfolio
                </li>
                <li
                    onClick={() => { handleScrollToView('Contact'); setIsNavOpen(false) }}
                    className='navList'
                >
                    <span>04. </span>Contact
                </li>
                <div role='button' className='hireBtn gap-2 p-1.5 rounded ml-[3rem] flex flex-row items-center' onClick={() => handleDownloadClick()}>
                    <GoDownload 
                        color='white'
                        size={20}
                    />
                    <h2 className='hire text-base text-[#ffffff] font-semibold'>Resume</h2>
                </div>
            </ul>

            {isNavOpen ? (
                <AiOutlineClose
                    className='CloseIcon hidden items-center text-center font-bold'
                    onClick={() => handleToggleNavMenu()}
                    color='white'
                />
            ) : (
                <AiOutlineMenuFold
                    className='MenuIcon hidden items-center text-center font-bold'
                    onClick={() => handleToggleNavMenu()}
                    color='white'
                />
            )}
        </nav>
    );
}

export default NavBar;
