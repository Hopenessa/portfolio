import styled from "styled-components";

export const FooterSection = styled.footer`
    width: 100%;
    background: #07070f;
    padding-bottom: 40px;

    display: flex;
    
`;

export const FooterTitle = styled.h2`
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

export const FooterLinks = styled.ul`
    display: flex;
    gap: 30px;
    padding: 20px;
    list-style: none;
`;

export const FooterItem = styled.li`
    display: flex;
`;

export const FooterLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
`;

