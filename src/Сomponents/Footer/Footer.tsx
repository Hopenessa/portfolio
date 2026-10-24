import {Container} from "../Shared/Container.ts";
import {FooterSection, FooterContent, FooterIdentity, FooterName, FooterRole, Copyright} from "./Footer.styles.ts";

export default function Footer(): JSX.Element {
    return (
        <FooterSection>
            <Container>
                <FooterContent>
                    <FooterIdentity>
                        <FooterName>Hopenessa</FooterName>
                        <FooterRole>Frontend developer</FooterRole>
                    </FooterIdentity>
                    <Copyright>© {new Date().getFullYear()} Hopenessa</Copyright>
                </FooterContent>
            </Container>
        </FooterSection>
    );
}
