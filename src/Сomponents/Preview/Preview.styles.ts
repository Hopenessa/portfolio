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
    & > * {
        z-index: 2;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;

        background: rgba(0, 0, 0, 0.1);

        z-index: 1;
    }
`;


export const PreviewContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 40px;

    
    
    @media (max-width: 700px) {
        flex-direction: column-reverse;
        justify-content: center;
        gap: 0;
        padding: 20px 0;
    }
`;

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    width: clamp(300px, 30vw, auto);

    flex: 1 1 300px;

    @media (max-width: 700px) {
        align-items: center;
    }
`;

export const PreviewLabel = styled.h1`
    font-family: Tinos, serif;
    font-weight: 400;
    font-size: clamp(1.3rem, 2vw, 3.5rem);
    color: #ffffff;
    line-height: 100%;
    p {
        display: none;
    }
`;

export const PreviewName = styled.span`
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 100%;

    background: linear-gradient(90deg, #ff6200 0%, #ffcc00 100%); //применяем градиент к фону
    -webkit-background-clip: text; //вырезаем фон по форме текста
    -webkit-text-fill-color: transparent; //делаем текст прозрачной маской
`;

export const PreviewText = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size:clamp(1rem, 5vw, 1.3rem);
    line-height: 1.3;
    letter-spacing: 0.04em;
    color: #ffffff;
`;

export const PreviewImage = styled.img`
    width: clamp(400px, 30vw, 500px);
    height: auto;
    object-fit: cover;

    @media (max-width: 700px) {
        width: clamp(250px, 30vw, 400px);
    }
`;

export const LinkButton = styled.a`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;

    width: fit-content;
    height: 45px;

    text-decoration: none;

    color: #0a0e39;
    font-size: 1rem;
    font-weight: 600;

    background: linear-gradient(90deg, #ff6200 0%, #ffcc00 100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    cursor: pointer;
    
    padding: 0 20px;

    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.2s ease, transform 0.2s ease;

    &:hover {
        box-shadow: 0 0 10px #ffc400;
        transform: scale(1.1);
        background: linear-gradient(90deg, #ffcc00 0%, #ff6200 100%)
    }
`;


