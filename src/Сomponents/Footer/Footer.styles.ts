import styled from "styled-components";

export const FooterSection = styled.section`
    width: 100%;
    background: #07070f;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: clamp(20px, 4vw, 50px); //зависимость отступов от ширины экрана
    flex-wrap: wrap; //разрешен перенос на другую строку
    padding: clamp(30px, 4vw, 50px); //отступы в зависимости от ширины экрана
    
`;
