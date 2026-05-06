import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

export const CardSection = styled.div`
    height: 500px;

    background: #0D0E1B;
    backdrop-filter: blur(10px);

    display: flex;
    flex-direction: column;

    overflow: hidden;

    border-radius: 2px;

    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        transform-origin: center;
    }

    @media ${Theme.media.mobile} {
        &:hover {
            transform: none;
        }
    }


`;

export const ImageLink = styled.a`
    display: block;
    text-decoration: none;
`;


export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const CardBody = styled.div`
    padding: 20px;

    display: flex;
    flex-direction: column;
    
    height: 100%;
`;

export const CardTitle = styled.h3`
    
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: 0.04em;

    color: #ffffff;
    
    margin-bottom: 20px;
    
`;

export const CardText = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 100;
    font-size: 1.1rem;
    line-height: 1.5rem;
    letter-spacing: 0.05em;

    color: rgba(255, 255, 255, 0.7);

`;

export const CardLinks = styled.div`
    margin-top: auto; //прижимает ссылку вниз контейнера

    display: flex;
    justify-content: space-between; //распределяет по контейнеру не оставляя отступов слева и справа

    padding-top: 15px;
`;

export const CardLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 1rem;
    background: linear-gradient(90deg, #ff6200, #ffcc00);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
    color: transparent;
    transition: transform 0.2s ease;


    &:hover {
        transform: scale(1.1);
        transform-origin: center;
        text-decoration: underline;
    }
`;