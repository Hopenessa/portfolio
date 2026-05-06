import styled from "styled-components";

export const Button = styled.button`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;

    width: auto;
    height: 45px;

    border: none;
    padding: 0 20px;

    color: #0a0e39;
    font-size: 1rem;
    font-weight: 600;

    background: linear-gradient(90deg, #ff6200 0%, #ffcc00 100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    cursor: pointer;

    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.1);
        transform-origin: center;
        background: linear-gradient(90deg, #ffcc00 0%, #ff6200 100%)
    }

`;