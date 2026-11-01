import {ProjectSection, ProjectsGrid, ProjectsTitle} from "./Projects.styles.ts";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import { Card } from "../Shared/Card/Card.tsx";
import Image from "../../assets/images/CardImage.webp"
import GoldenMustangImage from "../../assets/images/GoldenMustangStudio.webp";
import WoodlandKreaturesImage from "../../assets/images/WoodlandKreatures.webp";
import { Fade } from "react-awesome-reveal";

const projects = [
    {
        image: GoldenMustangImage,
        title: "Golden Mustang Studio",
        description: "A custom tattoo artist’s portfolio with a complete appointment management system. Designed and built from scratch, with responsive layouts, an interactive gallery, subtle animations, and optimized imagery.\n\nIncludes session booking, consultation requests, live availability updates, and a secure admin dashboard. A Telegram bot handles booking notifications, confirmations, rescheduling, and reminders.",
        techStack: "React, TypeScript, styled-components, Vite, Node.js, SQLite, Telegram Bot API.",
        liveUrl: "https://goldenmustangstudio.com/",
        codeUrl: "https://github.com/Hopenessa/tattoo-studio-fullstack-demo",
        liveLabel: "Live Website",
        codeLabel: "View Demo Code",
        codeNote: "Links to the demo repository."
    },
    {
        image: WoodlandKreaturesImage,
        title: "Woodland Kreatures",
        description: "A portfolio website for an art doll creator, designed and built from scratch around an enchanted woodland theme. Features a custom background created specifically for the project, softly twinkling fireflies, an automatic gallery, and an image viewer with keyboard navigation. Includes a responsive layout and mobile navigation.",
        techStack: "React, TypeScript, styled-components, Vite.",
        liveUrl: "https://hopenessa.github.io/Woodland_Kreatures/",
        codeUrl: "https://github.com/Hopenessa/Woodland_Kreatures"
    },
    {
        image: Image,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        liveUrl: "#",
        codeUrl: "#"
    },

];



export default function Projects(): JSX.Element {
    return (
        <ProjectSection id = "projects">
            <Container>
                <FlexWrapper $direction="column">
                    <ProjectsTitle>Projects</ProjectsTitle>
                    <ProjectsGrid>
                        <Fade cascade
                              damping={0.2}
                              duration={700}
                              triggerOnce>
                        {projects.map((project, i) => (
                            <Card key={i} {...project} />
                        ))}
                        </Fade>
                    </ProjectsGrid>
                </FlexWrapper>
            </Container>
        </ProjectSection>
    );
}
