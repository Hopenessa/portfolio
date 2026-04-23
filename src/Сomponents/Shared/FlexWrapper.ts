import styled from "styled-components";

type FlexProps = {
    $direction?: "row" | "column";
};

export const FlexWrapper = styled.div<FlexProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${({ $direction }) => $direction || "row"};

    align-items: center;
    justify-content: center;
`;