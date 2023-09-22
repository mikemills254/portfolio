import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    padding: 5rem 5rem;
    background-color: ${props => props.bgColor};
    flex-wrap: wrap;
    height: 100%;

    @media (max-width: 768px) {
        padding: 5rem 1rem;
        height: 100%;
        font-size: small;
    }
`;


export const Cards = styled.div`
    border-radius: 5px;
    padding: 5px;
    background-color: ${(props) => props.bgColor};
    margin: 1.5rem; 
    max-width: 20rem;
    height: 25rem;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 0;
        height: 100%;
    }
`;


