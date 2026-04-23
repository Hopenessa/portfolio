import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 70px;

  background: #090a14;
  box-shadow: 0 0 50px 10px #000000;

  z-index: 1000;
  
  display: flex;
`;

export const HeaderNav = styled.nav`
  width: 100%;
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

  transition: color 0.2s ease, text-shadow 0.2s ease; //задаем правила анимации

  ${({$active}) => {
    if ($active) {
      return `
      color: #ff9200;
      text-shadow: 0 0 20px #ff6200;
    `;
    }
    return "";
  }}
`;