import {
    SkillsSection,
    SkillsRow,
    SkillsTitle
} from "./Skills.styles.ts";

import { Icon } from "../sprites/Icon.tsx";
import {Frame} from "../sprites/Frame.tsx";

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
            <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={false} flippedHorizontal={false}/>
            <SkillsTitle>My skills</SkillsTitle>
            <SkillsRow>
                {icons.map((id) => (
                    <Icon key={id} id={id} width={80} height={80} viewBox={"0 0 150 150"}/>
                ))}
            </SkillsRow>
        </SkillsSection>
    );
}