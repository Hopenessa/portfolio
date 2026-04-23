import styled from "styled-components";

export const Button = styled.button`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;

    width: 130px;
    height: 45px;

    border: none;

    color: #0a0e39;
    font-size: 16px;
    font-weight: 600;

    background: linear-gradient(90deg, #ff6200 0%, #ffcc00 100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    cursor: pointer;

    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.2s ease;

    &:hover {
        box-shadow: 0 0 10px #ffc400;
        transform: scale(1.1);
        transform-origin: center;
    }

`;