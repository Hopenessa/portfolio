import styled from "styled-components";
import Image from "../assets/images/background3.svg"

export const ContactsSection = styled.section`
    width: 100%;
    min-height: 100vh;

    background: url(${Image}) center/cover no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
`;

export const ContactsTitle = styled.h2`
  margin: 0 0 40px 0;

  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 40px;
  line-height: 26px;
  letter-spacing: 0.04em;

  color: #BDEBEA;
`;

export const FormWrapper = styled.div`
  width: 676px;
  height: 429px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  flex: 1;
  height: 51px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  padding: 0 16px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  color: white;
  outline: none;
`;

export const Textarea = styled.textarea`
  flex: 1;
  height: 225px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  padding: 16px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  color: white;
  resize: none;
  outline: none;
`;

export const ContactsButton = styled.button`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    
    width: 188px;
    height: 162px;

  align-self: center;

  border: none;
  cursor: pointer;

  color: white;
  font-weight: 600;
    font-size: 30px;

  background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);

  clip-path: polygon(0 0, 100% 0, 88% 100%, 12% 100%);

  transition: 0.2s;

  &:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

export const FormLabel = styled.div`
  width: 100px;

  font-family: Montserrat, sans-serif;
  font-size: 16px;
  color: #BDEBEA;
`;