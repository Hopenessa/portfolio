import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

export const FooterSection = styled.footer`
    width: 100%;
    padding: 28px 0;
    background: #07070f;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media ${Theme.media.mobile} {
        flex-direction: column;
        text-align: center;
    }
`;

export const FooterIdentity = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const FooterName = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
`;

export const FooterRole = styled.p`
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
`;

export const Copyright = styled.p`
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
`;
