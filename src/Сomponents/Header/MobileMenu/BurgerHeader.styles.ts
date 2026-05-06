// BurgerHeader.styles.ts

import styled from "styled-components";
import { Theme } from "../../../styles/Theme.ts";

type BurgerButtonProps = {
    $isOpen: boolean;
};

type MobileMenuPopupProps = {
    $isOpen: boolean;
};

export const MobileMenuWrapper = styled.div`
    position: relative;
    z-index: 1001;
    display: none;

    @media ${Theme.media.mobile} {
        display: flex;
        position: fixed;
        top: 10px;
        right: 10px;
    }
`;

export const BurgerButton = styled.button<BurgerButtonProps>`
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #07070f;
    border: none;
    border-radius: 10px;

    cursor: pointer;
    padding: 0;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;

    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #07070f;
    border: none;
    border-radius: 10px;

    cursor: pointer;
    padding: 0;
`;

export const MobileMenuPopup = styled.div<MobileMenuPopupProps>`
    position: fixed;
    top: 0;
    right: 0;

    width: 280px;
    height: 100vh;

    background: #07070f;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.4);

    transform: ${({ $isOpen }) =>
            $isOpen ? "translateX(0)" : "translateX(100%)"};

    transition: transform 0.3s ease;

    padding: 120px 30px 40px;
`;

export const MobileNav = styled.nav`
    width: 100%;
`;

export const MobileNavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;

    list-style: none;
    margin: 0;
    padding: 0;
`;

export const MobileNavItem = styled.li<{ $active?: boolean }>`
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;

    color: white;
    cursor: pointer;
    
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
`;