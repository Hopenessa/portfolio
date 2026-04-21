import {
    FooterSection
} from "./Footer.styles.ts";

import { Icon } from "../sprites/Icon.tsx";

const icons = [
    "githubSvg",
    "telegramSvg",
    "whatsappSvg",
    "mailSvg"
];


export default function Footer(): JSX.Element {
    return (
        <FooterSection>
                {icons.map((id) => (
                    <Icon key={id} id={id} width={40} height={40} viewBox={"0 0 16 16"}/>
                ))}
        </FooterSection>
    );
}