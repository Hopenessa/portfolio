import {
    SkillsSection,
    SkillsRow,
    SkillsTitle
} from "./Skills.styles.ts";

import {Icon} from "../sprites/Icon.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";

const icons = [
    "codeSvg",
    "reactSvg",
    "css3Svg",
    "typeScriptSvg",
    "styledComponentsSvg",
    "gitSvg"
];


export default function Skills(): JSX.Element {
    return (
        <SkillsSection>
            <Container>
                <FlexWrapper $direction="column">
                    <SkillsTitle>My skills</SkillsTitle>
                    <SkillsRow>
                        {icons.map((id) => (
                            <Icon key={id} id={id} width={80} height={80} viewBox={"0 0 150 150"}/>
                        ))}
                    </SkillsRow>
                </FlexWrapper>
            </Container>
        </SkillsSection>
    );
}