import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    padding: 5rem 5rem;
    flex-wrap: wrap;
    height: 100%;

    @media (max-width: 768px) {
        padding: 5rem 1rem;
        height: 100%;
        font-size: small;
    }
`;


export const Cards = styled.div`
    border-radius: 16px;
    margin: 1.5rem; 
    width: 20rem;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 0;
        height: 100%;
    }
`;


