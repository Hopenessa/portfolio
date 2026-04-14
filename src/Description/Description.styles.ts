import styled from "styled-components";

export const DescriptionSection = styled.section`
  width: 100%;
  background: #07070f;
    padding-top: 100px;
    padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptionTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 27px;
  line-height: 26px;
  letter-spacing: 0.04em;

  color: #BDEBEA;

  text-align: center;
  margin-bottom: 24px;
`;

export const DescriptionText = styled.p`
  max-width: 800px;

  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.04em;

  color: #BDEBEA;

  text-align: center;
`;