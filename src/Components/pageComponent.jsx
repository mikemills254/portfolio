import React, { forwardRef, useRef, useState } from 'react'
import '../Utils/customeStyles.css'
import nodeIcon from '../Assets/images/node.png'
import expoIcon from '../Assets/images/expo.jpeg'
import figmaIcon from '../Assets/images/Figma 2.png'
import reactIcon from '../Assets/images/react-2.png'
import tailwind from '../Assets/images/tailwind.png'
import python from '../Assets/images/py.png'
import javascript from '../Assets/images/js.png'
import html from '../Assets/images/html.png'
import CSS from '../Assets/images/css.png'
import { Wrapper } from '../Utils/StyledComponents'
import CardsComponent from './CardsComponent'
import Rate from '../Assets/images/Rate.png'
import android from '../Assets/images/android.png'
import Profile from '../Assets/images/Portfolio.png'
import { SocialIcon } from 'react-social-icons';
import { useFormik } from 'formik'
import { toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser';
import * as Yup from 'yup'
import { IoLocationOutline } from 'react-icons/io5'
import { BsPhone } from 'react-icons/bs'
import '../Utils/mediaQuery.css'
import { Bars } from 'react-loader-spinner'
import NewsApp from '../Assets/images/NewsApp.png'
import WebDev from '../Assets/images/webDev.png'
import ApiDev from '../Assets/images/apiDev.png'
import fileConverter from '../Assets/images/File Converter.png'
import Firebase from '../Assets/images/Firebase.png'
import Mongodb from '../Assets/images/MongoDB-Logo.png'

export const HomeContainer = forwardRef(({ sectionId }, ref) => {
    return (
        <Wrapper className='wrapperContain flex flex-col items-center pt-[7rem] px-[10rem] bg-[#c0cfd0]' id={sectionId} ref={ref}>
            <style>
                {`
                @media (max-width: 768px) {
                    .intro {
                        font-size: 2rem;
                    }
                }
                `}
            </style>
            <p className='intro text-[3rem] text-center font-bold hover:cursor-pointer text-[#000000] max-w-[60rem]'>
                A Frontend Developer Using React and React Native JavaScript Frameworks
            </p>
            <div className="w-[10rem] h-[10rem] rounded-[20rem] flex items-center border-none justify-center overflow-hidden">
                <img
                    src={Profile}
                    className='profileImg w-[100%] h-[100%] object-cover border-none'
                    alt="Person"
                />
            </div>
            <p className='description text-center text-[1rem] max-w-[40rem] mt-5'>
                Hello, I'm <br/>
                <small className='logo1 text-[40px] text-red-500 font-extrabold'>Mike Mills,</small> <br/>
                    an enthusiastic software developer, eager to turn your ideas into reality.
                    Let's transform your vision into code and innovation! Let's collaborate to bring your vision to life through innovative coding solutions.
            </p>

            <div className='socialIcon p-2 my-2 flex flex-row items-center align-middle w-full justify-center gap-5'>
                <SocialIcon network="github" url="https://github.com/mikemills254?tab=repositories" className='socials' style={{ fontSize: 10}}/>
                <SocialIcon network="codepen" url="https://codesandbox.io/dashboard/recent?workspace=072dc053-9367-4fff-8ec3-f92ddaa0a0da"  className='socials'/>
                <SocialIcon network="x" url="https://twitter.com/SweetDzaddy?t=tlxqa-fpaIVg_Y8ZMG-0pA&s=09"  className='socials' />
                <SocialIcon network="linkedin" url="https://twitter.com/SweetDzaddy?t=tlxqa-fpaIVg_Y8ZMG-0pA&s=09"  className='socials'/>

            </div>
        </Wrapper>
    );
})



export const SkillsComponent = forwardRef(({ sectionId }, ref) => {
    const Services = [
        {
            skillName: "Native App Design",
            skillDescription: "I specialize in developing native apps with React Native and Expo, utilizing Redux Toolkit for efficient state management and Firebase for authentication and backend services.",
            skillImage: android,
            tech: ['https://example.com']
        },
        {
            skillName: "Web & App Development",
            skillDescription: "I excel in creating responsive and visually appealing websites using React.js. Leveraging libraries like React Router for seamless navigation, Styled-components for elegant styling, and Axios for efficient data fetching, I deliver engaging web experiences.",
            skillImage: WebDev,
            tech: ['https://example.com']
        },
        {
            skillName: "API Design and Development",
            skillDescription: "I specialize in REST API development within the MERN stack, employing an array of powerful libraries and tools, including Axios, Mongoose, Passport.js, and more. With a focus on security, efficiency, and scalability, I create robust backends for modern web applications.",
            skillImage: ApiDev,
            tech: ['https://example.com']
        },
    ];
    

    const Skills = [
        { name: "ReactJs", image: reactIcon },
        { name: "Expo", image: expoIcon },
        { name: "Node Js", image: nodeIcon },
        { name: "Tailwind", image: tailwind },
        { name: "Javascript", image: javascript },
        { name: "html", image: html },
        { name: "css", image: CSS },
        { name: "python", image: python },
        { name: "Mongodb", image: Mongodb },
        { name: "Firebase", image: Firebase },
    ]

    return (
        <Wrapper id={sectionId} className='mainContainerSkills flex flex-col align-middle items-center' ref={ref}>
            <style>
                {`
                    @media (max-width: 768px) {
                        .intro {
                            font-size: 2rem;
                        }
                        .servicesContainer {
                            display : flex;
                            flex-direction : column;
                        }
                        .img {
                            width: 30px;
                            height: 30px 
                        }
                        .skillContainer {
                            display: flex; 
                            flex-wrap: wrap; 
                            max-width: 100px; 
                        }

                    }
                `}
            </style>
            <h1 className='font-bold text-[2rem] text-[#161d55] underline'>Skills and Services</h1>
            <div className='serv&skills w-full h-[100vh] flex flex-row justify-between p-2'>
                <div className='sillsContainer h-[100%] w-[40%]'>
                    <div className='skillsContainer flex flex-row flex-wrap w-full flex-grow p-2 gap-5'>
                    {Skills.map((skill) => (
                        <div key={skill.name} className='skillContainer w-[5rem] p-2 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                            <div className='skillImage h-[80%] flex flex-col items-center justify-center'>
                                <img src={skill.image} width="100%" height="100%" alt={skill.name} className='skillimg object-cover xl:bg-transparent' />
                            </div>
                            <h1 className='skillname text-center'>{skill.name}</h1>
                        </div>
                    ))}
                    </div>
                    <div>
                        <h2>div two</h2>
                    </div>
                </div>
                <div className='serviceContainer h-[100%] w-[60%] flex p-2 flex-row flex-wrap gap-y-4 pl-10'>
                    {Services.map((service) => (
                        <div key={service.skillName} className='servicesContainer w-[17rem] cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 mr-7'>
                            <img
                                src={service.skillImage}
                                className='img w-[5rem] mb-5 shadow-2xl p-2 rounded-md'
                            />
                            <h1 className='title font-bold'>{service.skillName}</h1>
                            <small>{service.skillDescription}</small>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
});

export const PortfolioContainer = forwardRef(({ sectionId }, ref) => {
    const Projects = [
        {
            title: "Rate System",
            description: "The rate and feedback system is a web application built using Express.js, Node.js, and MongoDB, allowing users to rate and provide feedback on products or services, enhancing user engagement and business insights.",
            image: Rate,
            tech: ['reactJs', 'mongoDb', 'reduxToolkit', 'nodeJs' ],
            link: 'https://github.com/mikemills254/rate-system'
        },
        {
            title: "Auth API 2FA",
            description: "An Express.js JWT Authentication API is a modern method of securing web applications with JSON Web Tokens (JWT). It facilitates user registration, login, and access to protected resources through token-based authentication.",
            image: Rate,
            tech: ['nodeJs', 'mongoDb', 'reduxToolkit'],
            link: 'https://github.com/mikemills254/rate-system'
        },
        {
            title: "Android News Application",
            description: "The rate and feedback system is a web application built using Express.js, Node.js, and MongoDB, allowing users to rate and provide feedback on products or services, enhancing user engagement and business insights.",
            image: NewsApp,
            tech: ['reactJs', 'mongoDb', 'reduxToolkit', 'NewsApi'],
            link: 'https://github.com/mikemills254/New_App'
        },
        {
            title: "File Converter PDF to DOCX",
            description: "A web-based system using Flask and ReactJS to convert PDF files to DOCX format. Axios and CORS ensure smooth communication between servers.",
            image: fileConverter,
            tech: ['vite', 'reactJs', 'axios', 'CORS', 'pdftodocx'],
            link: 'https://github.com/mikemills254/docConverter'
        },
    ]
    return(
        <Wrapper className='Container p-16 flex flex-col items-center justify-center bg-[red] h-[100%]' id={sectionId} ref={ref} style={{backgroundColor: '#b3ccff'}}>
            <style>
                {`
                @media (max-width: 768px) {
                    .projectContents {
                        flex: 1;
                        flex-direction: column;
                    }
                    .projectHolder {
                        padding: 5px
                    }
                    .Container {
                        padding: 5rem 0,
                        align-items: 'center';
                        display: flex;
                    }
                }
                `}
            </style>
            <h1 className='title text-center font-bold text-[2rem] text-[#161d55] underline'>Projects</h1>
            <div className='projectContents flex flex-row items-start flex-wrap'>
                {Projects.map((project, index) => (
                    <CardsComponent
                        key={index}
                        CardsTitle={project.title}
                        cardsImage={project.image}
                        CardsDescription={project.description}
                        tech={project.tech}
                        bgColor="#bdd6ff"
                        linkComponent={project.link}
                    />
                ))}
            </div>
        </Wrapper>
    )
})

export const ContactContainer = forwardRef(({ sectionId }, ref) => {
    const form = useRef();
    const SERVICE_ID = import.meta.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.REACT_APP_PUBLIC_KEY;
    const [ isLoader, setIsLoading ] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required')
                .max(15, 'Must be 15 characters or less'),
            email: Yup.string()
                .email('Invalid Email Address')
                .required('Required'),
            message: Yup.string().required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            setIsLoading(true)
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(() => {
                        setIsLoading(false)
                        toast.success('Successfully sent');
                        console.log(values)
                        resetForm();
                    },(error) => {
                        toast.error(error);
                    }
                );
            },
        });
    return (
        <Wrapper className='divs h-[100%] items-center flex flex-row justify-around bg-[#5676ff]' id={sectionId} ref={ref}>
            <style>
                {`
                @media (max-width: 768px) and (max-width: 1024px) {
                    .divs {
                        flex-direction: column-reverse;
                    }
                    .contactIntro {
                        border-left-width: 0;
                    }
                    .form {
                        border-left-width: 0;
                        width: 100%
                    }
                    .inputs {
                        width: 100%;
                        border-Color: #c0cfd0
                    }
                },
                @media (max-width: 1024px) {
                    .divs {
                        flex-column: column
                    }
                }
                `}
            </style>
            <div className='contactIntro my-5 border-l h-[100%] p-10'>
                <h2 className='text font-bold text-[25px] text-[#51f7cb]'>Let's Get In Touch</h2>
                <small className='text-[#c8ffee]'>Feel free to get in touch with me. Let's create your dream and also be buddies!</small>
            <div className='footer flex flex-col gap-2 h-[100%]'>
                <div className='footer3 flex flex-row gap-1 items-center '>
                    <IoLocationOutline color='#c8ffee'/>
                    <h6>Nairobi, Kenya</h6>
                </div>
                <div className='footer3 flex flex-row gap-1 items-center '>
                    <BsPhone color='#c8ffee'/>
                    <h6>+254 701 233 944</h6>
                </div>
                <div className='footer3 flex flex-row gap-1 items-center '>
                    <p>&copy; {new Date().getFullYear()} Mike Mills. All rights reserved.</p>
                </div>
            </div>
            </div>
            <form onSubmit={formik.handleSubmit} ref={form} className='form border-l p-10 items-center flex flex-col gap-4 w-1/2'>
                <input
                    type='text'
                    placeholder='Your Name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='inputs w-full outline-none p-2 bg-inherit border-[#c0cfd0] border-[1px] rounded placeholder-[#c0cfd0] text-[#c0cfd0] focus:placeholder-[#c0cfd0]'
                />
                {formik.touched.name && formik.errors.name ? <small className='text-[red]'>{formik.errors.email}</small> : null}
                <input
                    type='email'
                    placeholder='Your Email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='inputs w-full outline-none p-2 bg-inherit border-[#c0cfd0] border-[1px] rounded placeholder-[#c0cfd0] text-[#c0cfd0] focus:placeholder-[#c0cfd0]'
                />
                {formik.touched.email && formik.errors.email ? <small className='text-[red]'>{formik.errors.email}</small> : null}
                <textarea
                    placeholder='Your Message'
                    name='message'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='inputs w-full outline-none p-2 bg-inherit border-[#c0cfd0] border-[1px] rounded placeholder-[#c0cfd0] text-[#c0cfd0] focus:placeholder-[#c0cfd0] '
                />
                {formik.touched.message && formik.errors.message ? <small className='text-[red]'>{formik.errors.message}</small> : null}
                <button 
                    type='submit'
                    disabled={formik.isSubmitting}
                    className='submit w-full bg-[#90ffdd] p-2 rounded text-[#00342d] font-bold flex flex-row justify-center items-center gap-5'
                >
                    SUBMIT
                    { <Bars
                        height="40"
                        width="20"
                        color="#4fa94d"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={isLoader}
                        />}
                </button>
            </form>
        </Wrapper>
    );
})