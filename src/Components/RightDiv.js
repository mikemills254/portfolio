import React, {useState} from 'react'
import Profile from '../Assets/images/profile.jpeg'
import {SiTwitter, SiInstagram, SiGithub} from 'react-icons/si'
import {BsFiletypePdf} from 'react-icons/bs'
import { BiMenu, BiMessageSquareDots } from 'react-icons/bi'
import { NavigationBar } from './LeftDiv'

function RightDiv() {
    const [isDropped, setIsDropped] = useState(false)
    const SetMenu = () => {
        setIsDropped((prevState) => !prevState)
    }
    return (
        <div className='Right w-[40%] p-10 flex flex-col overflow-y-auto h-full z-0' onScroll={() => setIsDropped(false)}>
            <BiMenu className='menu ml-[82%] absolute text-[30px] hidden' color='#1de4b5' onClick={() => {SetMenu()}}/>
            {isDropped &&
                <div className='dropDown bg-white z-20 absolute'>
                    <NavigationBar/>
                    <h3>hI</h3>
                </div>
            }
            <div className='nameholder border-white bg-[transparent] border-8 flex flex-col w-16 items-center justify-center px-10'>
                <h1 className='name font-bold tracking-[4px] text-[40px] text-[#ffffff]'>MI</h1>
                <h1 className='name font-bold tracking-[4px] text-[40px]  text-[#ffffff]'>KE</h1>
            </div>
            <div className='Profile w-[100%] h-[45vh] px-0'>
                <h1 className="Greeting font-[900] text-[60px] mb-6 bg-gradient-to-r from-[#f0f9ff] via-[#bfe9ff] to-[#bfe9ff] text-transparent bg-clip-text">Mike Mills.</h1>
                <h4 className='text-[white]'>A full stack developer</h4>
                <p className='text-[white]'>
                    I have been able to develop scalable softwares
                    for the last two years with javascript both backend and frontend
                </p>
                <button className='connectBtn font-semibold my-10 p-2 rounded-[3px] bg-[transparent] border-[2px] border-[#1de4b5] text-[#1de4b5] flex flex-row items-center gap-2 hover:bg-[#1de4b5] hover:text-[#00342d]'>
                    <BiMessageSquareDots size={25} /> Hire Me
                </button>
            </div>
            <div className='social items-center flex flex-row gap-2'>
                <div className="social cursor-pointer transform border-[#000000] border-[1px] rounded-sm" title='Twitter'>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"></a>
                    <SiTwitter className="text-[2rem]  rounded p-2 w-50 h-50 transform"/>
                </div>
                <div className='social cursor-pointer border-[#000000] border-[1px] rounded-sm' title='Instagram'>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"/>
                    <SiInstagram className="text-[2rem] rounded p-2 w-50 h-50 transform"/>
                </div>
                <div className='social cursor-pointer border-[#000000] border-[1px] rounded-sm' title='Github'>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"/>
                    <SiGithub className="text-[2rem] rounded p-2 w-50 h-50 transform"/>
                </div>
                <div className='social cursor-pointer border-[#000000] border-[1px] rounded-sm' title='Github'>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"/>
                    <BsFiletypePdf className="text-[2rem] rounded p-2 w-50 h-50 transform"/>
                </div>
            </div>
        </div>
    )
}
export default RightDiv