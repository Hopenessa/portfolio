import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 70px;

    background: #07070f;
    box-shadow: 0 0 50px 10px #07070f;
    z-index: 1000;

    display: flex;

    @media ${Theme.media.mobile} {
        background: #07070f;
        box-shadow: none;
        z-index: 1;
        position: relative;
    }
`;

export const LogoWrapper = styled.div`
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const HeaderNav = styled.div`
    width: 100%;
    @media ${Theme.media.mobile} {
        display: none;
    }
`;

export const HeaderNavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    gap: clamp(30px, 5vw, 60px);
    list-style: none;
`;

export const HeaderNavItem = styled.a<{ $active?: boolean }>`
    font-weight: 600; //полужирный текст
    font-size: 1rem;
    cursor: pointer; //показывает курсором что на него можно нажать
    text-transform: uppercase; //все буквы заглавные
    font-family: 'Oswald', sans-serif; //стиль текста

    color: #ff9200;

    display: block;

    transition: color 0.2s ease, font-size 0.2s ease, transform 0.2s ease; //задаем правила анимации

    ${({$active}) => {
        if ($active) {
          return `
      font-size: 1.3rem;
      background: linear-gradient(90deg, #ff6200 0%, #ffcc00 100%); //применяем градиент к фону
    -webkit-background-clip: text; //вырезаем фон по форме текста
    -webkit-text-fill-color: transparent; //делаем текст прозрачной маской
    `;
        }
        return "";
    }}
    &:hover {
        transform: scale(1.1);
        color: #ffcc00;

    }
`;