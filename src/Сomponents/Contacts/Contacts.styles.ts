import styled from "styled-components";
import Image from "../../assets/images/background3.svg"

export const ContactsSection = styled.section`
    width: 100%;
    min-height: 100vh;

    background: url(${Image}) center/cover no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
`;

export const ContactsTitle = styled.h2`
    margin: 0 0 40px 0;

    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 4.5rem;
    line-height: 100%;
    color: #ffffff;
    text-shadow: 0 0 10px #0a0e39;
    letter-spacing: 0.04em;

`;

export const FormWrapper = styled.div`
    width: 676px;
    height: 429px;

    display: grid;

    grid-template-columns: 180px repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);

    column-gap: 24px;
    row-gap: 16px;
    margin: 0 0 5vh 0;
`;

export const FormLabel = styled.div`

    grid-column: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-family: Montserrat, sans-serif;
    font-size: 1.2rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
    text-shadow: 0 0 10px #0a0e39;
`;


export const Input = styled.input<{ $row: number }>`
    grid-column: 2 / 6;
    grid-row: ${({ $row }) => $row};

    height: 51px;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    padding: 0 16px;

    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);

    color: white;
    outline: none;
    
`;

export const Textarea = styled.textarea`
    grid-column: 2 / 6;

    /* ключевая правка */
    grid-row: 3 / -1;

    height: 100%;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    padding: 16px;

    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);

    color: white;
    resize: none;
    outline: none;
`;

