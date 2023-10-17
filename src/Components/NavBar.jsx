import React, { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai';
import { GoDownload } from 'react-icons/go'
import LOGO from '../../public/mike.png'

function NavBar({ handleScrollToView }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isActive, setIsActive] = useState()

    const handleToggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };
    const toggleActive = () => {
        setIsActive(!isActive)
        console.log('active toggled');
    }

    return (
        <nav className={`navContainer justify-evenly p-1 w-full flex items-center z-[9999] fixed top-0 bg-[#F4FBFF] ${isNavOpen ? 'displayNav' : ''}`}>
            <style>
                {`
                    @media (max-width: 768px) {
                        .ulContainer, .contactBtn {
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
                            background-color: #F4FBFF;
                        }
                        .displayNav {
                            display: flex;
                            flex-direction: column;
                        }
                        .navList {
                            width: 100%;
                        }
                        .logo {
                            margin-left: 20px
                        }
                    }
                `}
            </style>
            <img src={LOGO} width={120}/>
            <ul className='ulContainer flex flex-row gap-2 overflow-x-auto items-center justify-center ' id='nav'>
                <li
                    onClick={() => { handleScrollToView('Home'); setIsNavOpen(false), toggleActive() }}
                    className='navList'
                >
                    <span>01. </span>HOME
                </li>
                <li
                    onClick={() => { handleScrollToView('Skills'); setIsNavOpen(false) }}
                    className='navList'
                >
                    <span>02. </span>SKILLS
                </li>
                <li
                    onClick={() => { handleScrollToView('Portfolio'); setIsNavOpen(false) }}
                    className='navList'
                >
                    <span>03. </span>PORTFOLIO
                </li>
            </ul>
            <button className='contactBtn border-[1.8px] p-2 rounded-md border-[#0088cc] text-[#0088cc]' onClick={() => { handleScrollToView('Contact'); setIsNavOpen(false) }}>
                Contact Me
            </button>

            {isNavOpen ? (
                <AiOutlineClose
                    className='CloseIcon hidden items-center text-center font-bold'
                    onClick={() => handleToggleNavMenu()}
                    color='#4f4efc'
                />
            ) : (
                <AiOutlineMenuFold
                    className='MenuIcon hidden items-center text-center font-bold mr-5'
                    onClick={() => handleToggleNavMenu()}
                    color='#4f4efc'
                />
            )}
        </nav>
    );
}

export default NavBar;
