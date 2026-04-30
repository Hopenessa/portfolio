import Typewriter from 'typewriter-effect';
import {
    PreviewContainer,
    TextSection,
    PreviewLabel,
    PreviewName,
    PreviewText,
    PreviewImage,
    PreviewSection,
    LinkButton,
} from "./Preview.styles.ts";
import Avatar from "../../assets/images/avatar.svg";
import {Frame} from "../sprites/Frame.tsx";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import {Container} from "../Shared/Container.ts";
import {scrollToSection} from "../Shared/ScrollToSections.ts";


export default function Preview(): JSX.Element {
    return (
        <PreviewSection id="home">
            <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={false} flippedHorizontal={true}
                   Top="-1px" marginTop="70px"/>
            <Container>
                <FlexWrapper $direction="row">
                    <PreviewContainer>
                        <TextSection>
                            <PreviewLabel>
                                <p>WEB DEVELOPER</p>
                                <Typewriter
                                    options={{
                                        cursor: ""
                                    }}

                                    onInit={(typewriter) => {
                                        typewriter.typeString('WEB DEVELOPER').start();

                                    }}
                                />
                            </PreviewLabel>
                            <PreviewName>Hopenesa</PreviewName>
                            <PreviewText>
                                Frontend developer building web applications with React and TypeScript. I focus on
                                creating structured, maintainable and responsive interfaces. I care about performance
                                and consistency across devices. My work is aimed at practical and scalable solutions.
                            </PreviewText>
                            <LinkButton onClick={() => scrollToSection("contacts")}>Contact me</LinkButton>
                        </TextSection>
                        <PreviewImage src={Avatar} alt="profile"/>
                    </PreviewContainer>
                </FlexWrapper>
            </Container>


            <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={true} flippedHorizontal={true}
                   Bottom="-1px"/>
        </PreviewSection>
    );
}
