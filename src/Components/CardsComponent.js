import React from 'react';
import { Cards } from '../Utils/StyledComponents';

function CardsComponent({ cardsImage, CardsTitle, CardsDescription, tech, bgColor }) {
    return (
        <Cards className="card flex flex-col shadow-sm" style={{ backgroundColor: bgColor }}>
            <style>
            {`
                .card {
                display: flex;
                flex-direction: column;
                padding: 0.6rem;
                height: 100%;
                }
    
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
            <img
                src={cardsImage}
                className="imageStyles w-full rounded-2xl h-[30%]"
                alt={CardsTitle}
            />
            <div className="cardDetails flex flex-col text-[14px] flex-grow mt-2">
            <h1 className="cardsTitle text-left font-bold text-[1.2rem] text-[#161d55]">
                {CardsTitle}
            </h1>
            <p className="description relative align-middle flex-grow">
                {CardsDescription}
            </p>
            </div>
            {tech && (
            <div className="tech-stack flex flex-row gap-2 items-center align-middle flex-wrap pt-2">
                {tech.map((techItem, index) => (
                <div
                    key={index}
                    className="tech-item px-2 py-1 flex rounded-full bg-[#d5e4ff]"
                >
                    <p className="tools text-[12px] text-[#5c99fe]">{techItem}</p>
                </div>
                ))}
            </div>
            )}
        </Cards>
        );
}

export default CardsComponent;
