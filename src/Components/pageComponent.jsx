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
import Portfolio2 from '../Assets/images/Portfolio2.png'
import { SocialIcon } from 'react-social-icons';
import { useFormik } from 'formik'
import { toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser';
import * as Yup from 'yup'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import '../Utils/mediaQuery.css'
import { Bars } from 'react-loader-spinner'
import NewsApp from '../Assets/images/NewsApp.png'
import WebDev from '../Assets/images/webDev.png'
import ApiDev from '../Assets/images/apiDev.png'
import fileConverter from '../Assets/images/File Converter.png'
import Firebase from '../Assets/images/Firebase.png'
import Mongodb from '../Assets/images/MongoDB-Logo.png'
import { AiOutlineGithub, AiFillCodeSandboxCircle, AiFillLinkedin } from 'react-icons/ai'
import Dots from '../Assets/images/dots.png'
import { FaXTwitter } from 'react-icons/fa6'
import Resume from '../Assets/Mike Resume.pdf'
import checkOut from '../Assets/images/CheckOut.png'
// import Me from '../Assets/images/me.jpg'
import Me from '../Assets/images/me2.jpg'

export const HomeContainer = forwardRef(({ sectionId }, ref) => {
    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Mike Resime.pdf';
        link.style.display = 'none';
    
        document.body.appendChild(link);
        link.click();
    
        document.body.removeChild(link);
    };
    return (
        <Wrapper className='wrapperContain flex flex-row items-center py-9 bg-[#F4FBFF]' id={sectionId} ref={ref}>
            <div className='section1 w-[45%] h-[80vh] flex-col flex ml-20 mt-10'>
                <h4>
                    WELCOME TO MY WORLD
                </h4>
                <h1 className='intro text-[2.6rem] font-bold leading-tight'>
                    Hi, my name is <span className='myName text-[#4f4efc]'>Michael Mills</span> a Backend Software Developer.
                </h1>
                <small className='description w-[30rem] text-[1rem] top-10 font-normal'>
                    I am an enthusiast developer who is always looking
                    out for new and exiting opportunities while 
                    stilling delivering top notch systems
                </small>
                <button onClick={() => handleDownloadClick()} className='cvDownload w-[10rem] bg-[#4f4efc] my-10 p-2 rounded-full border-[1px] border-[#ffffff] font-semibold text-white'>
                    Download CV
                </button>
                <div className='expo absolute p-2 w-[4rem] h-[4rem] flex items-center rounded-full bg-white top-[5rem] ml-[25rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <img
                        src={expoIcon}
                        width={45}
                    />
                </div>
                <div className='socials flex flex-row mt-[8rem] gap-5'>

                    <AiOutlineGithub size={20} className='icons hover:cursor-pointer' onClick={() => window.open('https://github.com/mikemills254')}/>
                    <AiFillCodeSandboxCircle size={20} className='icons hover:cursor-pointer'/>
                    <AiFillLinkedin size={20} className='icons hover:cursor-pointer' onClick={() => window.open('www.linkedin.com/in/michael-mills-4774a01a5')}/>
                    <FaXTwitter size={19} className='icons hover:cursor-pointer'/>
                    <div className='firebase absolute p-2 w-[4rem] h-[4rem] flex items-center rounded-full bg-white top-[25rem] ml-[20rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                        <img
                            src={Firebase}
                            width={45}
                        />
                    </div>
                </div>
            </div>
            <div className='section2 h-[70vh] w-[45%]'>
                <div className="profileImage -mt-10">
                    <div className='meHolder w-[25rem] h-[30rem] rounded-xl'>
                        <img
                            src={Me}
                            className='object-cover w-full h-full rounded-xl hover:rotate-2'
                            alt='Portfolio Image'
                        />
                    </div>
                    <div className='react absolute p-2 w-[4rem] h-[4rem] flex items-center rounded-full bg-white top-[10rem] ml-[25rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                        <img
                            src={reactIcon}
                        />
                    </div>
                </div>
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
                .serv-and-skills { /* Change & to 'and' for valid class name */
                    display: block; /* Use 'block' to stack elements vertically */
                }
                .img {
                    width: 30px;
                    height: 30px;
                }
                .skillsContainer {
                    width: 100%;
                    height: 25%;
                    flex-wrap: wrap;
                    margin-bottom: 10px
                }
                .skills {
                    height: 100%;
                    padding-left: 50px
                }
                .serviceContainer {
                    width: 100%
                }
                .serv-and-skills {
                    height: 100%
                }
                .imgService {
                    width: 5rem
                }
            }
        `}
    </style>
    <div className='idk w-full flex items-end justify-end'>
        <span className='labels text-end font-extrabold text-[5rem] text-[#e6e5e5]'>02. </span>
    </div>
    <div className='serv-and-skills w-full h-[100vh] flex flex-row justify-between p-2'>
        <div className='skillsContainer h-[100%] w-[40%]'>
            <div className='skills flex flex-row flex-wrap w-full flex-grow p-2 gap-5'>
                {Skills.map((skill) => (
                    <div key={skill.name} className='Containerskill w-[5rem] flex items-center p-2 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                        <div className='skillImage h-[80%] flex flex-col items-center justify-center'>
                            <img src={skill.image} width="100%" height="100%" alt={skill.name} className='skillimg object-cover xl:bg-transparent' />
                        </div>
                        {/* <h1 className='skillname text-center'>{skill.name}</h1> */}
                    </div>
                ))}
            </div>
        </div>
        <div className='serviceContainer w-[60%] h-[100%] flex p-2 flex-row flex-wrap gap-y-4 pl-10'>
            {Services.map((service) => (
                <div key={service.skillName} className='servicesContainer h-[50%] w-[17rem] cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 mr-7'>
                    <img
                        src={service.skillImage}
                        className='imgService w-[5rem] mb-5 shadow-2xl p-2 rounded-md'
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
        // {
        //     title: "Rate System",
        //     description: "The rate and feedback system is a web application built using Express.js, Node.js, and MongoDB, allowing users to rate and provide feedback on products or services, enhancing user engagement and business insights.",
        //     image: Rate,
        //     tech: ['reactJs', 'mongoDb', 'reduxToolkit', 'nodeJs' ],
        //     link: 'https://github.com/mikemills254/rate-system'
        // },
        // {
        //     title: "Auth API 2FA",
        //     description: "An Express.js JWT Authentication API is a modern method of securing web applications with JSON Web Tokens (JWT). It facilitates user registration, login, and access to protected resources through token-based authentication.",
        //     image: Rate,
        //     tech: ['nodeJs', 'mongoDb', 'reduxToolkit'],
        //     link: 'https://github.com/mikemills254/rate-system'
        // },
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
        {
            title: "Check Out System",
            description: "A functional e-commerce checkout system intergrated with Safaricom Daraja Api. On successful transaction user recieves an email attached are his transaction id and paid amount.",
            image: checkOut,
            tech: ['MERN stack', 'axios', 'NodeMailer', 'Daraja API'],
            link: 'https://github.com/mikemills254/CheckOut'
        },
    ]
    return(
        <Wrapper className='Container p-16 flex flex-col items-center justify-center bg-[#f6f9f9] h-[100%]' id={sectionId} ref={ref} style={{backgroundColor: '#efefef'}}>
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
            
            <span className='labels font-extrabold text-[5rem] text-[#e6e5e5]'>03. </span>
            <div className='projectContents flex flex-row items-start flex-wrap'>
                {Projects.map((project, index) => (
                    <CardsComponent
                        key={index}
                        CardsTitle={project.title}
                        cardsImage={project.image}
                        CardsDescription={project.description}
                        tech={project.tech}
                        bgColor="#edf0f1"
                        linkComponent={project.link}
                    />
                ))}
            </div>
        </Wrapper>
    )
})

export const ContactContainer = forwardRef(({ sectionId }, ref) => {
    const form = useRef();
    const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID || 'service_dx4nak4';
    const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID || 'template_owmao3j';
    const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY || '_oJhGeuItqvHWzXF0';
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
            setIsLoading(true);
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(
                    () => {
                        setIsLoading(false);
                        toast.success('Successfully sent');
                        console.log(values);
                        resetForm();
                    },
                    (error) => {
                        setIsLoading(false);
                        toast.error(error.text);
                    }
                );
        },
        
        });
    return (
        <Wrapper className='divs h-[100%] flex flex-col bg-[#F4FBFF]' id={sectionId} ref={ref}>
            <style>
                {`
                @media (max-width: 768px) and (max-width: 1024px) {
                    .contact {
                        flex-direction: column;
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
            <span className='labels font-extrabold text-[5rem] text-[#e6e5e5]'>04. </span>
            <div className='contact flex flex-row gap-5'>
                <form onSubmit={formik.handleSubmit} ref={form} className='form p-10 items-center flex flex-col gap-4 w-1/2'>
                    <h2 className='talkBusiness font-semibold text-[1rem]'>LET'S TALK BUSINESS </h2>
                    <input
                        type='text'
                        placeholder='Your Name'
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='inputs w-full outline-none p-2 bg-inherit border-[#c0cfd0] border-[1px] rounded placeholder-[#292929] text-[#292929] focus:placeholder-[#c0cfd0]'
                    />
                    {formik.touched.name && formik.errors.name ? <small className='text-[red]'>{formik.errors.email}</small> : null}
                    <input
                        type='email'
                        placeholder='Your Email'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='inputs w-full outline-none p-2 bg-inherit border-[#c0cfd0] border-[1px] rounded placeholder-[#292929] text-[#292929] focus:placeholder-[#c0cfd0]'
                    />
                    {formik.touched.email && formik.errors.email ? <small className='text-[red]'>{formik.errors.email}</small> : null}
                    <textarea
                        placeholder='Your Message'
                        name='message'
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='inputs w-full outline-none p-2 bg-inherit border-[#c0cfd0] border-[1px] rounded placeholder-[#292929] text-[#292929] focus:placeholder-[#c0cfd0] '
                    />
                    {formik.touched.message && formik.errors.message ? <small className='text-[red]'>{formik.errors.message}</small> : null}
                    <button 
                        type='submit'
                        disabled={formik.isSubmitting}
                        className='submit w-full bg-[#000000] p-2 rounded text-[#ffffff] font-bold flex flex-row justify-center items-center gap-5'
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
                <div className='oti h-[100%] p-10 flex flex-col'>
                    <h1 className='Pr mb-5'>You can as well visit my social media platform or send me an Email</h1>
                    <span className='spans flex flx-row items-center gap-4'>
                        <BsPhone/> +254 701 233 944
                    </span>
                    <span className='spans flex flx-row items-center gap-4'>
                        <IoLocationOutline/> Eldoret, Kenya
                    </span>
                    <span className='spans flex flx-row items-center gap-4'>
                        <AiOutlineMail/> mikemills930@gmail.com
                    </span>
                </div>
            </div>
        </Wrapper>
    );
})