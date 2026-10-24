import styled from "styled-components";

export const ContactsSection = styled.section`
    width: 100%;
    background: #07070f;
    padding-bottom: 40px;

    display: flex;
    
`;

export const ContactsTitle = styled.h2`
    margin: clamp(40px, 6vh, 60px) 0 clamp(30px, 4vh, 60px) 0;

    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: clamp(2rem, 5vw, 3.5rem); //текст зависит от размера экрана
    line-height: 100%;
    color: #ffffff;
    text-shadow: 0 0 0.8rem #0a0e39; //тень для усиления контраста

    position: relative;

    display: inline-block;

    &::after {
        content: "";
        position: absolute;

        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;

        width: 100px;
        height: 4px;

        border-radius: 2px;

        background: linear-gradient(90deg, #ff6200, #ffcc00);
    }

`;

export const FormWrapper = styled.form`
    width: 100%;
    max-width:700px;
    height: auto;
    display: flex;
    flex-direction:column;
    gap: 25px;
    padding-bottom: 20px;
    align-items: center;

    button:disabled {
        opacity: 0.65;
        cursor: wait;
        transform: none;
    }

    input:focus-visible, textarea:focus-visible, button:focus-visible {
        outline: 2px solid #ff9200;
        outline-offset: 3px;
    }
    
`;

export const FormGroup = styled.div`
    width: 100%;
;`

export const FormLabel = styled.label`
    
    display: flex;
    align-items: center;

    font-family: Montserrat, sans-serif;
    font-size: clamp(0.8rem, 2vw, 1rem);
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
    text-shadow: 0 0 0.5rem #0a0e39;
    line-height: clamp(2.4rem, 2vw, 3rem);
`;


export const Input = styled.input`

    height: 40px;
    width: 100%;

    border: 1px solid #777795;
    border-radius: 8px;

    padding: 0 0.5rem;

    background: #0D0E1B;

    color: white;
    outline: none;

    font-family: Montserrat, sans-serif;
    font-size: clamp(0.8rem, 2vw, 1.2rem);

`;

export const Textarea = styled.textarea`
    min-height: clamp(150px, 25vh, 160px);
    width: 100%;

    border: 1px solid #777795;
    border-radius: 8px;

    padding: 0.5rem;

    background: #0D0E1B;
    color: white;
    resize: none;
    outline: none;

    font-family: Montserrat, sans-serif;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
`;

export const ContactsLinks = styled.ul`
    display: flex;
    gap: 30px;
    padding: 20px;
    list-style: none;
`;

export const ContactsItem = styled.li`
    display: flex;
`;

export const ContactsLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    &:focus-visible {
        outline: 2px solid #ff9200;
        outline-offset: 5px;
    }
`;

export const ContactsIntro = styled.p`
    max-width: 700px;
    font-size: 1.1rem;
    margin-bottom: 30px;
    text-align: center;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
`;

export const FormStatus = styled.p<{$isError: boolean}>`
    width: 100%;
    text-align: center;
    line-height: 1.5;
    color: ${({$isError}) => $isError ? '#ffb4ab' : '#b5e8c3'};

    &:empty {
        display: none;
    }
`;

