import React, { useRef, useState, Activity } from 'react';
import fig2 from '../Assets/images/Figma 2.png'
import Profile3 from '../Assets/images/me-3.png';
import { BsPersonBoundingBox, BsFillSignpostSplitFill, BsPhone} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
import { IoLocationOutline } from 'react-icons/io5'
import react from '../Assets/images/react-2.png'
import tailwind from '../Assets/images/tailwind.png'
import html from '../Assets/images/html.png'
import css from  '../Assets/images/css.png'
// import java from '../Assets/images/java.png'
import python from '../Assets/images/py.png'
import expo from '../Assets/images/expo.jpeg'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';
import star from '../Assets/images/star-rating-png.png'
import Rate from '../Assets/images/Rate.png'

const About = () => {
    
    return (
        <div className='divs h-[100%] items-center flex flex-row justify-center p-10' id='about'>
            <img src={Profile3} style={{marginLeft: -70, marginTop: -150, backgroundSize: 'cover'}}/>
            <div className='bios p-2 gap-5 flex flex-col items-center'>
                
                <div className='bio w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center'>
                    <img src={react} className='w-8 h-8'/>
                </div>
                <div className="w-100 h-100 flex items-center justify-center bg-white rounded-full shadow-lg p-4">
                    <img src={fig2} className="w-8 h-8" style={{backgroundSize: 'cover'}} />
                </div>
                <div className='bio shadow-lg w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center'>
                    <img src={expo} className='w-8 h-8'/>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skills = {
        skill: [react, tailwind, python, css, html],
        Services: [
            {
                Title: 'Web Development',
                Description: 'Been developing websites using reactJs and nodejs as the backend'
            },
            {
                Title: 'Android Development',
                Description: 'Developing native application using react native'
            },
            {
                Title: 'RESTfull API Development',
                Description: 'Developing native application using react native'
            },
            {
                Title: 'UI Designing',
                Description: 'Developing native application using react native'
            },
            
        ],
        };
    
        return (
        <div className='div p-10 h-full ' id='skills'>
            <div className='skillsDiv'>
                <div className='Skill mb-10'>
                    <div className='SkillsTitle p-1 items-center mb-2'>
                        <h2 className='title text-[15px] tracking-[1px] text-[#009d7c]'>- skills</h2>
                    </div>
                    <div className='skill flex items-center flex-wrap w-full h-20'>
                    {skills.skill.map((skill, index) => (
                        <div className='skillList w-8 h-8 items-center mx-3 justify-center hover:cursor-pointer hover: font-[50px] ' key={index}>
                            <img src={skill} className='hover:scale-150' style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt={skill} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className='servicesDiv'>
                <div className='Services flex flex-col'>
                    <div className='SkillsTitle p-1 items-center mb-2'>
                        <h2 className='title text-[15px] tracking-[1px] text-[#009d7c]'>- services</h2>
                    </div>
                    <div className='listServices flex flex-wrap'>
                        {skills.Services.map((service, index) => (
                            <div key={index} className='myServices bg-[#05965c] h-[170px] w-[170px] mx-2 my-2 items-center flex flex-col p-1 rounded-sm justify-center hover:scale-110 shadow-[red] cursor-pointer'>
                                <h2 className='title text-center font-medium text-[20px] mb-2 text-[#ffffff] '>{service.Title}</h2>
                                <p className='description text-center text-sm text-[#000000]'>{service.Description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
        )
}


const Portfolio = () => {
    const Projects = [
        {
            Profile: Rate,
            name: 'Star Rating System with Sentiment Analysis',
            description: 'Product rating system with sentiment analysis using Tensor Flow models',
            Languages: ['ReactJs', 'Nodejs', 'TensorFlow']
        },
        {
            Profile: Rate,
            name: 'Star Rating System',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            Languages: ['ReactJs', 'Nodejs']
        },
        {
            Profile: Rate,
            name: 'Star Rating System',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            Languages: ['ReactJs', 'Nodejs']
        },
    ];

    return (
        <div className='portfolio-container h-full p-2' id='portfolio'>
            <div className='container w-full flex flex-wrap'>
                {Projects.map((project, index) => (
                    <div key={index} className='card w-[45%] m-2 p-2 h-[50%] rounded bg-[#00342d] hover:cursor-pointer'>
                        <div className='pic-Container w-full h-[30%] bg-contain'>
                            {/* <img className='profile w-full bg-contain rounded' src={project.Profile} alt={project.name} /> */}
                            <p>Images</p>
                        </div>
                        <h2 className='name text-center'>{project.name}</h2>
                        {/* <small className='description text-[#1de4b5]' style={{ lineHeight: '1.2' }}>{project.description}</small> */}
                        <ul className='ul flex flex-wrap'>
                            {project.Languages.map((language, index) => (
                                <li className='lang m-1 text-[#1de4b5] bg-[#006958] rounded p-0.5' key={index}>
                                    <small>{language}</small>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};






const Contacts = () => {
    const form = useRef();
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

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
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(() => {
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
        <div className='divs h-[100%] p-10 items-center' id='contacts'>
            <div className='contactIntro my-5'>
                <h2 className='text font-bold text-[25px] text-[#51f7cb]'>Let's Get In Touch</h2>
                <small className='text-[#c8ffee]'>Feel free to get in touch with me. Let's create your dream and also be buddies!</small>
            </div>
            <form onSubmit={formik.handleSubmit} ref={form} className='form items-center flex flex-col gap-4 w-full'>
                <input
                    type='text'
                    placeholder='Your Name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='inputs w-full outline-none p-2 bg-inherit border-[#00a180] border-[1px] rounded placeholder-[#00a180] text-[#05c79c] focus:placeholder-[#1de4b5]'
                />
                {formik.touched.name && formik.errors.name ? <small className='text-[red]'>{formik.errors.email}</small> : null}
                <input
                    type='email'
                    placeholder='Your Email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='inputs w-full outline-none p-2 bg-inherit border-[#00a180] border-[1px] rounded placeholder-[#00a180] text-[#05c79c] focus:placeholder-[#1de4b5]'
                />
                {formik.touched.email && formik.errors.email ? <small className='text-[red]'>{formik.errors.email}</small> : null}
                <textarea
                    placeholder='Your Message'
                    name='message'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='inputs w-full outline-none p-2 bg-inherit border-[#00a180] border-[1px] rounded placeholder-[#00a180] text-[#05c79c] focus:placeholder-[#1de4b5] '
                />
                {formik.touched.message && formik.errors.message ? <small className='text-[red]'>{formik.errors.message}</small> : null}
                <button 
                    type='submit'
                    disabled={formik.isSubmitting}
                    className='submit w-full bg-[#90ffdd] p-2 rounded text-[#00342d] font-bold'
                >
                    SUBMIT
                    {}
                </button>
            </form>
            <footer className='footer mt-[40%] flex flex-col gap-2'>
                <div className='footer3 flex flex-row gap-1 items-center '>
                    <IoLocationOutline color='#c8ffee'/>
                    <h6>Nairobi, Kenya</h6>
                </div>
                <div className='footer3 flex flex-row gap-1 items-center '>
                    <BsPhone color='#c8ffee'/>
                    <h6>+254 701 233 944</h6>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Mike Mills. All rights reserved.</p>
                </div>
            </footer>
            
        </div>
    );
};

export const NavigationBar = () => {
    const [ActiveTab, setActiveTab] = useState(null)
    
    const handleActiveTab = (sectionId) => {
        if(sectionId) {
            setActiveTab()
        }
    }

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            console.log(sectionId)
            handleActiveTab()
        }
    };
    return(
        <div className='nav absolute flex flex-col ml-[40rem] mt-[10rem] gap-10 items-center p-1 bg-white'>
                <nav className='nav bg-[blue] p-2 flex flex-col backdrop-blur bg-white/0'>
                    <ul className='ul'>
                        <li title='About' className='li my-10 p-1.8 rounded-[25px] w-[25px] h-[25px] items-center justify-center flex' onClick={() => {handleScrollToSection('about')}}>
                            <BsPersonBoundingBox color='#ffffff' fontSize='1.2rem' className='icons hover:cursor-pointer'/>
                        </li>
                        <li title='Skills' className='li  my-10 p-1.8 rounded-[25px] w-[25px] h-[25px] items-center justify-center flex' onClick={() => {handleScrollToSection('skills')}}>
                            <BsFillSignpostSplitFill color='#ffffff' fontSize='1.2rem' className='icons hover:cursor-pointer'/>
                        </li>
                        <li title='Portfolio' className='li my-10 p-1.8 rounded-[25px] w-[25px] h-[25px] items-center justify-center flex' onClick={() => {handleScrollToSection('portfolio')}}>
                            <CgMenuGridR color='#ffffff' fontSize='1.2rem' className='icons hover:cursor-pointer'/>
                        </li>
                        <li title='Contacts' className='li my-10 p-1.8 rounded-[25px] w-[25px] h-[25px] items-center justify-center flex' onClick={() => {handleScrollToSection('contacts')}}>
                            <AiOutlineMail color='#ffffff' fontSize='1.2rem' className='icons hover:cursor-pointer'/>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}

const LeftDiv = () => {


    return (
        <div className='Left w-[60%] overflow-y-auto h-[100%] no-scrollbar'>
            <NavigationBar/>
            <div className='content h-[100%]'>
                <About />
                <Skills />
                <Portfolio />
                <Contacts />
            </div>
        </div>
    );
};

export default LeftDiv;
