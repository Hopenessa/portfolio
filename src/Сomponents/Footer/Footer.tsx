import {
    FooterSection,
    FooterList,
    FooterItem,
    FooterLink
} from "./Footer.styles.ts";

import {Icon} from "../sprites/Icon.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";

const icons = [
    "githubSvg",
    "telegramSvg",
    "whatsappSvg",
    "mailSvg"
];


export default function Footer(): JSX.Element {
    return (
        <FooterSection>
            <Container>
                <FlexWrapper $direction="row">
                    <FooterList>
                        {icons.map((id) => (
                            <FooterItem key={id}>
                                <FooterLink href="#">
                                    <Icon
                                        id={id}
                                        width={40}
                                        height={40}
                                        viewBox="0 0 16 16"
                                    />
                                </FooterLink>
                            </FooterItem>
                        ))}
                    </FooterList>
                </FlexWrapper>
            </Container>
        </FooterSection>
    );
}