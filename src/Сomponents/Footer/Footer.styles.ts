import styled from "styled-components";

export const FooterSection = styled.footer`
    width: 100%;
    background: #07070f;

    display: flex;
    
`;

export const FooterList = styled.ul`
    display: flex;
    gap: clamp(20px, 4vw, 50px);
    padding: 20px;
    margin: 0;
    list-style: none;
`;

export const FooterItem = styled.li`
    display: flex;
`;

export const FooterLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
`;