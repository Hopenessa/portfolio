import {useState, useEffect} from "react";
import {
    HeaderNav,
    HeaderWrapper,
    HeaderNavItem,
    HeaderNavList,
    LogoWrapper
} from "./Header.styles.ts";
import {Container} from "../../Shared/Container.ts";
import {FlexWrapper} from "../../Shared/FlexWrapper.ts";
import {scrollToSection} from "../../Shared/ScrollToSections.ts";
import {Icon} from "../../sprites/Icon.tsx";


const items = ["HOME", "PROJECTS", "SKILLS", "ABOUT ME", "CONTACTS"];

export default function Header(): JSX.Element {
    const [active, setActive] = useState("HOME");

    useEffect(() => {
        const sections = document.querySelectorAll("section, header, footer");
        const projectsSection = document.getElementById("projects");

        const defaultObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (
                        entry.isIntersecting &&
                        entry.target.id !== "projects"
                    ) {
                        setActive(entry.target.id.toUpperCase());
                    }
                });
            },
            {
                threshold: 0.6
            }
        );

        const projectsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive("PROJECTS");
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        sections.forEach((section) => {
            if (section.id !== "projects") {
                defaultObserver.observe(section);
            }
        });

        if (projectsSection) {
            projectsObserver.observe(projectsSection);
        }

        return () => {
            defaultObserver.disconnect();
            projectsObserver.disconnect();
        };
    }, []);

    return (
        <HeaderWrapper>
            <Container>
                <FlexWrapper $direction="row">
                    <LogoWrapper>
                        <Icon
                            id="logoSvg"
                            width={50}
                            height={50}
                            viewBox="0 0 454 454"
                            iconColor="#ffffff"
                            iconHover="none"
                        />
                    </LogoWrapper>
                    <HeaderNav>
                        <HeaderNavList>
                            {items.map((item) => (
                                <li key={item}>
                                    <HeaderNavItem
                                        $active={active === item}
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                    >
                                        {item}
                                    </HeaderNavItem>
                                </li>
                            ))}
                        </HeaderNavList>
                    </HeaderNav>
                </FlexWrapper>
            </Container>
        </HeaderWrapper>
    );
}