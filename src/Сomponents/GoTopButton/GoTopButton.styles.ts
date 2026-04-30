import styled from "styled-components";

export const GoTopButtonWrapper = styled.button`
    position: fixed;
    right: 30px;
    bottom: 30px;

    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 12px;

    background: #14141B;

    cursor: pointer;
    z-index: 1000;

    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(255, 146, 0, 0.4);
    }
`;