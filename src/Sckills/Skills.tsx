import {
    SkillsSection,
    SkillsRow,
    Circle,
    SkillsTitle
} from "./Skills.styles";

import { Icon } from "../Icon/Icon";

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
            <SkillsTitle>My skills</SkillsTitle>

            <SkillsRow>
                {icons.map((id) => (
                    <Circle key={id}>
                        <Icon id={id} width={50} height={50} />
                    </Circle>
                ))}
            </SkillsRow>
        </SkillsSection>
    );
}