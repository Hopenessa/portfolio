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
import { Fade } from "react-awesome-reveal";


export default function Preview(): JSX.Element {
    return (
        <PreviewSection id="home">
            <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={false} flippedHorizontal={true}
                   Top="-1px" marginTop="70px"/>
            <Container>
                <FlexWrapper $direction="row">
                    <PreviewContainer>
                        <TextSection>
                            <Fade direction={"down"} triggerOnce={true}>
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
                            <PreviewName>Hopenessa</PreviewName>
                            <PreviewText>
                                I build custom websites for creatives, independent professionals, and small businesses — from personal portfolios to business websites. I can create an original design from scratch or bring your existing design to life, building responsive websites that showcase your work and help clients get in touch.
                            </PreviewText>
                            <LinkButton onClick={() => scrollToSection("contacts")}>Contact me</LinkButton>
                            </Fade>
                        </TextSection>
                        <Fade direction={"down"} triggerOnce={true}>
                        <PreviewImage src={Avatar} alt="profile"/>
                        </Fade>
                    </PreviewContainer>
                </FlexWrapper>
            </Container>


            <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={true} flippedHorizontal={true}
                   Bottom="-1px"/>
        </PreviewSection>
    );
}
