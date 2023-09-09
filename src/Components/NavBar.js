import React, { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai';

function NavBar({ handleScrollToView }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={`navContainer justify-evenly w-full flex items-center fixed z-9999 top-0 bg-[#2e413f] ${isNavOpen ? 'displayNav' : ''}`}>
            <style>
                {`
                    @media (max-width: 768px) {
                        .ulContainer {
                            display: ${isNavOpen ? 'block' : 'none'};
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
                            display: none;
                        }
                        .navContainer {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            padding: 10px;
                        }
                        .displayNav {
                            display: flex;
                            flex-direction: column;
                        }
                    }
                `}
            </style>
            <h1 className='logo'>mikeDev</h1>
            <ul className='ulContainer flex flex-row gap-5 overflow-x-auto' id='nav'>
                <li
                    onClick={() => {handleScrollToView('Home'); setIsNavOpen(false)}}
                    className='navList'
                >
                    Home
                </li>
                <li
                    onClick={() => {handleScrollToView('Skills'); setIsNavOpen(false)}}
                    className='navList'
                >
                    Skills
                </li>
                <li
                    onClick={() => {handleScrollToView('Portfolio'); setIsNavOpen(false)}}
                    className='navList'
                >
                    Portfolio
                </li>
                <li
                    onClick={() => {handleScrollToView('Contact'); setIsNavOpen(false)}}
                    className='navList'
                >
                    Contact
                </li>
            </ul>

            <div role='button' className='hireBtn bg-[#557174] p-1.5 rounded'>
                <h2 className='hireText text-base text-white font-semibold'>Hire me!</h2>
            </div>
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

export default NavBar