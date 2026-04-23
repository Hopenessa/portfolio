import styled from "styled-components";
import backgroundImg from "../../assets/images/backgroundPreview.svg";

export const PreviewSection = styled.section`
    width: 100%;
    min-height: 100vh;

    position: relative;

    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex; //приходится тут оставить, чтобы было центрирование высоты, иначе все прилипает к верху
    justify-content: center;
    align-items: center;
`;


export const PreviewContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 40px;

    flex-wrap: wrap;
`;

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    width: clamp(300px, 30vw, auto);

    flex: 1 1 300px;
`;

export const PreviewLabel = styled.h1`
    font-family: Tinos, serif;
    font-weight: 400;
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: #ffffff;
    line-height: 100%;
    margin: 0;
    text-shadow: 0 0 0.5rem #0a0e39;
`;

export const PreviewName = styled.span`
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: clamp(1.5rem, 5vw, 4.5rem);
    line-height: 100%;
    margin: 0;

    background: linear-gradient(90deg, #ff6200 0%, #ffcc00 100%); //применяем градиент к фону
    -webkit-background-clip: text; //вырезаем фон по форме текста
    -webkit-text-fill-color: transparent; //делаем текст прозрачной маской
`;

export const PreviewText = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.04em;
    color: #ffffff;
    margin: 0;
    text-shadow: 0 0 0.5rem #0a0e39;
`;

export const PreviewImage = styled.img`
    width: clamp(300px, 30vw, 500px);
    height: auto;
    object-fit: cover;
`;


