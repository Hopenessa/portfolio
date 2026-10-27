import {
    SkillsSection,
    SkillsRow,
    SkillsTitle
} from "./Skills.styles.ts";

import {Icon} from "../sprites/Icon.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import { Fade } from "react-awesome-reveal";

const icons = [
    { id: "html5Svg", viewBox: "0 0 20 20" },
    { id: "css3Svg", viewBox: "0 0 150 150" },
    { id: "javaScriptSvg", viewBox: "0 0 512 512" },
    { id: "reactSvg", viewBox: "0 0 150 150" },
    { id: "typeScriptSvg", viewBox: "0 0 150 150" },
    { id: "styledComponentsSvg", viewBox: "0 0 150 150" },
    { id: "sassSvg", viewBox: "0 -4 32 32" },
    { id: "gitSvg", viewBox: "0 0 150 150" },
    { id: "githubSvg", viewBox: "0 0 16 16" },
    { id: "bootstrapSvg", viewBox: "0 0 16 16" },
    { id: "vsCodeSvg", viewBox: "0 0 20 20" },
    { id: "figmaSvg", viewBox: "0 0 32 32" },

];


export default function Skills(): JSX.Element {
    return (
        <SkillsSection id = "skills">
            <Container>
                <FlexWrapper $direction="column">
                    <SkillsTitle>My skills</SkillsTitle>
                    <Fade duration={900} triggerOnce fraction={0.5}>
                    <SkillsRow>
                        {icons.map((icon) => (
                            <Icon
                                key={icon.id}
                                id={icon.id}
                                width={80}
                                height={80}
                                viewBox={icon.viewBox}
                                iconHover="none"
                                iconColor="#FFFFFF7F"
                            />
                        ))}
                    </SkillsRow>
                    </Fade>
                </FlexWrapper>
            </Container>
        </SkillsSection>
    );
}
