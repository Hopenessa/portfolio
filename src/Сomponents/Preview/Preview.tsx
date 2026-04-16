import {
    PreviewSection,
    PreviewContainer,
    Text,
    PreviewLabel,
    PreviewName,
    PreviewText,
    PreviewImage,
    PreviewWrapper,
    Img
} from "./Preview.styles.ts";
import {Button} from "../Shared/Button.ts";
import Avatar from "../../assets/images/avatar.webp";

export default function Preview(): JSX.Element {
    return (
        <PreviewWrapper>
        <PreviewSection>
            <PreviewContainer>
                <Text>
                    <PreviewLabel>WEB DEVELOPER</PreviewLabel>

                    <PreviewName>John Doe</PreviewName>

                    <PreviewText>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt.
                    </PreviewText>
                    <Button>Contact me</Button>
                </Text>

                <Img>
                    <PreviewImage src={Avatar} alt="profile" />
                </Img>
            </PreviewContainer>
        </PreviewSection>
        </PreviewWrapper>
    );
}