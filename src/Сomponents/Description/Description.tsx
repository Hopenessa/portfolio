import {
    DescriptionSection,
    DescriptionTitle,
    DescriptionText, ContentWrapper
} from "./Description.styles.ts";
import {Frame} from "../sprites/Frame.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";


export default function Description() {
    return (
        <DescriptionSection id="about me">
            <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={false} flippedHorizontal={true}
                   Top="-1px"/>
            <Container>

                <FlexWrapper $direction="column">
                    <ContentWrapper>
                            <DescriptionTitle>About me</DescriptionTitle>
                            <DescriptionText>
                                Hi, I’m Nadezhda, a frontend developer based in Russia. I create websites for people who want to share their work, introduce their business, or build an online presence.
                                {"\n\n"}
                                I enjoy both the visual and technical sides of building a website. I can develop an original design around your ideas or work from a design you already have, paying attention to layout, typography, imagery, and how everything works across different screen sizes.
                                {"\n\n"}
                                I work with React, TypeScript, and styled-components, and continue to develop my skills through practical projects. I’m open to freelance projects and collaboration, and would love to hear what you have in mind.
                            </DescriptionText>
                    </ContentWrapper>

                </FlexWrapper>
                <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={true} flippedHorizontal={false}
                       Bottom="-1px"/>
            </Container>

        </DescriptionSection>
    );
}
