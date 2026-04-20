import styled from "styled-components";
import backgroundImg from "../../assets/images/background1.svg";

export const PreviewWrapper = styled.div`
    width: 100%;
    min-height: 90vh;

    background-image: url(${backgroundImg});
    background-size: cover; //масштабирование изображения
    background-position: center; //центрируем изображение
    background-repeat: no-repeat; //изображение не повторяется

    display: flex; //центрирование содержимого ^ >
    justify-content: center;
    align-items: center;
`;

export const PreviewSection = styled.section`
    height: 90vh;
    background: #0d0e1b;

    display: flex; //снова центрирование содержимого ^ >
    justify-content: center;
    align-items: center;
`;

export const PreviewContainer = styled.div`
    width: 100%;
    max-width: 1200px;

    display: grid;
    grid-template-columns: 1fr 1fr; //разметка
    gap: 40px;

    align-items: center; //центрирование ^

    padding: 0 80px; //отступ по горизонтали
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column; //вертикальное размещение содержимого
    gap: 25px;
`;

export const Img = styled.div`
    display: flex; //снова центрирование содержимого >
    justify-content: center;
`;

export const PreviewLabel = styled.h1`
    font-family: Tinos, serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: #D7E5EC;
    line-height: 100%;
    margin: 0;
`;

export const PreviewName = styled.span`
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 4.5rem;
    line-height: 100%;
    margin: 0;

    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%); //применяем градиент к фону
    -webkit-background-clip: text; //вырезаем фон по форме текста
    -webkit-text-fill-color: transparent; //делаем текст прозрачной маской
`;

export const PreviewText = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.04em;
    color: #BDEBEA;
    margin: 0;
`;

export const PreviewImage = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
`;


