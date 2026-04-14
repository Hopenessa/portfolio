import styled from "styled-components";

export const SkillsSection = styled.section`
    width: 100%;
    background: #0d0e1b;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 60px;

    padding-top: 50px;
    padding-bottom: 50px;
`;

export const SkillsRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 50px;
    flex-wrap: nowrap;
`;

export const Circle = styled.div`
  width: 80px;
  height: 80px;

  border-radius: 50%;
  background: #0f1720;

  display: flex;
  align-items: center;
  justify-content: center;
`;


export const SkillsTitle = styled.h2`
    margin: 0;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 27px;
    line-height: 26px;
    letter-spacing: 0.04em;

    color: #BDEBEA;

    text-align: center;
`;