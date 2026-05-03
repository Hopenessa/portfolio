import {
    DescriptionSection,
    DescriptionTitle,
    DescriptionText, ContentWrapper
} from "./Description.styles.ts";
import {Frame} from "../sprites/Frame.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import {Fade} from "react-awesome-reveal";


export default function Description() {
    return (
        <DescriptionSection id="about me">
            <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={false} flippedHorizontal={true}
                   Top="-1px"/>
            <Container>

                <FlexWrapper $direction="column">
                    <ContentWrapper>
                        <Fade direction={"down"} triggerOnce={true}>
                            <DescriptionTitle>About me</DescriptionTitle>
                            <DescriptionText>
                                Hello everyone! My name is Nadezhda, and I am a web developer from Russia.

                                I’m currently at an early stage of my development journey, but I’ve already gained
                                practical experience with React, TypeScript, and Styled Components, along with other
                                modern frontend tools. I focus on building clean, responsive interfaces and continuously
                                improving my skills through hands-on projects.

                                Right now I’m actively strengthening my knowledge and working on expanding my portfolio
                                with real-world projects. I’m motivated to grow as a developer and open to collaboration
                                and new opportunities.
                            </DescriptionText>
                        </Fade>
                    </ContentWrapper>

                </FlexWrapper>
                <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={true} flippedHorizontal={false}
                       Bottom="-1px"/>
            </Container>

        </DescriptionSection>
    );
}