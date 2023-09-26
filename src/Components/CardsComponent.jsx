import React from 'react';
import { Cards } from '../Utils/StyledComponents';
import { AiFillGithub } from 'react-icons/ai'

function CardsComponent({ cardsImage, CardsTitle, CardsDescription, tech, bgColor, linkComponent, Link }) {
    return (
        <Cards className="card flex flex-col rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]" style={{ backgroundColor: bgColor }}>
            <style>
            {`
                @media (max-width: 768px) {
                .card {
                    padding: 0.6rem;
                }
                .tech-stack {
                    padding-top: 10px;
                }
                }
            `}
            </style>
            <div className='projectImageContainer w-full h-[50%] rounded-2xl flex items-center justify-center'>
                <img
                    src={cardsImage}
                    className="object-cover w-full h-full rounded-t-2xl"
                    alt="Project Image"
                />
            </div>
            <div className='projetDetailsContainer p-2 flex flex-col'>
                <h1 className='title font-bold'>{CardsTitle}</h1>
                <small>{CardsDescription}</small>
                {tech && (
                <div className="tech-stack flex flex-row gap-2 items-center align-middle flex-wrap mt-2">
                    {tech.map((techItem, index) => (
                    <div
                        key={index}
                        className="tech-item px-2 py-1 flex rounded-full bg-[#d7dee0]"
                    >
                        <p className="tools text-[12px] text-[#576d72]">{techItem}</p>
                    </div>
                    ))}
                    </div>
                )}
                {linkComponent ? (
                    <div className='checkCode gap-2 bg-[#c0cfd0] mt-2 mx-[90%] flex flex-row items-center justify-center my-2 rounded'>
                        <a href={linkComponent} className='linkName font-semibold text-[#242b2d]'>
                            <AiFillGithub size={20}/>
                        </a>
                    </div>
                ) : null}
            </div>

        </Cards>
        );
}

export default CardsComponent;