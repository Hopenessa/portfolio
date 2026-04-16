import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed; //фиксированая позиция вверху экрана
  top: 0;
  left: 0;
  right: 0;
  
  margin: 0 auto; //центирует фиксированную ширину

  width: 100%;
  max-width: 1400px;
  height: 70px;

  background: #090a14;

  display: flex; //центирует содержимое ^ >
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 10px 1px #00D9F5;  //тень дающая эффект свечения

  z-index: 1000; //всегда по верх других элементов
`;

export const HeaderNav = styled.nav`
  display: flex; //элементы в ряд
  gap: 40px; //расстояние между элементами
`;

export const HeaderNavItem = styled.a<{ $active?: boolean }>`
  font-weight: 600; //полужирный текст
  font-size: 1rem;
  cursor: pointer; //показывает курсором что на него можно нажать
  text-transform: uppercase; //все буквы заглавные
  font-family: 'Oswald', sans-serif; //стиль текста

  color: #00F5A0;

  transition: color 0.2s ease, text-shadow 0.2s ease; //задаем правила анимации
  
  ${({ $active }) => {
    if ($active) {
      return `
      color: #00D9F5;
      text-shadow: 0 0 10px #00D9F5;
    `;
    }
    return "";
  }}
`;