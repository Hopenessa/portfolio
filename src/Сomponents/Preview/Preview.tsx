import {
    PreviewContainer,
    TextSection,
    PreviewLabel,
    PreviewName,
    PreviewText,
    PreviewImage,
    PreviewSection,
} from "./Preview.styles.ts";
import {Button} from "../Shared/Button.ts";
import Avatar from "../../assets/images/avatar.svg";
import {Frame} from "../sprites/Frame.tsx";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import {Container} from "../Shared/Container.ts";

export default function Preview(): JSX.Element {
    return (
        <PreviewSection>
            <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#090a14" isLookUp={false} flippedHorizontal={true}
                   Top="-1px" marginTop="70px"/>
            <Container>
                <FlexWrapper $direction="row">
                    <PreviewContainer>
                        <TextSection>
                            <PreviewLabel>WEB DEVELOPER</PreviewLabel>
                            <PreviewName>John Doe</PreviewName>
                            <PreviewText>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt.
                            </PreviewText>
                            <Button>Contact me</Button>
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