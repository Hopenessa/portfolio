import styled from "styled-components";
import Image from "../../assets/images/background3.svg"

export const ContactsSection = styled.section`
    width: 100%;
    min-height: 100vh;

    background: url(${Image});
    background-size: cover; //масштабирование изображения
    background-position: center; //центрируем изображение
    background-repeat: no-repeat; //изображение не повторяется

    display: flex;
    flex-direction: column; //элементы идут вертикально
    align-items: center;
    justify-content: center;
    padding: clamp(60px, 10vh, 120px) 0; //зависимость от экрана устройства
`;

export const ContactsTitle = styled.h2`
    margin: 0 0 clamp(30px, 4vh, 60px) 0;

    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: clamp(2rem, 5vw, 4.5rem); //текст зависит от размера экрана
    line-height: 100%;
    color: #ffffff;
    text-shadow: 0 0 0.8rem #0a0e39; //тень для усиления контраста
    letter-spacing: 0.04em;

`;

export const FormWrapper = styled.form`
    width: 100%;
    max-width:700px;
    height: auto;

    display: grid;

    grid-template-columns: minmax(30px, 110px) 1fr; //первый столбец имеет макс и мин ограничение, второй занимет оставшееся место
    grid-template-rows: auto auto 1fr; //2 строки рассчитывают высоту по содержимому (50px), 3 занимает все оставшееся место

    gap: 16px 24px;
    margin: 0 0 5vh 0; //нижний отступ зависит от высоты экрана
    padding: 0 clamp(10px, 5vw, 40px); //отступ зависит от размеров экрана
    
`;

export const FormLabel = styled.label`

    grid-column: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-family: Montserrat, sans-serif;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
    text-shadow: 0 0 0.5rem #0a0e39;
    
    
`;


export const Input = styled.input<{ $row: number }>`
    grid-column: 2;
    grid-row: ${({ $row }) => $row};

    height: 50px;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    padding: 0 0.5rem;

    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);

    color: white;
    outline: none;

    font-family: Montserrat, sans-serif;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    
`;

export const Textarea = styled.textarea`
    grid-column: 2;
    grid-row: 3;

    min-height: clamp(150px, 25vh, 250px);

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    padding: 0.5rem;

    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);

    color: white;
    resize: none;
    outline: none;
    
    font-family: Montserrat, sans-serif;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
`;

