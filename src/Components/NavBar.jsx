import React, { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai';

function NavBar({ handleScrollToView }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={`navContainer opacity-1 justify-evenly w-full flex items-center fixed z-9999 top-0 bg-[#293836] ${isNavOpen ? 'displayNav' : ''}`}>
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
                            display: block;
                            width: 10rem;
                            margin-left: 0
                        }
                        .navContainer {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            padding: 10px;
                            backgroundColor: red
                        }
                        .displayNav {
                            display: flex;
                            flex-direction: column;
                        }.
                        navList {
                            width: 100%
                        }
                    }
                `}
            </style>
            <h1 className='logo'>mikeDev</h1>
            <ul className='ulContainer flex flex-row gap-5 overflow-x-auto items-center ' id='nav'>
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
                <div role='button' className='hireBtn  p-1.5 rounded ml-[3rem] flex flex-col items-center' onClick={() => {handleScrollToView('Contact'); setIsNavOpen(false)}}>
                    <h2 className='hiretext text-base text-[red] font-semibold'>Contact me!</h2>
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

export default NavBar