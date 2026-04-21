import styled from "styled-components";

export const SkillsSection = styled.section`
    width: 100%;
    background: #0d0e1b;

    display: flex;
    flex-direction: column; //вертикальная последовательность
    align-items: center; //центрирование >

    gap: 60px;
    
`;

export const SkillsTitle = styled.h2`
    margin: 0;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 120%;
    letter-spacing: 0.04em;

    color: #e5f8f1;

    text-align: center;
    display: none;
`;

export const SkillsRow = styled.div`
    display: flex; //центрирование ^ >
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 900px;

    gap: clamp(20px, 4vw, 50px); //зависимость отступов от ширины экрана
    flex-wrap: wrap; //разрешен перенос на другую строку
    padding: clamp(40px, 4vw, 40px) 20px clamp(40px, 4vw, 70px) 20px; //отступы в зависимости от ширины экрана
`;



