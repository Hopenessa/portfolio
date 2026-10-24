import styled from "styled-components";
import Image from "../../assets/images/backgroundContacts.svg";
import {Theme} from "../../styles/Theme";

export const DescriptionSection = styled.section`
    width: 100%;
    min-height: 90vh;
    padding: clamp(70px, 8vw, 120px) 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background: url(${Image});
    background-size: cover; //масштабирование изображения
    background-position: center; //центрируем изображение
    background-repeat: no-repeat; //изображение не повторяется
    position: relative;
    & > * {
        z-index: 2;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;

        background: rgba(0, 0, 0, 0.3);
        //backdrop-filter: blur(1px);
        
        z-index: 1;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`;

export const DescriptionTitle = styled.h2`
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: clamp(3rem, 5vw, 4.5rem);
    line-height: 1.1;
    letter-spacing: 0.04em;

    background: linear-gradient(90deg, #ff6200 0%, #ffcc00 100%); //применяем градиент к фону
    -webkit-background-clip: text; //вырезаем фон по форме текста
    -webkit-text-fill-color: transparent; //делаем текст прозрачной маской


    text-align: center;

    margin-bottom: clamp(30px, 3vw, 40px);
`;

export const DescriptionText = styled.p`
    white-space: pre-line;
   
    max-width: 800px;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size:1.3rem;
    line-height: 1.3;
    letter-spacing: 0.04em;
    color: #ffffff;

    text-align: center;

    @media ${Theme.media.mobile} {
        font-size: 1.1rem;
    }
    
`;
