import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 1400px;
  height: 70px;

  background: #090a14;

  clip-path: polygon(0 0, 100% 0, 94% 100%, 8% 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const HeaderNavItem = styled.div<{ $active?: boolean }>`
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;

  color: #00F5A0;

  transition: all 0.2s ease;

  ${({ $active }) =>
    $active &&
    `
    color: #00D9F5;
    text-shadow: 0 0 10px #00D9F5;
  `}

  &:hover {
    color: #00D9F5;
    text-shadow: 0 0 6px #00D9F5;
  }
`;