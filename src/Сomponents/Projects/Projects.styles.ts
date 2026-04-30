import styled from "styled-components";

export const ProjectSection = styled.section`
    width: 100%;
    background: #07070f;

    display: flex;
    scroll-margin-top: 70px;
`;


export const ProjectsTitle = styled.h2`
    text-align: center;
    margin: clamp(30px, 4vw, 50px) 0;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    letter-spacing: 0.04em;
    font-size: clamp(2rem, 4vw, 3.5rem);
    line-height: 100%;

    color: #ffffff;
    
    position: relative;

    &::after {
        content: "";
        position: absolute;

        left: 50%;
        transform: translateX(-50%);
        bottom: -15px;

        width: 100px;
        height: 4px;

        border-radius: 2px;

        background: linear-gradient(90deg, #ff6200, #ffcc00);
    }
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 350px);
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 350px);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
`;