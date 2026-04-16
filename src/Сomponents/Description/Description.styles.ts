import styled from "styled-components";

export const DescriptionSection = styled.section`
    width: 100%;
    background: #07070f;
    padding: 100px 0;

    display: flex; //центрирование >
    flex-direction: column; //элементы по вертикали
    align-items: center;
`;

export const DescriptionTitle = styled.h2`
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: 0.04em;

    color: #BDEBEA;

    text-align: center;
    margin-bottom: 25px;
`;

export const DescriptionText = styled.p`
    max-width: 800px;

    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.04em;

    color: #BDEBEA;

    text-align: center;
`;